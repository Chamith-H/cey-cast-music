import React from "react";
import Erosh from "../images/EroshPods1.png";
import "../styles/recentlyactive.css";
import Epi from '../icons/epi.png'
import play from '../icons/play.jpg'
import music from '../images/music.jpg'

export default function RecentlyActiveChannels() {
  return (
    <div className="row gx-0  ">
      <div className="col-lg-6 ">
        <div class=" card mx-1 mt-1 border-0 box  ">
          <div class="row no-gutters gx-0 ">
            <div class="col-lg-4 col-3   p-2 ">
              <img
                class="card-img recent-active-img "
                src={music}
                alt="Suresh Dasari Card"
                style={{ width: "100%", borderRadius: "15px" }}
              />
              
            </div>
            <div class="col-lg-8 col-9  d-flex align-items-center">
              <div class="card-body  p-0">
                <h5 class="card-title card-headings-recent  p-0 mb-0 mt-lg-0 mt-sm-0   ">
                  ILLUMINATION
                </h5>
                <p class="card-text card-text-recent  mb-2 mb-lg-0">is a founder and technical lead</p>
                <div className="card-text-epi"> <img className=" card-icon" src={Epi} />&nbsp;&nbsp;30 Episodes</div> 
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
      <div class=" card mx-1 mt-1 border-0 box  ">
          <div class="row no-gutters gx-0 ">
            <div class="col-lg-4 col-3   p-2">
              <img
                class="card-img recent-active-img "
                src={music}
                alt="Suresh Dasari Card"
                style={{ width: "100%", borderRadius: "15px" }}
              />
            </div>
            <div class="col-lg-8 col-9  d-flex align-items-center">
              <div class="card-body  p-0">
                <h5 class="card-title card-headings-recent  p-0 mb-0 mt-lg-0 mt-sm-3   ">
                  ILLUMINATION
                </h5>
                <p class="card-text card-text-recent  mb-2 mb-lg-0">is a founder and technical lead</p>
                <div className="card-text-epi"> <img className=" card-icon" src={Epi} />&nbsp;&nbsp;30 Episodes</div> 
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
      <div class=" card mx-1 mt-1 border-0 box  ">
          <div class="row no-gutters gx-0 ">
            <div class="col-lg-4 col-3   p-2">
              <img
                class="card-img recent-active-img "
                src={music}
                alt="Suresh Dasari Card"
                style={{ width: "100%", borderRadius: "15px" }}
              />
            </div>
            <div class="col-lg-8 col-9  d-flex align-items-center">
              <div class="card-body  p-0">
                <h5 class="card-title card-headings-recent  p-0 mb-0 mt-lg-0 mt-sm-3   ">
                  ILLUMINATION
                </h5>
                <p class="card-text card-text-recent  mb-2 mb-lg-0">is a founder and technical lead</p>
                <div className="card-text-epi"> <img className=" card-icon" src={Epi} />&nbsp;&nbsp;30 Episodes</div> 
                
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <div className="col-lg-6">
      <div class=" card mx-1 mt-1 border-0 box  ">
          <div class="row no-gutters gx-0 ">
            <div class="col-lg-4 col-3   p-2">
              <img
                class="card-img recent-active-img "
                src={music}
                alt="Suresh Dasari Card"
                style={{ width: "100%", borderRadius: "15px" }}
              />
              
            </div>
            <div class="col-lg-8 col-9  d-flex align-items-center">
              <div class="card-body  p-0">
                <h5 class="card-title card-headings-recent  p-0 mb-0 mt-lg-0 mt-sm-3   ">
                  ILLUMINATION
                </h5>
                <p class="card-text card-text-recent  mb-2 mb-lg-0">is a founder and technical lead</p>
                <div className="card-text-epi"> <img className=" card-icon" src={Epi} />&nbsp;&nbsp;30 Episodes</div> 
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



{/* <div class=" card mx-1 mt-1 border-0 box">
          <div class="row no-gutters">
            <div class="col-sm-4 ">
              <img
                class="card-img m-2 recent-active-img"
                src={Erosh}
                alt="Suresh Dasari Card"
                style={{ width: "5vw", borderRadius: "15px" }}
              />
            </div>
            <div class="col-sm-8">
              <div class="card-body ">
                <h5 class="card-title card-headings-recent p-0 mb-0">
                  Suresh Dasari
                </h5>
                <p class="card-text ">is a founder and technical lead</p>
                
              </div>
            </div>
          </div>
        </div> */}