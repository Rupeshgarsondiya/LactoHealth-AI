# 📚 LactoHealth AI - API Documentation

## Base URL
```
http://localhost:8000
```

## Authentication

### Register User
```http
POST /register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "+1234567890",
  "country": "India",
  "state": "Maharashtra",
  "city": "Mumbai",
  "village": "Andheri",
  "password": "securepassword123"
}
```

### Login User
```http
POST /login
Content-Type: application/json

{
  "identifier": "john@example.com",
  "password": "securepassword123",
  "login_type": "email"
}
```

## Milk Production Prediction

### Predict Milk Yield
```http
POST /predict/milk
Content-Type: application/json

{
  "Species": "Cow",
  "Breed": "Holstein",
  "Age_Years": 4.5,
  "Parity": 2,
  "Lactation_Stage": "Mid",
  "Days_In_Milk": 150,
  "Feed_Intake_kg": 22.5,
  "Water_Intake_L": 80,
  "Dry_Matter_Intake_kg": 20,
  "Rumination_Time_min": 480,
  "Lying_Time_hr": 12,
  "Standing_Time_hr": 8,
  "Steps_Count": 3500,
  "Activity_Level": "Moderate",
  "Body_Temp_C": 38.5,
  "Heart_Rate_bpm": 65,
  "Respiration_Rate": 25,
  "Environment_Temp_C": 22,
  "Humidity_percent": 65,
  "THI_Index": 68,
  "Milking_Frequency": 3,
  "Milk_Fat_percent": 3.8,
  "Milk_Protein_percent": 3.2,
  "Milk_Lactose_percent": 4.8,
  "Somatic_Cell_Count": 150000,
  "Conductivity_mS_cm": 4.2,
  "Body_Weight_kg": 550
}
```

## Health Monitoring

### Predict Animal Health
```http
POST /predict/health
Content-Type: application/json

{
  "Animal_Type": "Cow",
  "Breed": "Holstein",
  "Age": 4.5,
  "Gender": "Female",
  "Weight": 550,
  "Symptom_1": "Fever",
  "Symptom_2": "Loss of appetite",
  "Symptom_3": "Lethargy",
  "Symptom_4": "Nasal discharge",
  "Duration": 3,
  "Appetite_Loss": "Yes",
  "Vomiting": "No",
  "Diarrhea": "No",
  "Coughing": "Yes",
  "Labored_Breathing": "No",
  "Lameness": "No",
  "Skin_Lesions": "No",
  "Nasal_Discharge": "Yes",
  "Eye_Discharge": "No",
  "Body_Temperature": 39.5,
  "Heart_Rate": 85
}
```

## AI Chatbot

### Chat with AI
```http
POST /chat
Content-Type: application/json

{
  "message": "How can I increase milk production?",
  "user_id": "user123",
  "language": "english"
}
```

### Get Chat History
```http
GET /chat/history/{user_id}
```

## Reports

### Generate Report
```http
POST /reports/generate
Content-Type: application/json

{
  "user_id": "user123",
  "prediction_type": "health",
  "prediction_id": "pred123"
}
```

### Get User Reports
```http
GET /reports/{user_id}
```

## Response Formats

### Success Response
```json
{
  "status": "success",
  "data": {
    "prediction": 25.5,
    "confidence": 0.92,
    "recommendations": ["Increase feed quality", "Monitor temperature"]
  },
  "message": "Prediction completed successfully"
}
```

### Error Response
```json
{
  "status": "error",
  "error": "Invalid input data",
  "details": "Age must be a positive number"
}
```
