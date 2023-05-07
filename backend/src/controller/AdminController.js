const Admin = require("../model/AdminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer=require('multer');
const path = require('path');

//checkAdminlogin
const createUser = async (req, res) => {
  try {
    bcrypt.hash(req.body.AdminPassword, 8, async function (err, hash) {
      console.log("Hash: ", hash);
      if (err) {
        res.status(200).send(err);
      } else {
        const data = {
          AdminLoginEmail: req.body.AdminLoginEmail,
          AdminPassword: hash,
        };

        // const result = new User({UserName, UserEmail,UserNumber,UserPassword,UserDOB,UserStatus,UserEnroll,UserjobApply});
        const result = new Admin(data);
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

const checkAdminLogin = async (req, res) => {
  const aid = req.body.AdminLoginEmail;
  const apass = req.body.AdminPassword;
  try {
    const adminData = await Admin.findOne({ AdminLoginEmail: aid });
    console.log("Admin DATA: ", adminData);
    if (adminData) {
      const result = await bcrypt.compare(apass, adminData.AdminPassword);
      if (result) res.status(200).json({ status: true, msg: "successfull" });
      else res.status(403).json({ status: false, msg: "unsuccesfull" });
    } else {
      res.status(200).json({ msg: " Admin Email id not matched..." });
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send(error);
  }
};

//image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Public/images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });
const imageUpload = (req, res) => {
  res.status(200).send({ status: true, fileName: req.file.filename });
};
//img filter

const removeUploads = (req, res) => {
  fs.unlink(`Pcublic/images/${req.body.filename}`, (err) => {
    if (err) throw res.send(err);
    else res.status(200).send("Image removed successfully!");
  });
};

module.exports = {
  checkAdminLogin,
  createUser,
  removeUploads,upload,imageUpload
};
