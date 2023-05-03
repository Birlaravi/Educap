const Batch= require("../model/BatchModel");
const allBatchs = async(req,res)=>{
    try{
        const batchData = await Batch.find();
        res.status(200).json(batchData);
       }
    catch(error){
        res.status(500).send(error)
    }
};

const createBatch = async(req,res)=>{
        try{
        const data={BatchTime, BtachDays,BatchStartDate,BatchStatus}=req.body;
        const result = new Batch({BatchTime, BatchDays,BatchStartDate,BatchStatus});
        await result.save();
        console.log("batch inserted");
        res.status(200).json({data}); 
         }
        catch(error)
        {
            res.status(500).send(error);
        }
};

const deleteBatch = async(req,res)=>{
    const data=(req.params.bid);
  try{
      const batchData = await Batch.findOneAndDelete({BatchName:data});
      //res.json(BatchData);  
      res.send("delete Batch");   
  }
  catch(error){
      res.status(500).send(error);
  }
};

const updateBatch = async(req,res)=>{
    try{
        const batchdata = await Batch.findByIdAndUpdate(req.params.bid, req.body);
        res.status(200).json(batchdata);
     }
     catch{
         res.status(500).send(error);
     }
};
module.exports={
   allBatchs,
   createBatch,
   updateBatch,
   deleteBatch 
}