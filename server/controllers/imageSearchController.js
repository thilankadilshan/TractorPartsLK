const tf = require('@tensorflow/tfjs');
const mobilenet = require('@tensorflow-models/mobilenet');
const { createCanvas, loadImage } = require('canvas');
const path = require('path');

let modelPromise = null;

async function loadModel() {
    if (!modelPromise) {
        modelPromise = mobilenet.load();
    }
    return modelPromise;
}
const fs = require('fs'); // add at top if not imported yet

const classifyImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Image file is required.' });
        }

        const imagePath = path.join(__dirname, '..', req.file.path);

        const img = await loadImage(imagePath);

        const canvas = createCanvas(img.width, img.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const input = tf.browser.fromPixels(canvas);

        const model = await loadModel();
        const predictions = await model.classify(input);

        // Delete the image after processing to clean up uploads folder
        fs.unlinkSync(imagePath);

        if (predictions && predictions.length > 0) {
            // Send only top predicted className
            return res.json({ predictedName: predictions[0].className });
        } else {
            return res.status(404).json({ error: 'No predictions found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to classify image' });
    }
};

module.exports = { classifyImage };
