import { StatusCodes } from "http-status-codes";
import Post from "../models/postModel.js";


export const createPost = async(req,res)=>{
    try {
        const post = await Post.create({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        })
        res.status(StatusCodes.CREATED).json({
           post
        })
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send(error)
        console.log(error)
    }
}
export const showAllPosts = async(req,res)=>{
    try {
       const posts = await Post
       .find({})
       .populate('author','author')
       .populate('likes.author','author')
       .populate('comments.author','comments')
       res.status(StatusCodes.OK).json({posts})
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async(req,res)=>{
}

export const addComment = async(req,res)=>{

}

export const addLike = async(req,res)=>{

}