const Admin = require("../model/AdminModel");
const bcrypt=require("bcrypt");
const jwt= require("jsonwebtoken");


//checkAdminlogin

const checkAdminLogin = async(req, res) => {
    const aid = req.body.AdminLoginEmail;
    const apass = req.body.AdminPassword;
    try {
      const adminData = await Admin.findOne({AdminLoginEmail:aid});
      console.log("Admin DATA: ",adminData);

      if(adminData)
      {
        bcrypt.compare(apass, adminData.AdminPassword, function(err,result){
          if(err){
            res.status(500).json({msg:"error"})
          }
          else
          {
            if(result){          
          jwt.sign({adminData},"Admin Secretkey",{expiresIn:"100m"},function(err,token){
            res.status(200).json({token});
           })  
          }
          else{
            res.status(200).json({msg:" Admin Login ID Not Found..."})
          }
          }
        })
       //////////////plain password check logic End ///////
      }
      else
    {
      res.status(200).json({msg:" Admin Email id not matched..."});
    }
  } catch (error) {
      console.log("Error: ", error);
      res.status(500).send(error);
    }
  };


module.exports={
checkAdminLogin
}