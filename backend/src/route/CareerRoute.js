const router = require("express").Router();
const Career = require("../controller/CareerController");
//router.use(express.json());
router.get("/alljob", Career.allCareers);
router.get("/:jid", Career.singleCareerId);
//router.get('/:jtitle',Career.singleCareerTitle);
router.post("/add", Career.createCareer);
router.delete("/delete", Career.deleteCareer);
router.post("/update", Career.updateCareer);

// function verifyToken(req,res,next){
//     const bearerHeader =req.headers["authorization"];
//     if(typeof bearerHeader !="undefined"){
//         const bearer= bearerHeader.split(" ");
//         const token=bearer[1];
//         req.token = token;
//         next();
//     }
//     else{
//         res.send({msg:"token is not valid"});
//     }
// }

module.exports = router;
