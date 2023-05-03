import Course from "../../Pages/Course/Course";
import Event from "../../Pages/Event/Event";
import Gallery from "../../Pages/Gallery";
import {useNavigate} from'react-router-dom';
import Dashboard from "./Dashboard";
import Feedback from "react-bootstrap/esm/Feedback";
import User from "../../Pages/User/User";
import Job from "../../Pages/Job";
const Sidebar = ({setpage}) => {
    const Navigate=useNavigate();
    return (
        <div className="sidebar sidebar-show" >
            <h1 className="text-center my-4" style={{ fontSize: '32px', fontFamily: 'fantasy' }}>
                EduCap
            </h1>
            <div className="d-flex align-items-center justify-content-center"
            >

                <ul className="sidebar-list d-flex  justify-content-center flex-column">
                <li className="" onClick={()=>setpage(<Dashboard/>)}>
                        Dashboard
                    </li>
                    
                    <li className="" onClick={()=>setpage(<Course/>)}>
                        Courses
                    </li>
                    <li className="" onClick={()=>setpage(<User/>)}>
                        Users
                    </li>
                    <li className="" onClick={()=>setpage(<Event/>)}>
                        Events
                    </li>
                    <li className="" onClick={()=>setpage(<Job/>)}>
                        Jobs
                    </li>
                    <li className="" onClick={()=>setpage(<Gallery/>)}>
                        Gallery
                    </li>
                    <li className="" onClick={()=>setpage(<Feedback/>)}>
                        Feedback
                    </li>
                    <li className="" onClick={()=>Navigate('/')}>
                        Logout
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar;

