#!/bin/bash

# LactoHealth AI - Automated Setup Script
# This script automates the installation and setup process

set -e  # Exit on any error

echo "🐄 LactoHealth AI - Automated Setup"
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running on supported OS
check_os() {
    print_status "Checking operating system..."
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        OS="linux"
        print_status "Detected Linux OS"
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        OS="macos"
        print_status "Detected macOS"
    else
        print_error "Unsupported operating system: $OSTYPE"
        exit 1
    fi
}

# Check system requirements
check_requirements() {
    print_status "Checking system requirements..."
    
    # Check Python
    if command -v python3 &> /dev/null; then
        PYTHON_VERSION=$(python3 --version | cut -d' ' -f2)
        print_status "Python $PYTHON_VERSION found"
    else
        print_error "Python 3 is required but not installed"
        exit 1
    fi
    
    # Check Node.js
    if command -v node &> /dev/null; then
        NODE_VERSION=$(node --version)
        print_status "Node.js $NODE_VERSION found"
    else
        print_error "Node.js is required but not installed"
        exit 1
    fi
    
    # Check MongoDB
    if command -v mongod &> /dev/null; then
        print_status "MongoDB found"
    else
        print_warning "MongoDB not found. Please install MongoDB manually"
    fi
}

# Setup backend
setup_backend() {
    print_status "Setting up backend..."
    
    cd backend
    
    # Create virtual environment
    print_status "Creating Python virtual environment..."
    python3 -m venv env
    
    # Activate virtual environment
    source env/bin/activate
    
    # Upgrade pip
    print_status "Upgrading pip..."
    pip install --upgrade pip
    
    # Install requirements
    print_status "Installing Python dependencies..."
    pip install -r requirements.txt
    
    cd ..
}

# Setup frontend
setup_frontend() {
    print_status "Setting up frontend..."
    
    cd frontend
    
    # Install npm dependencies
    print_status "Installing Node.js dependencies..."
    npm install
    
    cd ..
}

# Setup Ollama
setup_ollama() {
    print_status "Setting up Ollama AI..."
    
    # Check if Ollama is installed
    if command -v ollama &> /dev/null; then
        print_status "Ollama already installed"
    else
        print_status "Installing Ollama..."
        if [[ "$OS" == "linux" ]] || [[ "$OS" == "macos" ]]; then
            curl -fsSL https://ollama.ai/install.sh | sh
        else
            print_warning "Please install Ollama manually from https://ollama.ai"
            return
        fi
    fi
    
    # Pull AI model
    print_status "Downloading AI model (this may take a few minutes)..."
    ollama pull llama3.2:1b
}

# Create environment files
create_env_files() {
    print_status "Creating environment configuration files..."
    
    # Backend .env
    if [ ! -f "backend/.env" ]; then
        cat > backend/.env << EOF
MONGO_URI=mongodb://localhost:27017
MONGO_DB=LactoHealthAI
OLLAMA_BASE_URL=http://localhost:11434
SECRET_KEY=$(openssl rand -hex 32)
DEBUG=True
EOF
        print_status "Created backend/.env"
    else
        print_warning "backend/.env already exists, skipping..."
    fi
    
    # Frontend .env
    if [ ! -f "frontend/.env" ]; then
        cat > frontend/.env << EOF
REACT_APP_API_URL=http://localhost:8000
REACT_APP_ENVIRONMENT=development
EOF
        print_status "Created frontend/.env"
    else
        print_warning "frontend/.env already exists, skipping..."
    fi
}

# Start services
start_services() {
    print_status "Starting services..."
    
    # Start MongoDB
    if [[ "$OS" == "linux" ]]; then
        sudo systemctl start mongod
        print_status "MongoDB started"
    elif [[ "$OS" == "macos" ]]; then
        brew services start mongodb/brew/mongodb-community
        print_status "MongoDB started"
    fi
    
    # Start Ollama in background
    print_status "Starting Ollama service..."
    nohup ollama serve > /dev/null 2>&1 &
    sleep 2
}

# Create startup script
create_startup_script() {
    print_status "Creating startup script..."
    
    cat > start.sh << 'EOF'
#!/bin/bash

# LactoHealth AI - Startup Script

echo "🐄 Starting LactoHealth AI..."

# Start MongoDB
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    sudo systemctl start mongod
elif [[ "$OSTYPE" == "darwin"* ]]; then
    brew services start mongodb/brew/mongodb-community
fi

# Start Ollama
nohup ollama serve > /dev/null 2>&1 &

# Start backend
echo "Starting backend server..."
cd backend
source env/bin/activate
nohup python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000 > backend.log 2>&1 &
cd ..

# Start frontend
echo "Starting frontend server..."
cd frontend
nohup npm start > frontend.log 2>&1 &
cd ..

echo "✅ All services started!"
echo "Frontend: http://localhost:3000"
echo "Backend API: http://localhost:8000"
echo "API Docs: http://localhost:8000/docs"
EOF

    chmod +x start.sh
    print_status "Created start.sh script"
}

# Main setup function
main() {
    echo
    print_status "Starting automated setup..."
    echo
    
    check_os
    check_requirements
    setup_backend
    setup_frontend
    setup_ollama
    create_env_files
    start_services
    create_startup_script
    
    echo
    echo "🎉 Setup completed successfully!"
    echo
    echo "Next steps:"
    echo "1. Run './start.sh' to start all services"
    echo "2. Visit http://localhost:3000 to access the application"
    echo "3. Visit http://localhost:8000/docs for API documentation"
    echo
    echo "For manual startup:"
    echo "Backend: cd backend && source env/bin/activate && python -m uvicorn app.main:app --reload"
    echo "Frontend: cd frontend && npm start"
    echo
}

# Run main function
main "$@"
