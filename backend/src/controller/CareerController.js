const Career = require("../model/CareerModel");
const jwt = require("jsonwebtoken");
const allCareers = async(req,res)=>{
    try{
        const careerData = await Career.find();
         res.status(200).json(careerData);
        }
    catch(error){
        res.status(500).send(error);
    }

};

const singleCareerId=async(req,res)=>{
    const data=req.params.jid;
    try{
       const careerData = await Career.findById(data);
        res.status(200).json(careerData);
    }
    catch(error){
        res.status(500).send(error)
    }
};

const singleCareerTitle=async(req,res)=>{
    const data=req.params.jtitle;
    try{
       const careerData = await Course.find({JobTitle:data});
        res.status(200).json(careerData);
    }
    catch(error){
        res.status(500).send(error)
    }
};
const createCareer = async(req,res)=>{
    //const data= req.params.jid; 
    try{
        jwt.verify(req.token,"Admin Secretkey",(err,authData)=>{
            if(err){
                res.send({msg:"error"});
            }
            else{
                // res.json({msg:"token found",authData});
                // console.log("token is shown");
          const data=
          {
            JobTitle:req.body.JobTitle,
            JobType:req.body.JobType,
            Qualification:req.body.Qualification,
            JobDescription:req.body.JobDescription,
            JobStatus:"active"
           };

          //const result = newCareer({CareerName ,Duration,CareerStatus});
           const result= new Career(data);
           const result1=result.save();
           res.status(201).json(result);
           console.log(result);
           
        } 
    }); 
       }
   catch(error)
   {
       res.status(500).send(error)
   }
};

const deleteCareer = async(req,res)=>{
        //const data=(req.params.crid)
      try{
        jwt.verify(req.token,"Admin Secretkey",async(err,authData)=>{
            if(err){
                res.send({msg:"error"});
            }
            else{
        const careerData = await Career.findByIdAndUpdate(req.params.jid ,{JobStatus:"inactive"})
        res.status(200).json(careerData); 
            }
        });
    }
      catch(error){
        res.status(500).send(error);
      }
};

const updateCareer = async(req,res)=>{
    try{
        jwt.verify(req.token,"Admin Secretkey",async(err,authData)=>{
            if(err){
                res.send({msg:"error"});
            }
     else{
            const careerdata =  await Career.findByIdAndUpdate(req.params.jid, req.body);
            res.status(200).json(careerdata);
    }
    });
}
    catch(error){
        res.status(500).send(error);
    }
};
module.exports={
   allCareers,
   singleCareerId,
   singleCareerTitle,
   createCareer,
   deleteCareer,
   updateCareer
   
}