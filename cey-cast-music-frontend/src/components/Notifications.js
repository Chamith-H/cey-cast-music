import React, { useEffect, useRef } from "react";
import "../styles/notifications.css";
import Erosh from "../images/EroshPods1.png";

export default function Notifications(props) {

  const ref = useRef(null);

  useEffect(()=>{
      const element = document.getElementById("overlay-notify");
      element.addEventListener("click",handleClickOutside,true)
      
  } , [])

  
  
  const handleClickOutside =(e)=>{
     if(!ref.current.contains(e.target)){
      console.log("click outside");
      setTimeout(()=>{
          props.close();
          
      } , 500)
      
     }
     else{
      console.log("click inside");
     }
  }








  return (
    <div className="overlay-notify d-none d-lg-block" id="overlay-notify">
      <div 
        className="row mt-4 box border  gx-0 d-flex justify-content-center"
        style={{
          width: "82%",
          height: "auto",
          backgroundColor: "white",
          marginLeft: "10%",
          borderTopLeftRadius:"5%",
          borderBottomLeftRadius:"5%",
          borderBottomRightRadius:"5%"

        }}
      >
        <div className="col-11 pt-2" ref={ref}>
        NOTIFICATIONS


        <div class="card mt-1 box border-0" style={{ width: "100%" ,backgroundColor:"#ebebeb"}}>
            <div class="row gx-0">
              <div class="col-sm-2 p-2">
                <img
                  class="card-img "
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  //style={{ width: "auto", borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10 p-2">
                <div class="card-body p-0 ">
                  <h5 class="card-title card-headings p-0 m-0">Suresh Dasari</h5>
                  <p class="card-text  p-0">is a founder and technical lead</p>
                 
                </div>
              </div>
            </div>
        
        
        </div>

        <div class="card mt-2 box border-0" style={{ width: "100%" ,backgroundColor:"#ebebeb"}}>
            <div class="row gx-0">
              <div class="col-sm-2 p-2">
                <img
                  class="card-img "
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  //style={{ width: "auto", borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10 p-2">
                <div class="card-body p-0 ">
                  <h5 class="card-title card-headings p-0  m-0">Suresh Dasari</h5>
                  <p class="card-text  p-0">is a founder and technical lead</p>
                 
                </div>
              </div>
            </div>
        
        
        </div>

        <div class="card mt-2 box border-0" style={{ width: "100%" ,backgroundColor:"#ebebeb"}}>
            <div class="row gx-0">
              <div class="col-sm-2 p-2">
                <img
                  class="card-img "
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  //style={{ width: "auto", borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10 p-2">
                <div class="card-body p-0 ">
                  <h5 class="card-title card-headings p-0  m-0">Suresh Dasari</h5>
                  <p class="card-text  p-0">is a founder and technical lead</p>
                 
                </div>
              </div>
            </div>
        
        
        </div>

        <div class="card mt-2 box border-0" style={{ width: "100%" ,backgroundColor:"#ebebeb"}}>
            <div class="row gx-0">
              <div class="col-sm-2 p-2">
                <img
                  class="card-img "
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  //style={{ width: "auto", borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10 p-2">
                <div class="card-body p-0 ">
                  <h5 class="card-title card-headings p-0  m-0">Suresh Dasari</h5>
                  <p class="card-text  p-0">is a founder and technical lead</p>
                 
                </div>
              </div>
            </div>
        
        
        </div>
        <div class="card mt-2 box border-0" style={{ width: "100%" ,backgroundColor:"#ebebeb"}}>
            <div class="row gx-0">
              <div class="col-sm-2 p-2">
                <img
                  class="card-img "
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  //style={{ width: "auto", borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10 p-2">
                <div class="card-body p-0 ">
                  <h5 class="card-title card-headings p-0  m-0">Suresh Dasari</h5>
                  <p class="card-text  p-0">is a founder and technical lead</p>
                 
                </div>
              </div>
            </div>
        
        
        </div>


        <div class="card mt-2 mb-2 box border-0" style={{ width: "100%" ,backgroundColor:"#ebebeb"}}>
            <div class="row gx-0">
              <div class="col-sm-2 p-2">
                <img
                  class="card-img "
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  //style={{ width: "auto", borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10 p-2">
                <div class="card-body p-0 ">
                  <h5 class="card-title card-headings p-0 border m-0">Suresh Dasari</h5>
                  <p class="card-text border p-0">is a founder and technical lead</p>
                 
                </div>
              </div>
            </div>
        
        
        </div>


          </div>
          
        

        {/* <div className="col-11 border pb-0 ">
          
          <div class="card  box border-0" style={{ width: "100%" ,backgroundColor:"#CFCFCF"}}>
            <div class="row ">
              <div class="col-sm-2 ">
                <img
                  class="card-img m-2"
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  style={{ width: "4vw", borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10">
                <div class="card-body ">
                  <h5 class="card-title card-headings p-0">Suresh Dasari</h5>
                  <p class="card-text">is a founder and technical lead</p>
                 
                </div>
              </div>
            </div>

            
          </div>
          
        </div> */}

        {/* <div className="col-11 ">
          <div class="card mb-1 border-0 " style={{ width: "100%" ,backgroundColor:"#CFCFCF"}}>
            <div class="row no-gutters">
              <div class="col-sm-2 ">
                <img
                  class="card-img m-2"
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  style={{ width: "4vw", borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10">
                <div class="card-body ">
                  <h5 class="card-title card-headings p-0">Suresh Dasari</h5>
                  <p class="card-text">is a founder and technical lead</p>
                 
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="col-11 ">
          <div class="card mb-1 border-0" style={{ width: "100%" ,backgroundColor:"#CFCFCF"}}>
            <div class="row no-gutters">
              <div class="col-sm-2 ">
                <img
                  class="card-img m-2"
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  style={{ width: "4vw", borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10">
                <div class="card-body ">
                  <h5 class="card-title card-headings p-0">Suresh Dasari</h5>
                  <p class="card-text">is a founder and technical lead</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="col-11 ">
          <div class="card mb-1 border-0" style={{ width: "100%" ,backgroundColor:"#CFCFCF"}}>
            <div class="row no-gutters">
              <div class="col-sm-2 ">
                <img
                  class="card-img m-2"
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  style={{ width: "4vw", borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10">
                <div class="card-body ">
                  <h5 class="card-title card-headings p-0">Suresh Dasari</h5>
                  <p class="card-text">is a founder and technical lead</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
