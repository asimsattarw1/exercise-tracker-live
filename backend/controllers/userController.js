const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'asimmm'

const { signupModel } = UserModel;

const responseModel = ({ status, message, user, token }) => {
    return { status: status ?? false, message: message ?? '', user: user ?? {}, token: token ?? '' }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await signupModel.findOne({ email: email });
        if (!existingUser) {
            return res.status(404).json(responseModel({ message: 'User does not exist' }));
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchPassword) {
            return res.status(400).json(responseModel({ message: 'Invalid credentials' }));
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
        res.status(201).json(responseModel({ status: true, user: existingUser, token: token, message:'Login successfull' }));
    } catch (error) {
        console.log(error);
        res.status(500).json(responseModel({ message: 'something went wrong' }));
    }
}

const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await signupModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json(responseModel({
                message: "User already exists.",
            }));
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await signupModel.create({
            name: name,
            email: email,
            password: hashedPassword
        });
        // await result.save();

        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
        res.status(201).json(responseModel({ status: true, user: result, token: token, message: "Account created successfully" }));
    } catch (error) {
        res.status(500).json(responseModel({ message: 'something went wrong' }));
    }
}

module.exports = { login, signup }