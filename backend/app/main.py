# backend/main.py - UPDATED VERSION WITH NEW LOGIN SCHEMA

from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorClient
from passlib.context import CryptContext
import logging
import re

# Database Connection
MONGO_URI = "mongodb://localhost:27017"
MONGO_DB = "LactoHealthAI"
client = AsyncIOMotorClient(MONGO_URI)
db = client[MONGO_DB]

# Password Hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Email validation helper
def is_valid_email(email: str) -> bool:
    if not email:
        return True
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

# FastAPI App
app = FastAPI(title="LactoHealth AI Authentication API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Pydantic Models (Fixed - no EmailStr)
class UserCreate(BaseModel):
    name: str
    email: Optional[str] = None
    mobile: str
    country: str
    state: str
    city: str
    village: Optional[str] = None
    password: str

# UPDATED: New Login Schema to handle email/mobile selection
class LoginSchema(BaseModel):
    identifier: str  # This will be either email or mobile
    password: str
    login_type: str  # "email" or "mobile"

def user_serializer(user_doc) -> dict:
    return {
        "id": str(user_doc["_id"]),
        "name": user_doc["name"],
        "email": user_doc.get("email"),
        "mobile": user_doc["mobile"],
        "country": user_doc.get("country"),
        "state": user_doc.get("state"),
        "city": user_doc.get("city"),
        "village": user_doc.get("village"),
        "created_at": user_doc.get("created_at"),
    }

@app.get("/")
async def root():
    return {"message": "LactoHealth AI Authentication API is running!"}

# UNCHANGED: Keep the signup exactly as it was
@app.post("/api/signup")
async def signup(payload: UserCreate):
    try:
        if payload.email and not is_valid_email(payload.email):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid email format"
            )
        
        existing_user = None
        if payload.email:
            existing_user = await db["users"].find_one({"email": payload.email})
        if not existing_user:
            existing_user = await db["users"].find_one({"mobile": payload.mobile})
        
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User with this email or mobile number already exists"
            )
        
        user_data = payload.dict()
        hashed_password = pwd_context.hash(user_data.pop("password"))
        user_data["hashed_password"] = hashed_password
        user_data["created_at"] = datetime.utcnow()
        
        result = await db["users"].insert_one(user_data)
        user_data["_id"] = result.inserted_id
        
        return {
            "success": True,
            "message": "Account created successfully!",
            "user": user_serializer(user_data)
        }
    except HTTPException as he:
        raise he
    except Exception as e:
        logging.error(f"Signup error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error occurred during signup"
        )

# UPDATED: New login logic to handle email/mobile selection
@app.post("/api/login")
async def login(payload: LoginSchema):
    try:
        # Build query based on login type
        if payload.login_type == "email":
            # Login with email
            query = {"email": payload.identifier}
            if not is_valid_email(payload.identifier):
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail="Invalid email format"
                )
        elif payload.login_type == "mobile":
            # Login with mobile
            query = {"mobile": payload.identifier}
            # Basic mobile validation
            if not payload.identifier.replace("+", "").replace(" ", "").replace("-", "").isdigit():
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail="Invalid mobile number format"
                )
        else:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid login type. Must be 'email' or 'mobile'"
            )
        
        # Find user based on the query
        user = await db["users"].find_one(query)
        
        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail=f"No account found with this {payload.login_type}"
            )
        
        # Verify password
        if not pwd_context.verify(payload.password, user.get("hashed_password", "")):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid password"
            )
        
        return {
            "success": True,
            "message": "Login successful!",
            "user": user_serializer(user)
        }
    except HTTPException as he:
        raise he
    except Exception as e:
        logging.error(f"Login error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error occurred during login"
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
