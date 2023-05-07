import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import { message } from "antd";
function Job() {
  const [jobs, setjobs] = useState([]);
  const [job, setjob] = useState({
    JobTitle: "",
    JobType: "",
    Qualification: "",
    JobDescription: "",
  });

  const getjob = async () => {
    let a=[]
    const { data } = await axios.get("http://localhost:4000/api/career/alljob");
    data.map((item) => {
      if(item.JobStatus!=="inactive"){
        a.push(item);
      }
    })
    setjobs(a);
  };
  const addJob = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/career/add", { ...job });
      message.success("Job Added Successfully");
      getjob();
    } catch {
      message.error("some error");
    }
  };
  const deleteJob = async (_id) => {
   try{
    await axios.delete("http://localhost:4000/api/career/delete", {_id});
    message.success("Deleted Succesfully");
    getjob();
   }catch{
    message.error("some error");
   }
  };
  useEffect(() => {
    getjob();
  }, []);
  return (
    <>
      <div className="w-100 d-flex flex-wrap justify-content-between">
        <form className="card p-4 w-50 h-100" onSubmit={(e) => addJob(e)}>
          <div className="form-group m-2">
            <label htmlFor="JobTitle">Job Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setjob({ ...job, JobTitle: e.target.value })}
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="JobType">Job Type</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setjob({ ...job, JobType: e.target.value })}
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="Qualification">Job Qualification</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setjob({ ...job, Qualification: e.target.value })
              }
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="JobDescription">Job Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) =>
                setjob({ ...job, JobDescription: e.target.value })
              }
            ></textarea>
          </div>
          {/* <div aame="form-group m-2">
            <label htmlFor="EventImage">Upload Image</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              onChange={(e) => uploadImg(e)}
            />
          </div> */}
          <button type="submit" className="btn btn-primary">
            ADD
          </button>
        </form>

        <div className="d-flex flex-column w-50">
          {jobs.map((event, index) => (
            <Card sx={{ maxWidth: 445, margin: 10 }}>

              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Title: {event.JobTitle}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Type: {event.JobType}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Qualification: {event.Qualification}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Detail: {event.JobDescription}
                  </Typography>
                  <button onClick={()=>deleteJob(event._id)} className="btn btn-dark bg-dark">Delete</button>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Job;
