#!/usr/bin/env python3
"""
Test script for AI Chatbot with Ollama
"""
import asyncio
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), 'backend'))

from app.main import lacto_chatbot

async def test_chatbot():
    """Test the AI chatbot functionality"""
    
    print("🤖 Testing LactoHealth AI Chatbot with Ollama...")
    print("=" * 50)
    
    # Test cases
    test_cases = [
        {
            "message": "Hello, I'm a dairy farmer",
            "language": "english",
            "user_id": "test_user"
        },
        {
            "message": "How can I increase milk production?",
            "language": "english", 
            "user_id": "test_user"
        },
        {
            "message": "नमस्ते, मैं एक डेयरी फार्मर हूं",
            "language": "hindi",
            "user_id": "test_user"
        },
        {
            "message": "Hola, soy un granjero lechero",
            "language": "spanish",
            "user_id": "test_user"
        }
    ]
    
    for i, test_case in enumerate(test_cases, 1):
        print(f"\n🧪 Test {i}: {test_case['language'].title()}")
        print(f"User: {test_case['message']}")
        print("AI: ", end="", flush=True)
        
        try:
            response = await lacto_chatbot.generate_response(
                message=test_case['message'],
                language=test_case['language'],
                user_id=test_case['user_id']
            )
            
            if response['success']:
                print(response['response'])
                if response['suggestions']:
                    print(f"💡 Suggestions: {', '.join(response['suggestions'])}")
            else:
                print(f"❌ Error: {response['response']}")
                
        except Exception as e:
            print(f"❌ Exception: {str(e)}")
        
        print("-" * 30)
    
    print("\n✅ Chatbot testing completed!")

if __name__ == "__main__":
    asyncio.run(test_chatbot())
