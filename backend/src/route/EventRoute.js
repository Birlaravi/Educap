const router = require('express').Router();
const Event= require('../controller/EventController')
//router.use(express.json());
router.get('/',Event.allEvents);
//router.get('/:eid',Event.singleEventId);
router.get('/:ename',Event.singleEventName);
router.post('/',verifyToken,Event.createEvent);
router.delete('/:eid',verifyToken,Event.deleteEvent);
router.put('/:eid',verifyToken,Event.updateEvent);

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