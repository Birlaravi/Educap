const jwt = require("jsonwebtoken");
const router = require('express').Router();
const Admin= require('../controller/AdminController')
//router.use(express.json());
router.get('/login', Admin.checkAdminLogin);
/*router.post("/authallusers",varifyToken, (req, res) => {
    jwt.verify(req.token,"key",(err,authData)=>{
        if(err){
            res.send({msg:"error"});
        }
        else{
            res.json({msg:"token found",authData});
        }
    })
})

function varifyToken(req,res,next){
    const bearerHeader =req.headers["authorization"];
    if(typeof bearerHeader !="undefined"){
        const bearer= bearerHeader.split(" ");
        const token=bearer[1];
        req.token = token;
        next();
    }
    else{
        res.send({msg:"token is not valid"});
    }
}*/

module.exports = router;