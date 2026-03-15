Backend Connection

Make sure the backend server is running before starting the frontend.

The frontend communicates with the backend API to process user queries and retrieve AI-generated responses.

Example API request flow:

User Input → React App → Backend Server → Gemini API → Response → UI Display

📂 Project Structure
client/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/      # UI components
│   ├── pages/           # Application pages
│   ├── App.js
│   ├── index.js
│   └── styles/
│
├── package.json
└── README.md
🎤 Voice Interaction

The application uses the Web Speech API for:

Speech Recognition – converting voice to text

Speech Synthesis – converting AI responses to speech

This enables natural interaction with the virtual assistant.

🔮 Future Improvements

Dark mode support

Chat history storage

Multi-language voice recognition

Improved UI/UX

Mobile responsiveness improvements

👨‍💻 Author
Anjali Deshmukh
Developed as part of a Minor Project – Virtual AI Assistant using the MERN stack.
