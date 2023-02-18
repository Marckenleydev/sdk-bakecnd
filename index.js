import express from "express";
const app= express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import versionRoute from "./routes/version.js"
import variantRoute from "./routes/variant.js"



mongoose.set('strictQuery', true);

// Database link connection
const MONGO_URL="mongodb+srv://root:helloworld@firstnodeapp.ricbp.mongodb.net/Instagram-OXO-tech?retryWrites=true&w=majority"


const PORT = 8801 || 4001

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));

app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// routes 
app.use("/api/version",versionRoute)
app.use("/api/variant",variantRoute)

// connect to mongoDB Database

mongoose.connect(MONGO_URL).then(()=>{
    console.log("mongoDb is successfull connected");

    app.listen(PORT ,console.log(`server is running at port ${PORT}`))
})



