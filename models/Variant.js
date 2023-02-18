import mongoose from "mongoose";

const VariantSchema = mongoose.Schema({

    variantId:{
        type:String,
        unique:true
    },
    architecture:{
        type:String,
        
    },
    AndroidVersion:{
        type:Number,
        min:9
       
    },
    dpi:{
        type:String,
       
    },


},{timestamps:true})

const Variant = mongoose.model("Variant",VariantSchema)
export default Variant