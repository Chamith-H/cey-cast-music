import React from "react";
import Erosh from "../images/EroshPods1.png";
import '../styles/trendingepisodes.css'
import play from '../icons/Group.png'
import clock from "../icons/clock.png";
import time from "../icons/time.png";
import music from '../images/music.jpg'

export default function TrendingEpisodes() {
  return (
    <div className="row gx-0">
      <div className="col-11">
        <div class="card mt-1 border-0 box position-relative" style={{ width: "100%" }}>
          <div class="row no-gutters gx-0">
            <div class="col-sm-2 col-lg-3 p-2">
              <img class="card-img  img-trending" src={music} alt="Suresh Dasari Card" style={{width:"100%",borderRadius:"20px"}}/>
            </div>
            <div class="col-sm-10 col-lg-9">
              <div class="card-body  p-0 pt-2 ">
                <div class=" trending-head p-0 mb-0 mt-xxl-1 mb-xxl-1">The Key Of Success</div>
                <div class=" trending-text p-0 mb-xxl-2">
                 is a founder and technical lead 
                </div>
                <div>
                    <img src={clock} className="p-0" />
                    <img src={time} className="px-2 p-0" />
                  </div>
                <img src={play} className='position-absolute play-icon-trending  ' style={{width:"3rem",outline:"none"}}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-1 border-0 box position-relative" style={{ width: "100%" }}>
          <div class="row no-gutters gx-0">
            <div class="col-sm-2 col-lg-3 p-2">
              <img class="card-img  img-trending" src={music} alt="Suresh Dasari Card" style={{width:"100%",borderRadius:"20px"}}/>
            </div>
            <div class="col-sm-10 col-lg-9">
              <div class="card-body  p-0 pt-2 ">
                <div class=" trending-head p-0 mb-0  mt-xxl-1 mb-xxl-1">The Key Of Success</div>
                <div class=" trending-text p-0 mb-xxl-2">
                 is a founder and technical lead 
                </div>
                <div>
                    <img src={clock} className="p-0" />
                    <img src={time} className="px-2 p-0" />
                  </div>
                <img src={play} className='position-absolute play-icon-trending  ' style={{width:"3rem",outline:"none"}}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-1 border-0 box position-relative" style={{ width: "100%" }}>
          <div class="row no-gutters gx-0">
            <div class="col-sm-2 col-lg-3 p-2">
              <img class="card-img  img-trending" src={music} alt="Suresh Dasari Card" style={{width:"100%",borderRadius:"20px"}}/>
            </div>
            <div class="col-sm-10 col-lg-9">
              <div class="card-body  p-0 pt-2 ">
                <div class=" trending-head p-0 mb-0 mt-xxl-1 mb-xxl-1">The Key Of Success</div>
                <div class=" trending-text p-0 mb-xxl-2">
                 is a founder and technical lead 
                </div>
                <div>
                    <img src={clock} className="p-0" />
                    <img src={time} className="px-2 p-0" />
                  </div>
                <img src={play} className='position-absolute play-icon-trending  ' style={{width:"3rem",outline:"none"}}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-1 border-0 box position-relative" style={{ width: "100%" }}>
          <div class="row no-gutters gx-0">
            <div class="col-sm-2 col-lg-3 p-2">
              <img class="card-img  img-trending" src={music} alt="Suresh Dasari Card" style={{width:"100%",borderRadius:"20px"}}/>
            </div>
            <div class="col-sm-10 col-lg-9">
              <div class="card-body p-0 pt-2 ">
                <div class=" trending-head p-0 mb-0 mt-xxl-1 mb-xxl-1">The Key Of Success</div>
                <div class=" trending-text p-0 mb-xxl-2">
                 is a founder and technical lead 
                </div>
                <div>
                    <img src={clock} className="p-0" />
                    <img src={time} className="px-2 p-0" />
                  </div>
                <img src={play} className='position-absolute play-icon-trending  ' style={{width:"3rem",outline:"none"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
