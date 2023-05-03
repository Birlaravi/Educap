const Feedback = require("../model/FeedbackModel");
const jwt= require("jsonwebtoken");

//........... Start Display ALL User Api..........
const allUserFeedback = async(req,res)=>{
    try{
        const feedbackData = await Feedback.find();
       // res.json(userData);
        res.status(200).send(feedbackData);  
    }
    catch(error){
        res.status(500).send(error);
    }
};  
//.......END Display Api ......



// Create user
const createUser = async(req, res)=>{
    try{
         bcrypt.hash(req.body.UserPassword, 8 , async function(err, hash){
            console.log("Hash: ", hash);
            if(err){
                 res.Status(200).send(err);
            }
            else{
           const data=
           { UserName:req.body.UserName,
             UserEmail:req.body.UserEmail, 
             UserNumber:req.body.UserNumber,
             UserPassword:hash,
             UserDOB:req.body.UserDOB,
             UserStatus:"active",
             UserEnroll:req.body.UserEnroll,
             UserJobAplly:req.body.UserJobApply
            };

          // const result = new User({UserName, UserEmail,UserNumber,UserPassword,UserDOB,UserStatus,UserEnroll,UserjobApply});
            const result= new User(data);
            result1=await result.save();
            res.status(201).json(result1);  
         }
        });
        //  SendEmailFun(req.body.UserEmail ,req.body.UserName, `Hello, Welcom to Educap Portal..`);
        //  res.status(201).send({msg:"record insert.."});
        }
    
    catch(error)
    {
        res.status(500).send(error)
    }
};



//...............Start fetch single user data........
const singleUserId=async(req,res)=>{
    const data= req.params.uid; 
    try{
        const userData = await User.findById(data);
        res.status(200).json(userData);
     }
    catch(error){
        res.status(500).send(error);
    }
};

// single user search by name
const singleUserName=async(req,res)=>{
    const data= req.params.uname; 
    try{
        const result = await User.find({UserName:data});
        res.status(200).json({result});
    }
    catch(error){
        res.status(500).send(error);
    }
};
//.......END single user Api......



//...............Start Update user data.............
const updateUserFeedback = async(req,res)=>{
    try{
        jwt.verify(req.token,"Admin Secretkey",async(err,authData)=>{
            if(err){
                res.send({msg:"error"});
            }
            else{
        const feedbackData = await Feedback.findByIdAndUpdate(req.params.fid, req.body);
         res.status(200).json(feedbackData);
    }
})
}

    catch(error){
      res.status(500).send("Error : ",error);
    }
};
//.......END update user Api ......

//...........Start Detate user data.............
const deleteUserFeedback = async(req,res)=>{
      const data=(req.params.fid);
    try{

        jwt.verify(req.token,"Admin Secretkey",async(err,authData)=>{
            if(err){
                res.send({msg:"error"});
            }
            else{
        const feedbackData = await User.findByIdAndUpdate(data,{FeedbackStatus:"inactive"});
       // res.json(userData);  
        res.status(200).send("Deleted/Inactive feedback");   
     }
     });
}

    catch(error){
        res.status(500).send(error)
    }
};
//.......END Delete user Api......


module.exports={
   allUserFeedback,
   createFeedback,
   singleIdFeedback,
   singleUserFeedback,
   updateUserFeedback,
   deleteUserFeedback 
}