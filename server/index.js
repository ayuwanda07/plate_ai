import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';
import express from 'express';
import multer from 'multer';
import cors from 'cors';

const app = express();
const upload = multer();
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const model = 'gemini-3.5-flash';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('New rest api')
})

app.post('/generate-text', async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await ai.models.generateContent({
            model,
            contents: prompt,
        });
        res.status(200).json({ result: response.text });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

app.post('/generate-from-file', upload.single('file'), async (req, res) => {
    try {
        const { prompt } = req.body;
        const base64File = req.file.buffer.toString('base64');

        const response = await ai.models.generateContent({
            model,
            contents: [
                {
                    text:
                        prompt ?? 'Make me a summary of this file'
                },
                {
                    inlineData: {
                        data: base64File,
                        mimeType: req.file.mimetype,
                    },
                },
            ],
        });

        res.status(200).json({ result: response.text });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

});

app.post("/generate-from-document", upload.single("document"), async (req, res) => {
    try {
        const { prompt } = req.body;
        const base64Document = req.file.buffer.toString("base64");

        const response = await ai.models.generateContent({
            model,
            contents: [
                { text: prompt ?? "Tolong buat ringkasan dari dokumen berikut", type: "text" },
                { inlineData: { data: base64Document, mimeType: req.file.mimetype } }
            ],
        });
        res.status(200).json({ result: response.text });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

app.post("/generate-from-audio", upload.single("audio"), async (req, res) => {
    try {
        const { prompt } = req.body;
        const base64Audio = req.file.buffer.toString("base64");

        const response = await ai.models.generateContent({
            model,
            contents: [
                { text: prompt ?? "Tolong buatkan transkrip dari rekaman berikut", type: "text" },
                { inlineData: { data: base64Audio, mimeType: req.file.mimetype } }
            ],
        });
        res.status(200).json({ result: response.text });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/chat', async (req, res) => {
    try {
        const { conversation } = req.body;
        if (!Array.isArray(conversation)) throw new Error('Conversation must be an array');

        const contents = conversation.map(({ role, text }) => ({
            role: role === 'bot' || role === 'model' || role === 'assistant' ? 'model' : 'user',
            parts: [{ text }],
        }));

        const response = await ai.models.generateContent({
            model,
            contents,
            config: {
                temperature: 0.7,
                systemInstruction: `You are a cheerful, supportive, and knowledgeable virtual nutritionist named PlatePal, working for PT Nutrifood Indonesia. The company is headquartered at Jl. Rawabali II No.3, Kawasan Industri Pulogadung, Jakarta Timur 13920, and can be contacted at (021) 4602888.
                You answer food, nutrition, calorie budgeting, and diet-related questions, give healthy meal recommendations, and help create daily meal plans. Always keep your answers encouraging and structured. 
                Rules:
                1. Always respond in the same language as the user.
                2. For each response, add relevant food or health emojis (like 🥗, 🍎, 💪).
                3. Always provide a reasonable calorie estimate (e.g., **300 kkal**) for any specific food or meal asked by the user, and use Markdown bolding for the food name and its calories.
                4. If the user asks for a meal plan, format it clearly into Breakfast, Lunch, Dinner, and Snacks.
                5. Do not answer any other questions outside of food, recipes, diet, and nutrition. Politely decline and steer the conversation back to food.
                6. After giving a meal plan or healthy food recommendation, occasionally refer the user to buy healthy ingredients or low-calorie snacks at 'https://www.nutrimart.co.id/'.`
            },
        });

        res.status(200).json({ result: response.text });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})

const PORT = 3000;

app.listen(PORT, () => console.log('Server ready on http://localhost:${PORT}'));