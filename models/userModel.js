import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    fullName: String,
    city: String,
    state: String,
    gender: {
        type: String,
        enum: ['Female','Male']
    },
    profession: String,
    bio: String,
    photos:{
        url : String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('User',userSchema);