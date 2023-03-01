import React from "react";
import ceycast from "../icons/ceycastLogo.png";
import SideMenuBarItem from "./SideMenuBarItem";
import house from "../icons/house.png";
import "../styles/sidemenubar.css";
import mike from "../icons/microphone.png";
import Google from "../icons/google.png";
import Huawei from "../icons/huawei.png";
import FB from "../icons/fb.png";
import RSS from "../icons/rss.png";
import INSTA from "../icons/insta.png";
import Plus from "../icons/plus.png"
import fav from "../icons/favourite.png"
import about from "../icons/about.png"

export default function SideMenuBar(props) {
  const showHome = props.showHome;

  return (
    <div className="side-menu-bar position-relative">
      <div
        className="row d-flex justify-content-center pt-3 "
        style={{ paddingBottom: "10vh" }}
      >
        <img src={ceycast} style={{ width: "60%" }} />
      </div>

      <div className="col-12 d-flex flex-row-reverse g-0">
        <SideMenuBarItem img={house} item={"Home"} function={showHome} />
      </div>
      <div className="col-12 d-flex flex-row-reverse gx-0">
        <SideMenuBarItem img={mike} item={"Podcasts"} />
      </div>
      <div className="col-12 d-flex flex-row-reverse gx-0">
        <SideMenuBarItem img={fav} item={"Favourite"} function={props.closeNotifi}/>
      </div>
      <div className="col-12 d-flex flex-row-reverse gx-0">
        <SideMenuBarItem img={about} item={"About"} function={props.showSearch} />
      </div>
      <div className="col-12 d-flex flex-row-reverse  ">
        <SideMenuBarItem img={Plus} item={"Add New Podcasts"} />
      </div>

      <div className="row  " style={{ marginTop: "10vh" }}>
        <div className="col-1"></div>
        <div className="col-10">
          <hr></hr>
        </div>

        <div className="col-1"></div>
      </div>

      <div className="row gx-0">
        <div className="col-1  "></div>
        <div className="col-5  ">
          <img src={Google} style={{ width: "100%" }} />
        </div>
        <div className="col-5 ">
          <img src={Huawei} style={{ width: "100%" }} />
        </div>
        <div className="col-1  "></div>
      </div>

      <div className="row">
        <div className="col-3 "></div>
        <div className="col-6 ">
          <img src={Google} style={{ width: "100%" }} />
        </div>
        <div className="col-3 "></div>
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
  );
}
