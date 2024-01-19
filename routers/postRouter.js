import { Router } from "express";
import {
         createPost, 
         deletePost, 
         showAllPosts 
    } from "../controllers/postController.js";
import authMiddleware from "../middlewares/authMiddlewares.js";
import { addLike, removeLike } from "../controllers/likeController.js";
import { addComment } from "../controllers/commentController.js";


const router = Router();

router.get('/',showAllPosts);
router.post('/',createPost);
router.post('/:id',deletePost);
router.post('/:id/comments',addComment);
router.post('/:id/like',addLike);
router.delete('/:id/like',removeLike);

export default router;