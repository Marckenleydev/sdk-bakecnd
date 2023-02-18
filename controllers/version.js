import Version from "../models/Version.js"
import Variant from "../models/Variant.js"

export const createVersion=async(req,res)=>{
    const versionId = ({versionId:req.body.versionId})
    const findVersion = await Version.findOne(versionId)
    try {

        if(!findVersion){
            await Version.create(req.body)
           return res.status(200).json("Version has been created")
        }
      return  res.status(501).json("this Version already exist")
    } catch (error) {
        return res.status(500).json(error);
    }
}






export const updateVersion=async(req,res)=>{

    try {
        await Version.findOneAndUpdate(req.params.versionId,{$set:req.body}, {new:true})
       return res.status(200).json("Version has been update successfuly")
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const deleteVersion=async(req,res)=>{

    try {
        await Version.findOneAndDelete(req.params.versionId)
        res.status(200).json("Version has been deleted")
    } catch (error) {
        return res.status(500).json(error);
    }
}


export const getVersion=async(req,res)=>{

    try {
     const version =  await Version.findOne({versionId:req.params.id}).populate('variants')
  
     

        res.status(200).json(version)
    } catch (error) {
         return res.status(500).json(error)
    }

}

export const addVariantToVersion = async (req, res) => {
    try {
      
        const version =  await Version.findOne({versionId:req.params.id})
      if (!version) {
        return res.status(500).json({ error: "version does not exist" });
      }
  
      const { architecture,variantId, minimumAndroidVersion, dpi } = req.body;
      const variant = new Variant({variantId, architecture, minimumAndroidVersion, dpi });
      await variant.save();
  
     version.variants.push(variant._id);

    //   const _version =  await Version.findOne({versionId:req.params.id},{$push:{variant:variant._id}})
      await version.save();
  
      res.status(201).json(variant)
    }catch(error){
        return res.status(500).json(error)
    }
}



export const getallVersion=async(req,res)=>{

    try {
     const versions=  await Version.find()
        res.status(200).json(versions)
    } catch (error) {
         return res.status(500).json(error)
    }

}