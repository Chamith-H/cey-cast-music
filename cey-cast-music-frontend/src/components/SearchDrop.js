import React, { useEffect, useRef } from "react";
import "../styles/searchdrop.css";
import Erosh from "../images/EroshPods1.png";
import play from "../icons/Group.png";
import clock from "../icons/clock.png";
import time from "../icons/time.png";

export default function (props) {
  const ref = useRef(null);

  useEffect(() => {
    const element = document.getElementById("overlay-search");
    element.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      console.log("click outside");
      setTimeout(() => {
        props.close();
      }, 500);
    } else {
      console.log("click inside");
    }
  };

  return (
    <div className="overlay-search" id="overlay-search">
      <div
        className="row  box box-no   mob gx-0 d-flex justify-content-center top "
        style={{
          width: "92%",
          height: "100px",
          height: "auto",
          backgroundColor: "white",
          //marginLeft: "10%",
          borderTopRightRadius: "5%",
          borderBottomLeftRadius: "5%",
          borderBottomRightRadius: "5%",
        }}
      >
        <div className="col-lg-11 pt-lg-4 border-0" ref={ref}>
          <div
            class="card mt-1 box border-0 "
            style={{ width: "100%", backgroundColor: "rgb(210, 210, 210)" }}
          >
            <div class="row gx-0">
              <div class="col-sm-2 p-2 col-lg-3 col-xl-2">
                <img
                  class="card-img"
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  // style={{  borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10 p-2 col-lg-9 col-xl-10">
                <div class="card-body p-0 ">
                  <div class=" p-0 m-0 search-h">The Key Of Success </div>
                  <div class="search-p p-t p-0">
                    is a founder and technical lead
                  </div>

                  <div>
                    <img src={clock} className="p-0" />
                    <img src={time} className="px-2 p-0" />
                  </div>

                  <img
                    src={play}
                    className="position-absolute play-icon-trending play"
                    style={{ width: "3rem", outline: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="card mt-1 box border-0 "
            style={{ width: "100%", backgroundColor: "rgb(210, 210, 210)" }}
          >
            <div class="row gx-0">
              <div class="col-sm-2 p-2 col-lg-3 col-xl-2">
                <img
                  class="card-img"
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  // style={{  borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10 p-2 col-lg-9 col-xl-10">
                <div class="card-body p-0 ">
                  <div class=" p-0 m-0 search-h">The Key Of Success </div>
                  <div class="search-p p-t p-0">
                    is a founder and technical lead
                  </div>

                  <div>
                    <img src={clock} className="p-0" />
                    <img src={time} className="px-2 p-0" />
                  </div>

                  <img
                    src={play}
                    className="position-absolute play-icon-trending play"
                    style={{ width: "3rem", outline: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>

          

          <div
            class="card mt-1 box border-0 "
            style={{ width: "100%", backgroundColor: "rgb(210, 210, 210)" }}
          >
            <div class="row gx-0">
              <div class="col-sm-2 p-2 col-lg-3 col-xl-2">
                <img
                  class="card-img"
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  // style={{  borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10 p-2 col-lg-9 col-xl-10">
                <div class="card-body p-0 ">
                  <div class=" p-0 m-0 search-h">The Key Of Success </div>
                  <div class="search-p p-t p-0">
                    is a founder and technical lead
                  </div>

                  <div>
                    <img src={clock} className="p-0" />
                    <img src={time} className="px-2 p-0" />
                  </div>

                  <img
                    src={play}
                    className="position-absolute play-icon-trending play"
                    style={{ width: "3rem", outline: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>


          <div
            class="card mt-1 box border-0 "
            style={{ width: "100%", backgroundColor: "rgb(210, 210, 210)" }}
          >
            <div class="row gx-0">
              <div class="col-sm-2 p-2 col-lg-3 col-xl-2">
                <img
                  class="card-img"
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  // style={{  borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10 p-2 col-lg-9 col-xl-10">
                <div class="card-body p-0 ">
                  <div class=" p-0 m-0 search-h">The Key Of Success </div>
                  <div class="search-p p-t p-0">
                    is a founder and technical lead
                  </div>

                  <div>
                    <img src={clock} className="p-0" />
                    <img src={time} className="px-2 p-0" />
                  </div>

                  <img
                    src={play}
                    className="position-absolute play-icon-trending play"
                    style={{ width: "3rem", outline: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="card mt-1 box border-0 "
            style={{ width: "100%", backgroundColor: "rgb(210, 210, 210)" }}
          >
            <div class="row gx-0">
              <div class="col-sm-2 p-2 col-lg-3 col-xl-2">
                <img
                  class="card-img"
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  // style={{  borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10 p-2 col-lg-9 col-xl-10">
                <div class="card-body p-0 ">
                  <div class=" p-0 m-0 search-h">The Key Of Success </div>
                  <div class="search-p p-t p-0">
                    is a founder and technical lead
                  </div>

                  <div>
                    <img src={clock} className="p-0" />
                    <img src={time} className="px-2 p-0" />
                  </div>

                  <img
                    src={play}
                    className="position-absolute play-icon-trending play"
                    style={{ width: "3rem", outline: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="card mt-1 box border-0 "
            style={{ width: "100%", backgroundColor: "rgb(210, 210, 210)" }}
          >
            <div class="row gx-0">
              <div class="col-sm-2 p-2 col-lg-3 col-xl-2">
                <img
                  class="card-img"
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  // style={{  borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10 p-2 col-lg-9 col-xl-10">
                <div class="card-body p-0 ">
                  <div class=" p-0 m-0 search-h">The Key Of Success </div>
                  <div class="search-p p-t p-0">
                    is a founder and technical lead
                  </div>

                  <div>
                    <img src={clock} className="p-0" />
                    <img src={time} className="px-2 p-0" />
                  </div>

                  <img
                    src={play}
                    className="position-absolute play-icon-trending play"
                    style={{ width: "3rem", outline: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="card mt-1 box border-0 mb-2"
            style={{ width: "100%", backgroundColor: "rgb(210, 210, 210)" }}
          >
            <div class="row gx-0">
              <div class="col-sm-2 p-2 col-lg-3 col-xl-2">
                <img
                  class="card-img"
                  src={Erosh}
                  alt="Suresh Dasari Card"
                  // style={{  borderRadius: "15px" }}
                />
              </div>
              <div class="col-sm-10 p-2 col-lg-9 col-xl-10">
                <div class="card-body p-0 ">
                  <div class=" p-0 m-0 search-h">The Key Of Success </div>
                  <div class="search-p p-t p-0">
                    is a founder and technical lead
                  </div>

                  <div>
                    <img src={clock} className="p-0" />
                    <img src={time} className="px-2 p-0" />
                  </div>

                  <img
                    src={play}
                    className="position-absolute play-icon-trending play"
                    style={{ width: "3rem", outline: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>

          

          
        </div>
      </div>
    </div>
  );
}
