import express from "express";
import { userController } from "../controllers/userControllers.js";

const router = express.Router();

router.post('/register', userController.createNewUser);
export default router;