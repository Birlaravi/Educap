import React  from "react";
import "./adminlogin.css";
import {useNavigate} from'react-router-dom';

const Login = ()=>{
	const Navigate=useNavigate();
return(
	
 <>
 <div className="login-body" >
	<div className="box">
		<form autocomplete="off">
			<h2>Sign in</h2>
			<div className="inputBox">
				<input type="text" required="required" />
				<span>Userame</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="password" required="required" />
				<span>Password</span>
				<i></i>
			</div>
			<div className="links">
				<a href="#">Forgot Password ?</a>
			</div><br/>
			<button className="btn" onClick={()=>Navigate('/MainDashbord')}>Login</button>
		</form>
	</div>
	</div>
</>
   )
 }
export default Login ;
