import { Router } from "express";
import { getAllUsers, login, register } from "../controllers/userController.js";

const router = Router();

router.get('/',getAllUsers);
router.post('/register',register);
router.post('/login',login)

export default router;