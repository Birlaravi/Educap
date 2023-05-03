const router = require('express').Router();
const Gallery= require('../controller/GalleryController')
//router.use(express.json());
router.get('/',Gallery.allGallerys);
router.get('/:gid',Gallery.singleGalleryId);
router.post('/add',verifyToken,Gallery.createGallery);
router.delete('/:gid',verifyToken,Gallery.deleteGallery);


function verifyToken(req,res,next){
    const bearerHeader =req.headers["authorization"];
    // console.log("result...",bearerHeader)
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