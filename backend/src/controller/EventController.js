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
       
          const data=
          {
            EventTitle:req.body.EventTitle,
            EventDate:req.body.EventDate, 
            EventDescription:req.body.EventDescription, 
            EventImage:req.body.EventImage, 
            EventStatus:'active'
            };

           const result= new Event(data);
           const result1=result.save();
           res.status(201).json(`RESULT..${result}`);
        
  
       }

         catch(error)
   {
       res.status(500).send(error)
   }
};



const deleteEvent = async(req,res)=>{
        //const data=(req.params.cid)
      try{
       
        const eventData = await Event.findByIdAndRemove(req.body._id)
        res.status(200).json({eventData,msg:'data removed'})
      
    }
      catch(error){
        res.status(500).send(error);
      }
};

const updateEvent = async(req,res)=>{
    try{
        
            const eventdata =  await Event.findByIdAndUpdate(req.params.eid, req.body);
            res.status(200).json(eventdata);

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