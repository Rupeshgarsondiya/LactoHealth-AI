
## 🌟 Overview

LactoHealth AI is a comprehensive dairy farm management system that leverages artificial intelligence to help farmers optimize milk production, monitor animal health, and make data-driven decisions. The system features voice-enabled multilingual chat support, predictive analytics, and real-time health monitoring.

### 🎯 Key Features

- **📊 Milk Production Prediction**: ML-based yield forecasting using XGBoost
- **🏥 Health Monitoring**: AI disease detection and prevention recommendations  
- **🤖 AI-Powered Chatbot**: Multilingual voice-enabled assistant (English, Hindi, Spanish)
- **📱 Modern Web Interface**: Responsive React dashboard with real-time updates
- **🎤 Voice Integration**: Speech-to-text and text-to-speech capabilities
- **📈 Analytics Dashboard**: Comprehensive farm performance insights
- **👥 User Management**: Secure authentication and profile management
- **📄 Report Generation**: Automated PDF reports with recommendations

## 🏗️ Project Structure

```
LactoHealth-AI/
├── 📁 backend/                 # FastAPI Backend
│   ├── 📁 app/                # Application code
│   │   ├── main.py           # Main FastAPI application
│   │   ├── Milk_Yield.py     # Milk prediction models
│   │   ├── animal_disease.py # Health monitoring models
│   │   └── app.py            # Additional app utilities
│   ├── prompt_template.py    # AI prompt templates
│   └── requirements.txt      # Python dependencies
├── 📁 frontend/               # React Frontend
│   ├── 📁 src/               # Source code
│   │   ├── 📁 components/    # React components
│   │   │   ├── Dashboard.jsx # Main dashboard
│   │   │   ├── Chatbot.jsx   # Voice-enabled chatbot
│   │   │   ├── Login.jsx     # Authentication
│   │   │   └── ...           # Other components
│   │   ├── App.js            # Main React app
│   │   └── index.js          # Entry point
│   ├── package.json          # Node.js dependencies
│   └── tailwind.config.js    # Tailwind CSS config
├── 📁 models/                 # ML Models
│   ├── model.pkl             # Health monitoring model
│   └── xgb_pipeline.pkl      # Milk prediction model
├── 📁 tests/                  # Test files
│   └── test_chatbot.py       # Chatbot tests
├── 📁 docs/                   # Documentation
├── 📁 scripts/                # Utility scripts
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites

- **Python 3.8+**
- **Node.js 16+**
- **MongoDB 4.4+**
- **Ollama** (for AI chatbot)

### 1. Clone Repository

```bash
git clone https://github.com/your-username/LactoHealth-AI.git
cd LactoHealth-AI
```

### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start MongoDB (if not running)
sudo systemctl start mongod

# Install and start Ollama
curl -fsSL https://ollama.ai/install.sh | sh
ollama pull llama3.2:1b

# Start backend server
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### 3. Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

### 4. Access Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 🎤 Voice Features

### Speech-to-Text (Voice Input)
1. Click the **microphone button** in the chat input
2. Speak your question in any supported language
3. Watch real-time transcription appear
4. Click **stop button** to end voice input

### Text-to-Speech (Voice Output)
1. Click the **speaker icon** on any bot response
2. Listen to AI responses in natural voice
3. Click **stop button** to interrupt playback

### Supported Languages
- **English**: Full voice support
- **Hindi**: Native voice recognition and synthesis
- **Spanish**: Complete multilingual experience

## 🤖 AI Chatbot Capabilities

### Dairy Farming Expertise
- Milk production optimization
- Feed management recommendations
- Breeding and genetics advice
- Disease prevention strategies
- Farm management best practices

### Health Monitoring
- Symptom analysis and diagnosis
- Treatment recommendations
- Preventive care guidelines
- Emergency response protocols
- Veterinary consultation advice

### Multilingual Support
- Automatic language detection
- Context-aware responses
- Cultural farming practices
- Region-specific recommendations

## 📊 Machine Learning Models

### Milk Production Prediction
- **Algorithm**: XGBoost Regression
- **Features**: 18 input parameters including animal data, environmental factors, and feed intake
- **Accuracy**: 95%+ prediction accuracy
- **Use Case**: Daily milk yield forecasting

### Health Monitoring System
- **Algorithm**: Random Forest Classifier
- **Features**: Symptoms, vital signs, and behavioral indicators
- **Accuracy**: 92%+ disease detection accuracy
- **Use Case**: Early disease detection and prevention

## 🔧 API Endpoints

### Authentication
- `POST /register` - User registration
- `POST /login` - User authentication
- `GET /profile/{user_id}` - User profile

### Predictions
- `POST /predict/milk` - Milk production prediction
- `POST /predict/health` - Health monitoring analysis
- `GET /predictions/{user_id}` - User prediction history

### Chatbot
- `POST /chat` - AI chatbot interaction
- `GET /chat/history/{user_id}` - Chat history

### Reports
- `POST /reports/generate` - Generate PDF reports
- `GET /reports/{user_id}` - User reports

## 🛠️ Development

### Running Tests

```bash
# Backend tests
cd backend
python -m pytest tests/

# Frontend tests
cd frontend
npm test
```

### Code Quality

```bash
# Python linting
flake8 backend/
black backend/

# JavaScript linting
cd frontend
npm run lint
```

### Environment Variables

Create `.env` files in respective directories:

**Backend (.env)**
```env
MONGO_URI=mongodb://localhost:27017
MONGO_DB=LactoHealthAI
OLLAMA_BASE_URL=http://localhost:11434
SECRET_KEY=your-secret-key
```

**Frontend (.env)**
```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_ENVIRONMENT=development
```

## 📱 Mobile Responsiveness

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Touch interfaces
- Voice interactions

## 🔒 Security Features

- **Password Hashing**: Bcrypt encryption
- **JWT Authentication**: Secure token-based auth
- **CORS Protection**: Configured for production
- **Input Validation**: Pydantic schema validation
- **Rate Limiting**: API request throttling

## 🌍 Deployment

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build
```

### Production Deployment

```bash
# Backend (using Gunicorn)
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker

# Frontend (build for production)
npm run build
serve -s build
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Lead Developer**: Rupesh Garsondiya
- **AI/ML Engineer**: Karan chauhan
- **Frontend Developer**: Kasak Gohil
- **Backend Engineer**: kartik Dafda



