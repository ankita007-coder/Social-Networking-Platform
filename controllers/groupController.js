import { StatusCodes } from "http-status-codes";
import Groups from "../models/groupModel.js";


export const createGroups = async(req,res)=>{
    const {name,description,members,admin} = req.body;
    try {
        await Groups.create({
            name,description,members,admin
        })
        res.status(StatusCodes.CREATED).json({msg:"Group created"})
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).send(error.message)
    }
}
export const getAllGroups = async(req,res)=>{
    const groups = await Groups.find({})
    res.status(StatusCodes.OK).json({groups})
}

export const addMemberToGroup = async(req,res)=>{
    const {userId} = req.body;
    try{
        const {id} = req.params;
        const updatedGroup = await Groups.findByIdAndUpdate(
            id,
            { $push: { members: userId } },
            { new: true }
        );
       res.status(StatusCodes.OK).json({updatedGroup})

    }catch(error){
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).send(error)
    }
}
