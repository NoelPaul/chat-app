const UserModel = require('../models/UserModels'); // Ensure the correct model name
const bcrypt = require('bcryptjs');

async function registerUser(req, res) {
    try {
        const { name, email, password, profile_pic } = req.body;

        // Check if email already exists
        const checkEmail = await UserModel.findOne({ email });
        if (checkEmail) {
            return res.status(400).json({
                msg: "Email already exists",
                error: true,
            });
        }


        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please provide email, name, and password.",
                error: true,
                success: false
            });
        }




        // Password hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const payload = {
            name,
            email,
            password: hashedPassword,
            profile_pic,
        };

        const user = new UserModel(payload);
        const newUser = await user.save();

        return res.status(201).json({
            msg: "User registered successfully",
            error: false,
            data: newUser,
            success: true,
        });

    } catch (error) {
        console.error("Error in registerUser:", error);
        return res.status(500).json({
            msg: "Internal Server Error",
            error: true,
        });
    }
}

module.exports = registerUser;
