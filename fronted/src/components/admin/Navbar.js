 import React from "react"
export const Navbar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg  navbar-dark" style={{backgroundColor:'#4b6584', width:'100%'}}>


        <div class="container-fluid">
         
          <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarRightAlignExample"aria-controls="navbarRightAlignExample"aria-expanded="false" aria-label="Toggle navigation" >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarLeftAlignExample">
         
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">

              <li class="nav-item" style={{color:"black"}}>
                <a class="nav-link " href="#"> Logout</a>
              </li>
            </ul>
          
          </div>
      
        </div>
      
      </nav>
      </>
    )
}
export default Navbar;