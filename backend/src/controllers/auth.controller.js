import User from "../models/user.model.js";
import bcvrypt from "bcryptjs";
import { generateToken } from "../utils/utils.js";

export const signup = async (req, res) => {
    const { email, fullName, password } = req.body;
    try {
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "Email already exists" });
        }

        salt = await bcvrypt.genSalt(10);
        const hashedPassword = await bcvrypt.hash(password, salt);

        const newUser = new User({
            email,
            fullName,
            password: hashedPassword,
        });

        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();

            return res.status(201).json({ 
                _id: newUser._id,
                email: newUser.email,
                fullName: newUser.fullName,
                profilePic: newUser.profilePic, 
            });
        } else {
            return res.status(400).json({ message: "Invalid user data" });
        }

    } catch (error) {
        console.error("Error signing up user:", error.message);
        return res.status(500).json({ message: "Internal server error" });

    }
}

export const login = (req, res) => { 
    res.send("login route");
}

export const logout = (req, res) => {
    res.send("logout route");
}