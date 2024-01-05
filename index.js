import 'http-status-codes';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import postRouter from './routers/postRouter.js';
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/api/v1/users',userRouter);
app.use('/api/v1/posts',postRouter)

const port = process.env.PORT;
try {
    await mongoose.connect(process.env.MONGO_URL)
        app.listen(port,()=>{
        console.log(`server running on port ${port}`);
    })
} catch (error) {
    console.log("error while connecting:",error);
}
