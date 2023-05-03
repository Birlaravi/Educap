const Gallery = require("../model/GalleryModel");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");

const allGallerys = async(req,res)=>{
    try{
        const galleryData = await Gallery.find();
         res.status(200).json(galleryData);
        }
    catch(error){
        res.status(500).send(error);
    }

};


const singleGalleryId=async(req,res)=>{
    const data=req.params.gid;
    try{
       const galleryData = await Gallery.findById(data);
        res.status(200).json(galleryData);
    }
    catch(error){
        res.status(500).send(error)
    }
};



const createGallery = async(req,res)=>{
    //const data= req.params.cid; 
    try{
        jwt.verify(req.token,"Admin Secretkey",(err,authData)=>{
            if(err){
                res.send({msg:"error"});
            }
            else{
                
                     cloudinary.config({
                        cloud_name :"dvyqlz2fa",
                        api_key : "338162835573546",
                        api_secret : "Nxjhw2R3ILB-VRb_QfPUJDtQlNo"
                     })
                     
                     
                    const file = req.files.images ; 
                    console.log("Files....",file);
                    cloudinary.uploader.upload( file.tempFilePath , ( presult,err)=>{
                    console.log("Result" ,presult.url)
                   
                    const data=
                      {
                       images:presult.url
                      };
                
                      const result= new Gallery(data);
                      const result1=result.save();
                      res.status(201).json(`RESULT..${result}`);
                    })
                 } 
            }); 
       }
     catch(error)
     {
       res.status(500).send(error)
     }
    };

const deleteGallery = async(req,res)=>{
        //const data=(req.params.cid)
      try{
        jwt.verify(req.token,"Admin Secretkey",async(err,authData)=>{
            if(err){
                res.send({msg:"error"});
            }
            else{
        const galleryData = await Gallery.findByIdAndUpdate(req.params.gid)
        res.status(200).json(galleryData); 
            }
        });
    }
      catch(error){
        res.status(500).send(error);
      }
};

module.exports={
   allGallerys,
   singleGalleryId,
   createGallery,
   deleteGallery
   
}