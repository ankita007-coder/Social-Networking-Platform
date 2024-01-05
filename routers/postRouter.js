import { Router } from "express";
import { addComment, 
         addLike, 
         createPost, 
         deletePost, 
         showAllPosts 
    } from "../controllers/postController.js";


const router = Router();

router.get('/',showAllPosts);
router.post('/',createPost);
router.post('/:id',deletePost);
router.post('/:id/comments',addComment);
router.post('/:id/likes',addLike);

export default router;