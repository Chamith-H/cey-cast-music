import React, { useEffect, useRef } from "react";
import logo from "../icons/ceycastLogo.png";
import "../styles/sidemenumobile.css";
import mike from "../icons/microphone.png";
import Google from "../icons/google.png";
import Huawei from "../icons/huawei.png";
import FB from "../icons/fb.png";
import RSS from "../icons/rss.png";
import INSTA from "../icons/insta.png";
import house from "../icons/house.png";
import SideMenuBarItem from "./SideMenuBarItem.js";
import Plus from "../icons/plus.png"
import fav from "../icons/favourite.png"
import about from "../icons/about.png"
import pod from "../icons/podcast.png"


export default function SideMenuBarMobile(props) {


    const ref = useRef(null);

  useEffect(()=>{
      const element = document.getElementById("id");
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
    <div className="overlay-menu container-fluid gx-0 d-lg-none">
      <div
        class="row gx-0"
        style={{
          width: "auto",
          height: "100vh",
          backgroundColor: "transparent",
        }}

        id="id"
      >
        <div
          className="col-6 border position-relative col-sm-5"
          style={{ backgroundColor: "rgb(240, 240, 240)" ,borderTopRightRadius:"30px",borderBottomRightRadius:"30px"}}
          ref={ref}
        >
          <div
            className="d-flex justify-content-center  mb-5"
            style={{ height: "5vh" }}
          >
            <img src={logo} />
          </div>

          <div
            className=" gx-0  d-flex justify-content-end mb-2"
            style={{ height: "auto" }}
          >
            <SideMenuBarItem img={house} item={"Home"} function={props.showHome} />
          </div>
          <div
            className=" gx-0  d-flex justify-content-end mb-2"
            style={{ height: "auto" }}
          >
            <SideMenuBarItem img={mike} item={"Podcasts"}  />
          </div>
          <div
            className=" gx-0  d-flex justify-content-end mb-2"
            style={{ height: "auto" }}
          >
            <SideMenuBarItem img={fav} item={"Favourite"} />
          </div>
          <div
            className=" gx-0  d-flex justify-content-end mb-2"
            style={{ height: "auto" }}
          >
            <SideMenuBarItem img={about} item={"About"} function={props.showSearch} />
          </div>
          <div
            className=" gx-0  d-flex justify-content-end mb-2"
            style={{ height: "auto" }}
          >
            <SideMenuBarItem img={Plus} item={"Add New Podcast"} />
          </div>
          <div
            className=" gx-0  d-flex justify-content-end mb-2"
            style={{ height: "auto" }}
          >
            <SideMenuBarItem img={pod} item={"All Podcasts"} function ={props.showAllPodcasts}/>
          </div>
          <div
            className=" gx-0  d-flex justify-content-end mb-2"
            style={{ height: "auto" }}
          >
            <SideMenuBarItem img={pod} item={"New Podcasts"}  function ={props.showNewPodcasts}/>
          </div>
          <div
            className=" gx-0  d-flex justify-content-end mb-2"
            style={{ height: "auto" }}
          >
            <SideMenuBarItem img={pod} item={"Popular Podcasts"} function ={props.showPopPodcasts}/>
          </div>

          <div className="d-flex justify-content-center">
            <div className="col-9">
              <hr></hr>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="col-6 d-flex justify-content-center">
              <button onClick={props.showSignIn}
                style={{
                  borderRadius: "25px",
                  width: "150px",
                  fontFamily: "Open Sans",
                  fontWeight: "700",
                  fontSize: "15px",
                   height:"5vh",
                  backgroundColor: "#101047",
                  //marginRight: "40px",
                  border: "none",
                
                  color: "white",
                }}
              >
                Login
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <div className=" mt-2 app  mx-1 p-0">
            <img src={Google} style={{ width: "100%", height: "100%" }} className="m-0"
            />
            </div>
            
            <div className=" mt-2 app  mx-1 p-0">
            <img src={Huawei} style={{ width: "100%", height: "100%" }} className="m-0"
            />
            </div>

          </div>

          

          <div className="row d-flex justify-content-center gx-0">
           
          <div className=" mt-2 app  mx-1 p-0">
            <img src={Huawei} style={{ width: "100%", height: "100%" }} className="m-0"
            />
            </div>
          </div>


          <div
        className="row position-absolute bottom-0 start-0 justify-content-center gx-0 mb-2"
        style={{ width: "100%" }}
      >
        <div className="col-1 col-xl-2 "></div>
        <div className="col-1  ">
          <img src={FB} />
        </div>
        <div className="col-1  "></div>
        <div className="col-1  ">
          <img src={INSTA} />
        </div>
        <div className="col-1  "></div>
        <div className="col-1  ">
          <img src={RSS} />
        </div>
        <div className="col-1 col-xl-2 "></div>
      </div>



        </div>
      </div>
      




    </div>
  );
}
