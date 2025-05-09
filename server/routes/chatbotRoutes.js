const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config({ path: './.env' });

// 🎯 Define custom questions and answers
const matchFAQ = (message) => {
    const lowerMessage = message.toLowerCase();

    if (
        (lowerMessage.includes("website") && lowerMessage.includes("what")) ||
        (lowerMessage.includes("website") && lowerMessage.includes("about")) ||
        (lowerMessage.includes("website") && lowerMessage.includes("can")) ||
        (lowerMessage.includes("about") && lowerMessage.includes("site")) ||
        lowerMessage.includes("your site") ||
        lowerMessage.includes("this site") ||
        lowerMessage.includes("about your website")
    ) {
        return "Welcome to TractorPartsLK! 🚜 We help Sri Lankan farmers find genuine tractor spare parts easily and connect with trusted suppliers.";
    }

    if (lowerMessage.includes("hi")) {
        return "Hi, how can i help you today?";
    }

    if (
        lowerMessage.includes("how can i find tractors parts sellers in kurunegala") ||
        lowerMessage.includes("what you sell") ||
        lowerMessage.includes("sell parts") ||
        lowerMessage.includes("tractor parts")
    ) {
        return "Go to the home page, navigate to the search bar, and type 'sellers in Kurunegala'.";
    }



    return null;
};

router.post('/', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ reply: "No message provided" });
    }

    // Check hardcoded answers first
    const customAnswer = matchFAQ(message);
    if (customAnswer) {
        return res.json({ reply: customAnswer });
    }

    // Use DialoGPT-medium via Hugging Face
    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/google/flan-t5-large',
            { inputs: message },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
                },
            }
        );

        // Debug log: what does the API return?
        console.log("HuggingFace raw response:", response.data);

        let generatedText = "";

        if (Array.isArray(response.data)) {
            generatedText = response.data[0]?.generated_text || "Sorry, I didn't understand.";
        } else if (response.data.generated_text) {
            generatedText = response.data.generated_text;
        } else if (response.data.error) {
            console.error("HuggingFace error:", response.data.error);
            generatedText = "Bot is waking up! Please try again in a few seconds.";
        } else {
            console.error("Unexpected response format:", response.data);
            generatedText = "Sorry, I didn't understand.";
        }

        res.json({ reply: generatedText });

    } catch (error) {
        console.error('Hugging Face API call failed:', error?.response?.data || error.message || error);
        res.status(500).json({
            reply: 'The chatbot is temporarily unavailable. Please try again later.'
        });
    }
});

module.exports = router;
