import React, { useState } from "react";
import Navbar from "./Navbar";
import QuickSearch from "./QuickSearch";
import RecentEpisodes from "./RecentEpisodes";
import SideMenuBar from "./SideMenuBar";
import Slider from "./Slider";
import TrendingEpisodes from "./TrendingEpisodes";
import Erosh from "../images/EroshPods1.png";
import RecentlyActiveChannels from "./RecentlyActiveChannels";
import AllMusics from "./AllMusics";
import NewMusics from "./NewMusics";
import PopularMusics from "./PopularMusics";
import SignUp from "./SignUp";
import Modal from "./Modal.js";
import SignIn from "./SignIn";
import SideMenuBarMobile from "./SideMenuBarMobile";
import ClickComponent from "./ClickComponent";
import DarkOverlay from "./DarkOverlay";
import NotificationMobile from "./NotificationMobile";

export default function Home() {
  const [home, setHome] = useState(true);
  const [allPodcasts, setAllPodcasts] = useState(false);
  const [newPodcasts, setNewPodcasts] = useState(false);
  const [popPodcasts, setPopPodcasts] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [mobile ,setMobile] = useState(false)
  const [mobileHome ,setMobileHome] = useState(false)
  const [search,setSearch] = useState(false)

  const [show, setShow] = useState(false);
  const [notifi,setNotifi] = useState(false)
  // const [mobileNotifi,setMobileNotifi] = useState(false)

  const [click,setClick] = useState(false)
  const [dark , setDark] = useState(false)

  const show_all_podcasts = () => {
    setHome(false);
    setAllPodcasts(true);
    setNewPodcasts(false);
    setPopPodcasts(false);
    setMobile(false)
  };
  const show_home = () => {

    setAllPodcasts(false);
    setNewPodcasts(false);
    setPopPodcasts(false);
    setMobile(false)
    setHome(true);
  };
  const show_new_podcasts = () => {
    setHome(false);
    setAllPodcasts(false);
    setNewPodcasts(true);
    setPopPodcasts(false);
    setMobile(false)
  };

  const show_pop_podcasts = () => {
    setHome(false);
    setAllPodcasts(false);
    setNewPodcasts(false);
    setPopPodcasts(true);
    setMobile(false)
  };

  const show_sign_up = () => {
    setNotifi(false);
    setSearch(false)
    setSignIn(false)
    setSignUp(true);
    setMobile(false);
   
  };
  const show_sign_in = () => {
    setNotifi(false);
    setSearch(false)
    setSignUp(false);
    setSignIn(true);
    setMobile(false);
    
  };
  const close_sign_up = () => {
    setSignUp(false);
    setSignIn(false);
  };

  const show_modal = () => {
    setShow(true);
  };

  const show_notifi =()=>{
    setNotifi(true);
    setClick(true);
    setSearch(false);
    

  }

  // const mobile_notify = ()=>{

  //   setNotifi(true);
  //   setMobileNotifi(true)
  //   // setClick(true);
  //   setSearch(false);
  //   setDark(true)

  // }

  const close_notifi = ()=>{
    
    // setDark(false)
     setNotifi(false)
     setClick(false)
    //  setMobileNotifi(false)
   
    console.log("true")
  }

  const show_sidebar = ()=>{
    setMobile(true)

  }

  const close_sidebar = ()=>{
    setMobile(false)
  }

  const show_search = ()=>{
    setNotifi(false)
    setSearch(true);
    setClick(true);

  }
  const close_search = ()=>{
    setSearch(false)

  }
  const close_click = ()=>{
    setNotifi(false)
    setSearch(false)
    setClick(false)
  }


  return (
    <div className="container-fluid px-0 position-relative " id="a">

      {click == true && <ClickComponent close={close_click}/>}
      {/* {dark == true && <DarkOverlay close={close_notifi}/>} */}
      {/* <Modal show={show}/> */}
      {mobile==true && <SideMenuBarMobile close={close_sidebar} showHome={show_home} showAllPodcasts = {show_all_podcasts} showNewPodcasts={show_new_podcasts} showPopPodcasts={show_pop_podcasts} showSearch={show_search} showSignIn = {show_sign_in}/>}
      {signIn == true && <SignIn close={close_sign_up} showSignUp={show_sign_up}/>}
      {signUp == true && <SignUp close={close_sign_up} showSignIn = {show_sign_in}/>}
      <div className="row g-0 ">
      
        <div className="col-lg-2 vh-100 d-none d-lg-block sticky-top  ">
          <SideMenuBar showHome={show_home} showSearch={show_search}   closeNotifi = {close_notifi}/>
        </div>
        <div className="col-lg-10 col-12 position-relative">
           <div className="row sticky-top  g-0 ">
           
            <Navbar
              showAllPodcasts={show_all_podcasts}
              showNewPodcasts={show_new_podcasts}
              showPopPodcasts={show_pop_podcasts}
              showSignUp={show_sign_up}
              showSignIn = {show_sign_in}
              showModal={show_modal}
              showNotifi = {show_notifi}
              // mobileNotifi = {mobile_notify}
             
              showSideBar = {show_sidebar}
            />
           {notifi==true && <NotificationMobile close={close_notifi}/>} 


          </div>

          
          <div className="row pt-2 gx-0 overflow-hidden">
            <div className="col-lg-7 col-12">
              {popPodcasts == true && (
                <div className="row justify-content-center  gx-0">
                  <div className="col-lg-11 col-11 pt-1">
                    <PopularMusics />
                  </div>
                </div>
              )}
              {allPodcasts == true && (
                <div className="row justify-content-center  gx-0 ">
                  <div className="col-lg-11 col-11 pt-1">
                    <AllMusics />
                  </div>
                </div>
              )}
              {newPodcasts == true && (
                <div className="row justify-content-center gx-0">
                  <div className="col-lg-11 col-11 pt-1">
                    <NewMusics />
                  </div>
                </div>
              )}
              {home == true && (
                <div className="row justify-content-center  gx-0 ">
                  <div className="col-lg-11 col-11 pt-1 ">
                    <div className=" mb-2 hd">NOTICES</div>
                    <Slider />
                  </div>
                </div>
              )}
             {home==true && 
                <div className="row mt-3 mb-lg-5  gx-0  d-lg-none justify-content-center">
                <div className="col-11 d-lg-none ">
                  <QuickSearch notifi={notifi} closeNotification={close_notifi} search={search}  closeSearch={close_search}/>
                </div>
                   </div> }
                  

                   {home==true && 
              <div className="row justify-content-center mt-3  pt-2 gx-0 d-lg-none ">
                  <div className="col-11 ">
                    <div className="row gx-0">
                         <div className="col-10 hd">
                         RECENT EPISODES
                         </div>
                         <div className="col-2">
                        
                       <div className="btnd mb-2 d-flex justify-content-end"><button>SEE ALL</button></div> 
                        
                         </div>
                    </div>
                   
                    <RecentEpisodes />
                  </div>
                </div>}

                {/* {home ==true && <DarkOverlay/>} */}
                


              {home == true && (
                <div className="d-none d-lg-block">
                <div className="row  justify-content-center mt-3  pt-2 gx-0  ">
                  <div className="col-lg-11 ">
                    <div className="row gx-0">
                         <div className="col-10 hd">
                         RECENT EPISODES
                         </div>
                         <div className="col-2">
                        
                       <div className="btnd mb-2 d-flex justify-content-end"><button>SEE ALL</button></div> 
                        
                         </div>
                    </div>
                   
                    <RecentEpisodes />
                  </div>
                </div>
                </div>
              )}

              {home == true && (
                <div className="row justify-content-center pt-2 mt-3 gx-0">
                  <div className="col-lg-11 col-11 ">
                  <div className="row  gx-0">
                         <div className="col-10 hd">
                         RECENTLY ACTIVE CHANNELS
                         </div>
                         <div className="col-2">
                        
                       <div className="btnd mb-2  d-flex justify-content-end "><button>SEE ALL</button></div> 
                        
                         </div>
                    </div>
                    <RecentlyActiveChannels />
                  </div>
                </div>
              )}
            </div>

            <div className="col-lg-5 ">
              <div className="row  mb-4  gx-0 d-none d-lg-block mt-2">
                <div className="col-12">
                  <QuickSearch notifi={notifi} closeNotification={close_notifi} search={search}  closeSearch={close_search}/>
                </div>
              </div>

              <div className="row   gx-0 d-none d-lg-block">
                <div className="col-12 hd">
                  TRENDING EPISODES
                  <TrendingEpisodes />
                </div>
              </div>
            </div>
            
            


          </div>
        </div>
      </div>

     

    </div>
  );
}
