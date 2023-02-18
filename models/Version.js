import mongoose from "mongoose";

const VersionSchema = mongoose.Schema({

    versionId:{
        type:String,
        unique:true
    },
    releaseDate:{
        type:Date
    },
    variants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Variant"
    }]

},{timestamps:true})

const Version = mongoose.model("Version",VersionSchema)
export default Version