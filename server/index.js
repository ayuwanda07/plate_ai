import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';
import express from 'express';
import multer from 'multer';

const app = express();
const upload = multer();
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const model = 'gemini-3.5-flash';

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
})

const PORT = 3000;

app.listen(PORT, () => console.log('Server ready on http://localhost:${PORT}'));