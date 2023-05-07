import { TableBody, TableHead } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { message } from "antd";
function User() {
  const [alluser, setalluser] = useState([]);
  const getalluser = async () => {
    const { data } = await axios.get("http://localhost:4000/api/user");
    let a = [];
    data.map((item) => {
      if (item.UserStatus !== "inactive") a.push(item);
    });
    setalluser(a);
  };
  const handleDelete = async (id) => {
    try {
      await axios.post("http://localhost:4000/api/user/delete", { _id: id });
      message.success("deleted Successfully");
      getalluser();
    } catch {
      message.error("error");
    }
  };
  useEffect(() => {
    getalluser();
  }, []);
  return (
    <div className="card w-100" style={{ background: "#c8d6e5" }}>
      <Table>
        <TableHead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            {/* <th>Contact</th> */}
            {/* <th>Password</th> */}
            <th>Dob</th>
            <th>Enroll</th>
            <th>Job Apply</th>
            <th>Action</th>
            {/* <th>Photo</th> */}
            {/* <th>Delete User</th> */}
          </tr>
        </TableHead>
        <TableBody>
          {alluser.map((item) => (
            <tr>
              <td>{item.UserName}</td>
              <td>{item.UserEmail}</td>
              <td>{item.UserDOB.substring(0, 10)}</td>
              <td>{item.UserEnroll}</td>
              <td>{item.UserJobApply}</td>
              <td>
                <button
                  className="btn btn-danger bg-dark text-white"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>

              {/* <td>Password</td> */}
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default User;
