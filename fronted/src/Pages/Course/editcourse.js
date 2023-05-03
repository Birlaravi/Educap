import React, { useState } from "react";

function Editcourse({ handleDelete, handleEdit, item }) {
  const [edit, setedit] = useState(true);
  const [data, setdata] = useState({
    CourseName: item.CourseName,
    Duration: item.Duration,
  });
  return (
    <>
      {edit ? (
        <tr>
          <td className="p-2">{item.CourseName}</td>
          <td className="p-2">{item.Duration}</td>
          <td className="d-flex align-items-center">
            <button
              onClick={() => {
                setedit(false);
              }}
              className="btn btn-success bg-success mx-3"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item._id)}
              className="btn btn-dark bg-danger  "
            >
              Delete
            </button>
          </td>
        </tr>
      ) : (
        <tr>
          <input
            type="text"
            value={data.CourseName}
            onChange={(e) => setdata({ ...data, CourseName: e.target.value })}
          />
          <input
            type="text"
            value={data.Duration}
            onChange={(e) => setdata({ ...data, Duration: e.target.value })}
          />
          <td className="d-flex align-items-center">
            <button
              onClick={() => {
                setedit(true);
                handleEdit(item._id, data);
              }}
              className="btn btn-success bg-success mx-3"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(item.cid)}
              className="btn btn-dark bg-danger  "
            >
              Delete
            </button>
          </td>
        </tr>
      )}
    </>
  );
}

export default Editcourse;
