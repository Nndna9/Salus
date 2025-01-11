// API configuration
const API_KEY = 'AIzaSyCi8udo82gmZ-1ZL0-KckpjvYva1BIhIyE';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const typingIndicator = document.getElementById('typing-indicator');

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingIndicator() {
    typingIndicator.style.display = 'block';
    chatBox.scrollTop = chatBox.scrollHeight;
}

function hideTypingIndicator() {
    typingIndicator.style.display = 'none';
}

async function getBotResponse(userMessage) {
    const prompt = `Act as a healthcare assistant. The user has the following symptoms: "${userMessage}". 
                  Provide a possible diagnosis and recommendations.`;

    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            })
        });

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error:', error);
        return 'I apologize, but I encountered an error. Please try again later.';
    }
}

async function handleUserInput() {
    const message = userInput.value.trim();
    if (!message) return;

    userInput.value = '';
    addMessage(message, true);
    showTypingIndicator();

    const botResponse = await getBotResponse(message);
    hideTypingIndicator();

    // Sanitize the bot's response
    const sanitizedResponse = sanitizeResponse(botResponse);
    addMessage(sanitizedResponse);
}

function sanitizeResponse(response) {
    // Remove markdown-like syntax
    return response.replace(/[*_~`>]+/g, '').trim();
}


sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});