import { StatusCodes } from "http-status-codes";
import Group from "../models/groupModel.js";


export const createGroups = async(req,res)=>{
    const {name,description,members,admin} = req.body;
    try {
        await Group.create({
            name,description,members,admin
        })
        res.status(StatusCodes.CREATED).json({msg:"Group created"})
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).send(error)
    }
}
export const getAllGroups = async(req,res)=>{
    const groups = await Group.find({})
    console.log(groups);
}

export const addMemberToGroup = async(req,res)=>{

}
