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

    if (lowerMessage.includes("who are you")) {
        return "We are TractorPartsLK, a platform connecting farmers with trusted suppliers for tractor spare parts.";
    }

    if (
        lowerMessage.includes("what do you sell") ||
        lowerMessage.includes("what you sell") ||
        lowerMessage.includes("sell parts") ||
        lowerMessage.includes("tractor parts")
    ) {
        return "We specialize in tractor spare parts for Massey Ferguson, Mahindra, New Holland, and more!";
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

    // Use your fine-tuned Hugging Face model
    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/thilankadilshan/tractorsparepartschatbot1',
            { inputs: message },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
                },
            }
        );

        let generatedText = "";

        if (Array.isArray(response.data)) {
            generatedText = response.data[0]?.generated_text || "Sorry, I didn't understand.";
        } else if (response.data.generated_text) {
            generatedText = response.data.generated_text;
        } else if (response.data.error) {
            console.error("HuggingFace error:", response.data.error);
            generatedText = "Bot is waking up! Please try again in a few seconds.";
        } else {
            generatedText = "Sorry, I didn't understand.";
        }

        res.json({ reply: generatedText });

    } catch (error) {
        console.error('Full error info:', error?.response?.data || error.message);
        res.status(500).json({ reply: 'Error! Please try again later.....' });
    }
});

module.exports = router;
