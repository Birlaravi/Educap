import React,{useState} from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const  MainDashboard =()=>{
      const [page,setpage]=useState(<Dashboard/>)
        return (
            <div >
                <div  id="main">
                 <div class="d-flex">
                 <div style={{flex:1,background:'skyblue'}}>
                 <Sidebar setpage={setpage}/>
                 </div>
                 <div style={{width:'100%',minHeight:'100vh',padding:'20px',flex:4}} className='mainDash'>
                 {page}
                 </div>
                
             </div>
            </div>  
        </div>  
        );
    }


export default MainDashboard;
