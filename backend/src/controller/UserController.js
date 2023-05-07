const User = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SendEmailFun = require("../others/SentEmail");
const cloudinary = require("cloudinary");
const { config } = require("dotenv");

//........... Start Display ALL User Api..........
const allUsers = async (req, res) => {
  try {
    const userData = await User.find();
    // res.json(userData);
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send(error);
  }
};
//.......END Display Api ......

// Create user
const createUser = async (req, res) => {
  try {
    bcrypt.hash(req.body.UserPassword, 8, async function (err, hash) {
      console.log("Hash: ", hash);
      if (err) {
        res.status(200).send(err);
      } else {
        const data = {
          UserName: req.body.UserName,
          UserEmail: req.body.UserEmail,
          UserNumber: req.body.UserNumber,
          UserPassword: hash,
          UserDOB: req.body.UserDOB,
          UserStatus: "active",
          UserEnroll: req.body.UserEnroll,
          UserJobAplly: req.body.UserJobApply,
        };

        // const result = new User({UserName, UserEmail,UserNumber,UserPassword,UserDOB,UserStatus,UserEnroll,UserjobApply});
        const result = new User(data);
        await result.save();
        res.status(201).json(result);
      }
    });

    //     cloudinary.config({
    //        cloud_name: "dvyqlz2fa",
    //        api_key:"338162835573546",
    //        api_secret:"Nxjhw2R3ILB-VRb_QfPUJDtQlNo"
    // });
    //     const file = req.files.UserPhoto;
    //     console.log("user photo",file);
    //     cloudinary.uploader.upload(file.tempFilePath,(err, result)=>{

    //     });
    //SendEmailFun(req.body.UserEmail ,"Registration Mail ", `Hello ${req.body.UserName}, thank you for registration, your registration is successfully done.`);
    //res.status(201).send({msg:"Mail Sent.."});
  } catch (error) {
    res.status(500).send(error);
  }
};

//...............Start fetch single user data........
const singleUserId = async (req, res) => {
  const data = req.params.uid;
  try {
    const userData = await User.findById(data);
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).send(error);
  }
};

// single user search by name
const singleUserName = async (req, res) => {
  const data = req.params.uname;
  try {
    const result = await User.find({ UserName: data });
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).send(error);
  }
};
//.......END single user Api......

//...............Start Update user data.............
const updateUser = async (req, res) => {
  try {
    const userData = await User.findByIdAndUpdate(req.params._id, req.body);
    res.status(200).json(userData);
  } catch {
    res.status(500).send("Error");
  }
};
//.......END update user Api ......

//...........Start Detate user data.............
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.body._id, { UserStatus: "inactive" });
    res.status(200).json({msg:"Deleted/Inactive user data"});
  } catch {
    res.status(500).send("error");
  }
};
//.......END Delete user Api......

module.exports = {
  allUsers,
  createUser,
  singleUserId,
  singleUserName,
  updateUser,
  deleteUser,
};
