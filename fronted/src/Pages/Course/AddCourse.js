import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


const AddCourse =({setpage}) =>{
  const Navigate=useNavigate();

      return (
    <>
    <MDBInput label='Text input' id='typeText' type='text' />
    <MDBInput label='Number input' id='typeNumber' type='number' />

    </>
  );
}
export default AddCourse;