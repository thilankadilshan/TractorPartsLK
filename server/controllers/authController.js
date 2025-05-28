// ==== ✅ CONTROLLER: controllers/authController.js ====
const User = require("../models/User");
const SellerProfile = require("../models/SellerProfile");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
        role,
        companyName,
        contactNumber,
        address,
        website,
        description,
        logo,

        //New fields
        whatsappLink,
        facebookLink,
        websiteLink,
    } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "Email already registered" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: role || "user",
        });

        if (role === "seller") {
            await SellerProfile.create({
                userId: newUser._id,
                companyName,
                logo,
                contactNumber,
                address,
                website,
                description,
                //Social links (can be undefined or null)
                whatsappLink,
                facebookLink,
                websiteLink,
            });
        }

        res.status(201).json({ message: "Registration successful" });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Registration failed", error });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: `${user.firstName} ${user.lastName}`,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Login failed", error });
    }
};

module.exports = { register, login };