import { StatusCodes } from "http-status-codes";
import Post from "../models/postModel.js";
import multer from "multer";
import path from 'path';
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/images/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + 'image-' + Date.now() + path.extname(file.originalname));
  }
});

const videoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/videos/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + 'video-' + Date.now() + path.extname(file.originalname));
  }
});

const uploadImage = multer({
  storage: imageStorage, // Fixed typo: 'imageStorage' instead of 'imageStorage'
  limits: { fileSize: 100000 },
}).single('image');

const uploadVideo = multer({
  storage: videoStorage, // Fixed typo: 'videoStorage' instead of 'videoStorage'
  limits: { fileSize: 10000000000 },
}).single('video');

export const createPost = async (req, res) => {
    try {
      uploadImage(req, res, (imageErr) => {
        if (imageErr) {
          return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Image upload failed' });
        }
        const imageUrl = req.file ? req.file.path : '';
        
        uploadVideo(req, res, (videoErr) => {
          if (videoErr) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Video upload failed' });
          }
  
          
          const videoUrl = req.file ? req.file.path : '';
  
          const post = new Post({
            content: req.body.content,
            author: req.body.author,
            imageUrl,
            videoUrl,
          });
  
          post.save(); // Save the post to the database
  
          res.status(StatusCodes.OK).json({
            msg: 'Post created successfully',
          });
        })
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  };
  

export const showAllPosts = async(req,res)=>{
    try {
       const posts = await Post
       .find({})
       .populate('author','author')
       .populate('likes.author','author')
       .populate('comments.author','comments')
       res.status(StatusCodes.OK).json({posts})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            msg: "Internal Server Error"
        })
    }
}

export const deletePost = async(req,res)=>{
    
}

export const addComment = async(req,res)=>{

}

export const addLike = async(req,res)=>{

}