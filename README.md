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

### 📦 1. Install Dependencies
You need to install the dependencies for both the client and the server.
**For Server:**
\`\`\`bash
cd server
npm install
\`\`\`
**For Client:**
\`\`\`bash
cd ../client
npm install
\`\`\`

### 🔑 2. Environment Variables
Create a `.env` file in the `server` directory and add your Gemini API Key:
\`\`\`env
GEMINI_API_KEY=your_api_key_here
\`\`\`

---

## 🚀 Running the Application

You can run this application in two different ways depending on your needs.

### Option A: Development Mode (Separated)
*Recommended for code editing and active development.*

1. **Start the backend server:**
   \`\`\`bash
   cd server
   npm run dev
   # Server runs on http://localhost:3000
   \`\`\`
2. **Start the frontend client:**
   Open a new terminal and run:
   \`\`\`bash
   cd client
   npm run dev
   # Client runs on http://localhost:5173
   \`\`\`
3. Open **`http://localhost:5173`** in your browser.

### Option B: Production Mode (Fullstack Integrated)
*Recommended for final review. The Express backend will serve the compiled React static files.*

1. **Build the frontend:**
   \`\`\`bash
   cd client
   npm run build
   \`\`\`
2. **Start the server:**
   \`\`\`bash
   cd ../server
   npm start
   # or 'node index.js' / 'npm run dev'
   \`\`\`
3. Open **`http://localhost:3000`** in your browser. Both the UI and API will run seamlessly from this single port.

---

## 💡 How to Use
1. Explore the landing page sections (Hero, Places, Services, FAQ).
2. Click the floating chat button in the bottom right corner, or click any of the "Quick Shortcut Chips" to start a conversation with the PlatePal AI Agent.

## 👨‍💻 Author

**Ayu Wanda Azalia**
* GitHub: [@ayuwanda07](https://github.com/ayuwanda07)