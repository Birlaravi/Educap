import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDashboard from './components/admin/MainDashboard';
import Login from './components/admin/Login';
import Course from './Pages/Course/Course';
import Event from './Pages/Event/Event';
import Job from './Pages/Job';
import AddCourse from './Pages/Course/AddCourse';
import './App.css'
 
function App(){   
        return (
            <div>
                <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>} />
                    <Route path='/MainDashbord' element={<MainDashboard/>} />
                    <Route path='/course' element={<Course/>} />
                    <Route path='/event' element={<Event/>}/>
                    <Route path='/Job' element={<Job/>}/>
                    <Route path='/addCourse' element={<AddCourse/>} />
                </Routes>
                </BrowserRouter>
               
        </div> 
        );
    }
  
 
   
export default App;
