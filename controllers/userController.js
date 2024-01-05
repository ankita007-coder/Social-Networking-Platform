import User from "../models/userModel.js"
import { StatusCodes } from "http-status-codes"
import bcrypt from 'bcrypt';
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
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne(email);
        if(!user){
            res.status(StatusCodes.NOT_FOUND).json({msg: "User not found please register"})
        }
        if(user.password!==password){
            res.status(StatusCodes.UNAUTHORIZED).json({msg: "Wrong password"})
        }
    
        res.status(StatusCodes.OK).json({user})
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({msg: "something went wrong"})
    }
}

// export const logout = async(req,res)=>{

// }