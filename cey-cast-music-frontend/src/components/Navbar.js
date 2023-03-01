import React from 'react';
import combinedshape from "../icons/Combined-Shape.png";
import logo from "../icons/ceycastLogo.png";

export default function Navbar(props) {
  return (

 
    <nav class="col-12 navbar navbar-expand-lg navbar-light bg-light ">
          
          <div class="container-fluid ">
            
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
             
            >
              <a
               onClick={props.showSideBar}
               ><span class="navbar-toggler-icon"></span></a>
            </button>

            {/* navbar item list container */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul
                class="navbar-nav me-auto mb-2 mb-lg-0 "
                style={{
                  fontWeight: "700",
                  font: "Open-Sans",
                  fontSize: "15px",
                }}
              >
                <li class="nav-item font-weight-bold mx-3">
                  <a
                    class="nav-link   "
                    aria-current="page"
                    href="#"
                   onClick={props.showAllPodcasts}
                  >
                    ALL MUSIC
                  </a>
                </li>
                <li class="nav-item mx-3">
                  <a class="nav-link " href="#"
                  onClick={props.showNewPodcasts}
                   >
                    NEW MUSIC
                  </a>
                </li>
                <li class="nav-item dropdown mx-3">
                  <a
                    class="nav-link  "
                    href="#"
                    onClick={props.showPopPodcasts}
                  >
                    POPULAR MUSIC
                  </a>
                </li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    type="button"
                    class="btn btn-primary btn-lg"
                    style={{
                      borderRadius: "25px",
                      width: "150px",
                      fontFamily: "Open Sans",
                      fontWeight: "700",
                      fontSize: "15px",
                      // height:"40px",
                      backgroundColor: "#101047",
                     marginRight: "40px",
                      border: "none",
                      paddingBottom: "10px",
                    }}
                   onClick={props.showSignIn}
                  >
                    Login
                  </button>
                </li>

                
              </ul>
              
            </div>
            <div class="d-lg-none">
            <img src={logo}  />
            </div>
            <div class="icon-container-shape">
                    <img src={combinedshape} 
                    onClick={props.showNotifi}
                                 
                    />
                  </div>
                           


                  

                           
                            </div>

          


          
        </nav>
         
          
  )
}
