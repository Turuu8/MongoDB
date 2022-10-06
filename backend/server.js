import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import chalk from "chalk";
import { } from "dotenv/config"
import bodyParser from 'body-parser'
import userRouter from './routers/userRouter.js'
import { userModel } from "./models/userModel.js";

const app = express();
const port = process.env.PORT
const connected = chalk.green.bold;
const mongodb_url = process.env.MONGODB_URL;

app.use(cors());
app.use(bodyParser())
app.use(express({ limit: '30mb', extends: true }));

app.use('/users', userRouter);

app.get("/all", (req, res) => {
    userModel.find().then(user => res.send(user)).catch(err => res.send(err));
})

mongoose.connection.once("opne", () => {
    console.log(connected("MongoDB database successfully connected"))
});
mongoose.connection.on("error", (e) => {
    console.log(e)
})
mongoose
    .connect(mongodb_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(connected("MongoDB database successfully connected")))
    .then(() => app.listen(port, console.log(`http://localhost:${port}`)))
