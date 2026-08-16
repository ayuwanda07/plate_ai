# 🥗 PlatePal - AI Healthy Meal Recommendation

PlatePal is an intelligent web application designed to act as your personal virtual nutritionist. Powered by Google Gemini AI, PlatePal provides healthy meal recommendations, calorie budgeting, and structured daily meal plans with a modern, glassmorphism-inspired user interface.

Built as a Final Project for the Hacktiv8 Bootcamp.

## 🚀 Tech Stack

**Frontend:**
* React.js (Vite)
* Tailwind CSS (Styling & Glassmorphism effects)
* Lucide React (Icons)
* React Markdown (For rendering AI text formatting)

**Backend:**
* Node.js & Express.js
* `@google/genai` (Google AI Studio SDK)
* CORS & Multer

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of [Node.js](https://nodejs.org/en/).
* You have a valid **Gemini API Key** from Google AI Studio.

## 🛠️ Installation & Setup Guide

To run this project locally, you will need to start both the server and the client environments separately.

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/ayuwanda07/plate_ai.git
cd plate_ai
\`\`\`

### 2. Backend Setup (Server)
Open a new terminal and navigate to the server directory:
\`\`\`bash
cd server
npm install
\`\`\`
Create a `.env` file in the `server` directory and add your Gemini API Key:
\`\`\`env
GEMINI_API_KEY=your_api_key_here
\`\`\`
Start the backend server:
\`\`\`bash
npm run dev
# Note: The server will run on http://localhost:3000
\`\`\`

### 3. Frontend Setup (Client)
Open a second terminal and navigate to the client directory:
\`\`\`bash
cd client
npm install
\`\`\`
Start the frontend development server:
\`\`\`bash
npm run dev
# Note: The client will run on http://localhost:5173
\`\`\`

## 💡 How to Use
1. Open your browser and navigate to `http://localhost:5173`.
2. Explore the landing page sections (Hero, Places, Services, FAQ).
3. Click the floating chat button in the bottom right corner, or click any of the "Quick Shortcut Chips" to start a conversation with the PlatePal AI Agent.

## 👨‍💻 Author

**Ayu Wanda Azalia**
* GitHub: [@ayuwanda07](https://github.com/ayuwanda07)