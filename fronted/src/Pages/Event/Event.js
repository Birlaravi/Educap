import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";
import { message } from "antd";
import axios from "axios";
function Event() {
  const [allevents, setallevents] = useState([]);
  const [newEvent, setnewEvent] = useState({
    EventTitle: "",
    EventDate: "",
    EventDescription: "",
    EventImage: "",
  });
  const getallEvents = async () => {
    const { data } = await axios.get("http://localhost:4000/api/event");
    setallevents(data);
    console.log(data);
  };
  const addEvents = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/event/add", {
        ...newEvent,
      });
      getallEvents();
      message.success("event add successfully");
    } catch {
      message.error("something went wrong");
    }
  };
  const handledelete=async(_id)=>{
     try{
      await axios.delete("http://localhost:4000/api/event/delete",{_id})
      message.success('deleted successfull');
      getallEvents();
     }catch{
      message.error('error')
     }
  }  
  const uploadImg = async (event) => {
    const fileList = event.target.files[0];
    const formdata = new FormData();
    formdata.append("photo", fileList);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/admin/uploadImg",
        formdata
      );
      setnewEvent({ ...newEvent, EventImage: data.fileName });
      console.log(data)
      message.error("Img added");
    } catch {
      message.error("Img not added");
    }
  };
  useEffect(() => {
    getallEvents();
  }, []);

  return (
    <>
      <div className="w-100 d-flex flex-wrap justify-content-between">
        <form className="card p-4 w-50 h-100" onSubmit={(e) => addEvents(e)}>
          <div className="form-group m-2">
            <label htmlFor="EventTitle">Event Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) =>
                setnewEvent({ ...newEvent, EventTitle: e.target.value })
              }
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="EventDate">Event Date</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) =>
                setnewEvent({ ...newEvent, EventDate: e.target.value })
              }
            />
          </div>
          <div className="form-group m-2">
            <label htmlFor="EventDescription">Event textarea</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) =>
                setnewEvent({ ...newEvent, EventDescription: e.target.value })
              }
            ></textarea>
          </div>
          <div aame="form-group m-2">
            <label htmlFor="EventImage">Upload Image</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              onChange={(e) => uploadImg(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            ADD
          </button>
        </form>

        <div className="d-flex flex-column w-50">
          {allevents.map((event, index) => (
            <Card sx={{ maxWidth: 345 ,margin:10}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://tse4.mm.bing.net/th?id=OIP.fzSnClvueUiDCZNJINMWywHaEK&pid=Api&P=0"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {event.EventTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.EventDescription}
                  </Typography>
                  <button className="btn bg-dark btn-dark" onClick={()=>handledelete(event._id)}>Delete</button>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
export default Event;
