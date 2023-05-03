import React, { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useEffect } from "react";
import Editcourse from "./editcourse";
const Course = () => {
  const [allcourse, setallcourse] = useState([]);
  const [newcourse, setcourse] = useState({ CourseName: "", Duration: "" });
  const getallcourse = async () => {
    const { data } = await axios.get(
      "http://localhost:4000/api/course/allcourse"
    );
    setallcourse(data);
    console.log(data);
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/course", { ...newcourse });
      message.success("Course Added Successfully");
      getallcourse();
    } catch {
      message.error("Something Went wrong");
    }
  };
  const handleEdit = async (cid,val) => {
    try {
      await axios.post("http://localhost:4000/api/course/update", { _id:cid,...val });
      message.success("Course Update Successfully");
      getallcourse();
    } catch {
      message.error("Something Went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post("http://localhost:4000/api/course/delete", { _id: id });
      message.success("Delete Successfully");
      getallcourse();
    } catch {
      message.error("Something Went wrong");
    }
  };
  useEffect(() => {
    getallcourse();
  }, []);
  return (
    <>
      <form className="card m-5 courseform" onSubmit={(e) => handleAdd(e)}>
        <label htmlFor="CourseName">Course Name</label>
        <input
          type="text"
          name="CourseName"
          onChange={(e) =>
            setcourse({ ...newcourse, CourseName: e.target.value })
          }
        />
        <label htmlFor="Duration">Duration </label>
        <input
          type="number"
          name="Duration"
          step="0.01"
          onChange={(e) =>
            setcourse({ ...newcourse, Duration: e.target.value })
          }
        />
        <input type="submit" value="ADD" className="btn" />
      </form>
      <div className="card m-5 p-5">
        <table className="w-50">
          <thead className="p-4">
            <tr>
              <td>Course Name</td>
              <td>Duration</td>
              <td className="text-center">Action</td>
            </tr>
          </thead>
          {allcourse.map((item) => (
            <Editcourse item={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
          ))}
        </table>
      </div>
    </>
  );
};

export default Course;
