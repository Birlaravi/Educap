import { TableBody, TableHead } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'
function User() {
  const [alluser,setalluser]=useState([]);
  const getalluser=async()=>{
      const { data } = await axios.get(
        "http://localhost:4000/api/user"
      );
      setalluser(data);
      console.log(data);
  }
  useEffect(()=>{
    getalluser();
  },[])
  return (
    <div  className='card w-100' style={{background:'#c8d6e5'}}>
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
                {/* <th>Photo</th> */}
                {/* <th>Delete User</th> */}
              </tr>
              
              </TableHead>
              <TableBody>
            {alluser.map((item)=>
            <tr>
            <td>{item.UserName}</td>
            <td>{item.UserEmail}</td>
            <td>{item.UserDOB.substring(0,10)}</td>
            <td>{item.UserEnroll}</td>
            <td>{item.UserJobApply}</td>
            
            {/* <td>Password</td> */}
            
          </tr>)
          
          }
              </TableBody>

         </Table>
     
   
    </div>
  )
}

export default User