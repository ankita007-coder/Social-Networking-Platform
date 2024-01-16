import User from "../models/userModel.js"
import { StatusCodes } from "http-status-codes"
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find({})
        res
            .status(StatusCodes.OK)
            .json(users)
    } catch (error) {
        console.log(error);
        res
            .status(StatusCodes.NOT_FOUND)
            .json({error})
    }
}

export const register = async(req,res)=>{
    try {
            const {userName,
                    email,
                    password,
                    fullName,
                    city,
                    state,
                    gender,
                    profession,
                    bio,
                    photos
                } = req.body;
            const hashPassword = await bcrypt.hash(password,10);
            await User.create({
                userName,
                email,
                password:hashPassword,
                fullName,
                city,
                state,
                gender,
                profession,
                bio,
                photos
            })
        res.status(StatusCodes.CREATED).json({
            msg: "User Created"
        })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:error})
    }
}

export const login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            res.status(StatusCodes.NOT_FOUND).json({msg: "User not found please register"})
            return
        }
        const match = await bcrypt.compare(password,user.password);
        if(!match){
            res.status(StatusCodes.UNAUTHORIZED).json({msg: "Wrong password"})
            return
        }  
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY);
            console.log("signin", token)
        res.status(StatusCodes.OK).json({token,user})
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({error});
    }
}

export const getProfile = async (req, res) => {
    //console.log(req.user)
    try {
     
        const userId = req.user.userId;
      const user = await User.findById(userId).select('-password');
  
      if (!user) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: 'User not found' });
      }
  
      //console.log('Profile retrieved:', user);
      res.status(StatusCodes.OK).json({user});
    } catch (error) {
     // console.error('Error fetching profile:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Internal Server Error' });
    }
  };
  