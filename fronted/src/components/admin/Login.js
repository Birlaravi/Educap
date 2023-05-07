import React, { useState }  from "react";
import "./adminlogin.css";
import {useNavigate} from'react-router-dom';
import {message} from 'antd'
import axios from "axios";
const Login = ()=>{
	const [data,setdata]=useState({AdminLoginEmail:'',AdminPassword:''})
	const Navigate=useNavigate();
	const handleSubmit = async(e) => {
		e.preventDefault();
		
		try{
			await axios.post("http://localhost:4000/api/admin/login",{AdminLoginEmail:data.AdminLoginEmail,AdminPassword:data.AdminPassword});
			message.success('Login Successfull');
		     Navigate('/MainDashbord')
		}catch{
		  message.error('Please input Correct email id & passwod');
		}
		    
	}

return(
	
 <>
 <div className="login-body" >
	<div className="box">
		<form autocomplete="off" className="form" >
			<h2>Sign in</h2>
			<div className="inputBox">
				<input type="text" required="required" onChange={(e)=>setdata({...data,AdminLoginEmail:e.target.value})} />
				<span>Userame</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="password" required="required" onChange={(e)=>setdata({...data,AdminPassword:e.target.value})}/>
				<span>Password</span>
				<i></i>
			</div>
			<div className="links">
				<a href="#">Forgot Password ?</a>
			</div><br/>
			<button className="btn" onClick={(e)=>handleSubmit(e)}>Login</button>
		</form>
	</div>
	</div>
</>
   )
 }
export default Login ;
