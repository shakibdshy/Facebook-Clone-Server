import express from "express";
import { getAllUser, getUserById } from "../controllers/user.controller.js";

const router = express.Router();

// Get All Users
router.get('/', getAllUser);

// Get User By Id
router.get('/:id', getUserById);

export default router;