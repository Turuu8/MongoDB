import { userModel } from "../models/userModel.js";

export const userController = {
    createNewUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            const newUser = new userModel({ email, password });
            await newUser.save();
            res.status(200).json({ msg: 'new user created successfully' });
            console.log('new user created successfully')
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    login: async (req, res) => { },
    logout: async (req, res) => { },
}