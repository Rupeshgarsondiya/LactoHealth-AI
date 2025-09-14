# 🛠️ Installation Guide - LactoHealth AI

## System Requirements

### Minimum Requirements
- **OS**: Ubuntu 18.04+, macOS 10.15+, Windows 10+
- **RAM**: 8GB minimum, 16GB recommended
- **Storage**: 10GB free space
- **CPU**: 4 cores minimum
- **Internet**: Stable connection for AI model downloads

### Software Dependencies
- Python 3.8 or higher
- Node.js 16 or higher
- MongoDB 4.4 or higher
- Git

## Step-by-Step Installation

### 1. System Preparation

#### Ubuntu/Debian
```bash
sudo apt update
sudo apt install python3 python3-pip nodejs npm mongodb git curl
```

#### macOS
```bash
# Install Homebrew if not installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install dependencies
brew install python3 node mongodb/brew/mongodb-community git
```

#### Windows
1. Install Python from [python.org](https://python.org)
2. Install Node.js from [nodejs.org](https://nodejs.org)
3. Install MongoDB from [mongodb.com](https://mongodb.com)
4. Install Git from [git-scm.com](https://git-scm.com)

### 2. Clone Repository

```bash
git clone https://github.com/your-username/LactoHealth-AI.git
cd LactoHealth-AI
```

### 3. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python3 -m venv env

# Activate virtual environment
# On Linux/macOS:
source env/bin/activate
# On Windows:
# env\Scripts\activate

# Upgrade pip
pip install --upgrade pip

# Install Python dependencies
pip install -r requirements.txt
```

### 4. Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install Node.js dependencies
npm install

# Install additional packages if needed
npm install react-icons
```

### 5. Database Setup

#### Start MongoDB Service

**Ubuntu/Debian:**
```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

**macOS:**
```bash
brew services start mongodb/brew/mongodb-community
```

**Windows:**
```bash
net start MongoDB
```

#### Verify MongoDB Connection
```bash
mongo --eval "db.adminCommand('ismaster')"
```

### 6. AI Model Setup (Ollama)

#### Install Ollama
```bash
# Linux/macOS
curl -fsSL https://ollama.ai/install.sh | sh

# Windows - Download from https://ollama.ai/download
```

#### Download AI Model
```bash
ollama pull llama3.2:1b
```

#### Start Ollama Service
```bash
ollama serve
```

### 7. Environment Configuration

#### Backend Environment (.env)
Create `backend/.env`:
```env
MONGO_URI=mongodb://localhost:27017
MONGO_DB=LactoHealthAI
OLLAMA_BASE_URL=http://localhost:11434
SECRET_KEY=your-super-secret-key-change-this
DEBUG=True
```

#### Frontend Environment (.env)
Create `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_ENVIRONMENT=development
```

### 8. Start Services

#### Terminal 1: Start Backend
```bash
cd backend
source env/bin/activate  # On Windows: env\Scripts\activate
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

#### Terminal 2: Start Frontend
```bash
cd frontend
npm start
```

#### Terminal 3: Start Ollama (if not running)
```bash
ollama serve
```

### 9. Verify Installation

1. **Backend API**: Visit http://localhost:8000/docs
2. **Frontend**: Visit http://localhost:3000
3. **Database**: Check MongoDB connection
4. **AI Model**: Test chat functionality

## Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process on port 8000
sudo lsof -ti:8000 | xargs kill -9

# Kill process on port 3000
sudo lsof -ti:3000 | xargs kill -9
```

#### MongoDB Connection Failed
```bash
# Check MongoDB status
sudo systemctl status mongod

# Restart MongoDB
sudo systemctl restart mongod
```

#### Python Module Not Found
```bash
# Ensure virtual environment is activated
source env/bin/activate

# Reinstall requirements
pip install -r requirements.txt
```

#### Node.js Dependencies Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Ollama Model Not Found
```bash
# List available models
ollama list

# Pull required model
ollama pull llama3.2:1b

# Restart Ollama service
ollama serve
```

### Performance Optimization

#### For Low-Memory Systems
1. Use smaller AI model: `ollama pull llama3.2:1b`
2. Reduce MongoDB cache size
3. Close unnecessary applications

#### For Production
1. Use production-grade database (MongoDB Atlas)
2. Configure reverse proxy (Nginx)
3. Enable SSL/TLS certificates
4. Set up monitoring and logging

## Development Setup

### Code Editor Setup
Recommended extensions for VS Code:
- Python
- ES7+ React/Redux/React-Native snippets
- Prettier
- ESLint
- MongoDB for VS Code

### Git Hooks Setup
```bash
# Install pre-commit hooks
pip install pre-commit
pre-commit install
```

## Docker Installation (Alternative)

### Using Docker Compose
```bash
# Clone repository
git clone https://github.com/your-username/LactoHealth-AI.git
cd LactoHealth-AI

# Build and start services
docker-compose up --build

# Access application at http://localhost:3000
```

## Next Steps

After successful installation:
1. Create user account at http://localhost:3000
2. Test milk prediction functionality
3. Try health monitoring features
4. Explore voice chat capabilities
5. Generate sample reports

## Support

If you encounter issues:
1. Check the troubleshooting section
2. Review logs in terminal outputs
3. Create an issue on GitHub
4. Contact support team

---

**Installation complete! 🎉 Your LactoHealth AI system is ready to use.**
