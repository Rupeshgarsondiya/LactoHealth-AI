# backend/app/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

from motor.motor_asyncio import AsyncIOMotorClient
from passlib.context import CryptContext

# --------------------------
# Database Connection (Local MongoDB)
# --------------------------
MONGO_URI = "mongodb://localhost:27017"
MONGO_DB = "LactoHealthAI"

client = AsyncIOMotorClient(MONGO_URI)
db = client[MONGO_DB]

# --------------------------
# Password Hashing
# --------------------------
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# --------------------------
# FastAPI App
# --------------------------
app = FastAPI(title="Basic Auth MVP")

# Allow React frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------
# Schemas
# --------------------------
class UserCreate(BaseModel):
    full_name: str
    email: Optional[EmailStr] = None
    mobile: str
    country: str
    city: str
    village: str
    password: str

class LoginSchema(BaseModel):
    identifier: str  # email or mobile
    password: str

# --------------------------
# Helpers
# --------------------------
def user_serializer(user_doc) -> dict:
    """Convert MongoDB doc to dict for response"""
    return {
        "id": str(user_doc["_id"]),
        "full_name": user_doc["full_name"],
        "email": user_doc.get("email"),
        "mobile": user_doc["mobile"],
        "country": user_doc.get("country"),
        "city": user_doc.get("city"),
        "village": user_doc.get("village"),
        "created_at": user_doc.get("created_at"),
    }

# --------------------------
# Routes
# --------------------------

@app.post("/signup")
async def signup(payload: UserCreate):
    # Check if user already exists
    existing = await db["User"].find_one(
        {"$or": [{"mobile": payload.mobile}, {"email": payload.email}]}
    )
    if existing:
        raise HTTPException(status_code=400, detail="User with this mobile/email already exists")

    user_doc = payload.dict()
    # Hash password
    user_doc["hashed_password"] = pwd_context.hash(user_doc.pop("password"))
    user_doc["created_at"] = datetime.utcnow()

    res = await db["User"].insert_one(user_doc)
    user_doc["_id"] = res.inserted_id
    return user_serializer(user_doc)

@app.post("/login")
async def login(payload: LoginSchema):
    # Find user by email or mobile
    query = {"$or": [{"email": payload.identifier}, {"mobile": payload.identifier}]}
    user = await db["User"].find_one(query)

    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    # Verify password
    if not pwd_context.verify(payload.password, user.get("hashed_password", "")):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {"message": "Login successful", "user": user_serializer(user)}
