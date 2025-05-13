// server.js
const mongoose = require("mongoose");
const app = require("./App");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected:", mongoose.connection.host);
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};

const startServer = () => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

connectDB().then(startServer);
