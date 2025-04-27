const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config({ path: '../.env' });

// POST /api/chatbot
router.post('/', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ reply: "No message provided" });
    }

    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
            { inputs: message },
            {
                headers: {
                    Authorization: `Bearer process.env.HUGGING_FACE_API_KEY`, // Replace with your API key
                },
            }
        );

        const generatedText = response.data[0]?.generated_text || "Sorry, I didn't understand.";
        res.json({ reply: generatedText });

    } catch (error) {
        console.error('Full error info:', error?.response?.data || error.message); // <-- important updated line
        res.status(500).json({ reply: 'Error! Please try again later.....' });
    }


});

module.exports = router;
