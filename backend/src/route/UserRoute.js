
const router = require('express').Router();
const User= require('../controller/UserController')
//router.use(express.json());
router.get('/',User.allUsers);
router.post('/reg',User.createUser);
//router.get('/:uid',User.singleUserId);
router.get('/:uname',User.singleUserName);
router.post('/:uid',verifyToken,User.updateUser);
router.delete('/:uid', verifyToken,User.deleteUser);



function verifyToken(req,res,next){
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
}

module.exports = router;