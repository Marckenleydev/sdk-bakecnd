import Variant from "../models/Variant.js"
import Version from "../models/Version.js"


export const createVariant=async(req,res)=>{

    const variantId = ({variantId:req.body.variantId})
    const findVariant = await Variant.findOne(variantId)
    try {

        if(!findVariant){
            if (req.body.minimumAndroidVersion < 9) {
                return res.status(400).json("Minimum Android version must be 9 or higher");
              }

            await Variant.create(req.body)
           return res.status(200).json("Variant has been created")
        }
        return  res.status(501).json("this Variant already exist")
    } catch (error) {
        return res.status(500).json(error);
    }
}



export const updateVariant=async(req,res)=>{

    try {
        await Variant.findOneAndUpdate(req.params.VariantId,{$set:req.body}, {new:true})
        res.status(200).json("Variant has been update successfuly")
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const deleteVariant=async(req,res)=>{

    try {
        await Variant.findOneAndDelete(req.params.VariantId)
        res.status(200).json("Variant has been deleted")
    } catch (error) {
        return res.status(500).json(error);
    }
}


export const getVariant=async(req,res)=>{

    try {
     const variant =  await Variant.findOne({variantId:req.params.id})

        res.status(200).json(variant)
    } catch (error) {
         return res.status(500).json(error)
    }

}



export const getallVariant=async(req,res)=>{

    try {
     const variants=  await Variant.find()
        res.status(200).json(variants)
    } catch (error) {
         return res.status(500).json(error)
    }

}