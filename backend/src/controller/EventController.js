const Event = require("../model/EventModel");
const jwt = require("jsonwebtoken");
const allEvents = async(req,res)=>{
    try{
        const eventData = await Event.find();
         res.status(200).json(eventData);
        }
    catch(error){
        res.status(500).send(error);
    }

};

const singleEventId=async(req,res)=>{
    const data=req.params.eid;
    try{
       const eventData = await Event.findById(data);
        res.status(200).json(eventData);
    }
    catch(error){
        res.status(500).send(error)
    }
};

const singleEventName=async(req,res)=>{
    const data=req.params.ename;
    try{
       const eventData = await Event.find({EventName:data});
        res.status(200).json(eventData);
    }
    catch(error){
        res.status(500).send(error)
    }
};


const createEvent = async(req,res)=>{
    //const data= req.params.eid; 
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
            EventTitle:req.body.EventTitle,
            EventDate:req.body.EventDate, 
            EventDescription:req.body.EventDescription, 
            EventImage:req.body.EventImage, 
            RegisteredUser:req.body.RegisteredUser
            };

           const result= new Event(data);
           const result1=result.save();
           res.status(201).json(`RESULT..${result}`);
        } 
    }); 
       }

         catch(error)
   {
       res.status(500).send(error)
   }
};



const deleteEvent = async(req,res)=>{
        //const data=(req.params.cid)
      try{
        jwt.verify(req.token,"Admin Secretkey",async(err,authData)=>{
            if(err){
                res.send({msg:"error"});
            }
            else{
        const eventData = await Event.findByIdAndRemove(req.params.eid)
        res.status(200).send("Remove data"); 
            }
        });
    }
      catch(error){
        res.status(500).send(error);
      }
};

const updateEvent = async(req,res)=>{
    try{
        jwt.verify(req.token,"Admin Secretkey",async(err,authData)=>{
            if(err){
                res.send({msg:"error"});
            }
     else{
            const eventdata =  await Event.findByIdAndUpdate(req.params.eid, req.body);
            res.status(200).json(eventdata);
    }
    });
}
    catch(error){
        res.status(500).send(error);
    }
};
module.exports={
   allEvents,
   singleEventId,
   singleEventName,
   createEvent,
   deleteEvent,
   updateEvent
}