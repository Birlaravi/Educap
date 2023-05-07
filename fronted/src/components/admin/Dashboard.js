import { useEffect, useState } from "react";
import axios from "axios";
const Dashboard = () => {
  const [users, setusers] = useState([]);
  const [course, setcourse] = useState([]);
  const [events, setevents] = useState([]);
  const [career, setcareer] = useState([]);
  const [Reviews, setrewies] = useState([]);
  const [Gallery, setGallery] = useState([]);
  const getallcourse = async () => {
    const { data } = await axios.get(
      "http://localhost:4000/api/course/allcourse"
    );
    setcourse(data);
  };
  const getallEvents = async () => {
    const { data } = await axios.get("http://localhost:4000/api/event");
    setevents(data);
    console.log(data);
  };
  const getallcareer = async () => {
    const { data } = await axios.get("http://localhost:4000/api/career/alljob");
    setcareer(data);
    console.log(data);
  };
  const getallgallery = async () => {
    const { data } = await axios.get("http://localhost:4000/api/gallery");
    setusers(data);
    console.log(data);
  };
  const getalluser = async () => {
    const { data } = await axios.get("http://localhost:4000/api/user");
    setusers(data);
    console.log(data);
  };
  const getallreviews = async () => {
    const { data } = await axios.get("http://localhost:4000/api/user");
    setusers(data);
    console.log(data);
  };
  useEffect(() => {
    getallEvents();
    getallcareer();
    getallcourse();
    getallgallery();
    getalluser();
    getallreviews();
  }, []);
  return (
    <>
      <div class="col main pt-2 mt-3">
        <h3>
          <b>
            <span style={{ color: "white" }}>Dashboard</span>
          </b>
        </h3>

        <div class="row mb-2">
          <div class="col-xl-4 col-sm-8 py-3">
            <div class="card  text-white h-100">
              <div class="card-body" style={{ backgroundColor: "#74b9ff" }}>
                <div class="rotate">
                  <i class="fa fa-user fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Users</h6>
                <h1 class="display-4">{users.length}</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-8 py-3">
            <div class="card text-white  h-100">
              <div class="card-body " style={{ backgroundColor: "#74b9ff" }}>
                <div class="rotate">
                  <i class="fa fa-list fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Courses</h6>
                <h1 class="display-4">{course.length}</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-8 py-3">
            <div class="card text-white  h-100">
              <div class="card-body " style={{ background: "#74b9ff" }}>
                <div class="rotate">
                  <i class="fab fa-twitter fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Career</h6>
                <h1 class="display-4">{career.length}</h1>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-sm-8 py-3">
            <div class="card text-white  h-100">
              <div class="card-body " style={{ background: "#74b9ff" }}>
                <div class="rotate">
                  <i class="fa fa-list fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Events</h6>
                <h1 class="display-4">{events.length}</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-8 py-3">
            <div class="card text-white  h-100">
              <div class="card-body " style={{ background: "#74b9ff" }}>
                <div class="rotate">
                  <i class="fa fa-list fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Gallery</h6>
                <h1 class="display-4">{Gallery.length}</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-8 py-3">
            <div class="card text-white h-100">
              <div class="card-body" style={{ background: "#74b9ff" }}>
                <div class="rotate">
                  <i class="fa fa-list fa-4x"></i>
                </div>
                <h6 class="text-uppercase">Reviews</h6>
                <h1 class="display-4">6</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
