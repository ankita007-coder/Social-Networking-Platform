import { Router } from "express";
import { getAllUsers, getProfile, login, register } from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddlewares.js";


const router = Router();

router.get('/',getAllUsers);
router.post('/register',register);
router.post('/login',login);
router.get('/profile',authMiddleware,getProfile);


export default router;