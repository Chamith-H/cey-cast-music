import React from "react";
import Erosh from "../images/EroshPods1.png";
import '../styles/recentepisodes.css';
import play from '../icons/Group.png'
import music from '../images/music.jpg'

export default function RecentEpisodes() {
  return (
    <div className="row ">
      
      
        <div className="col-lg-3 col-4 ">
          <div class="card  box border-0 ">
            <img src={music} class="card-img-top " alt="..." />
            {/* <img src={play} className='position-absolute play-icon  ' style={{width:"30%",outline:"none"}}/> */}
            
            
            <div class="card-body pt-1 border-0 " >

             
              <h5 class="card-title title-font  ">Card title</h5>
              <p class="card-text card-body-font ">
                Some quick example text to build on the card title and make up
               
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-4">
        <div class="card  box border-0 ">
            <img src={music} class="card-img-top " alt="..." />
            {/* <img src={play} className='position-absolute play-icon  ' style={{width:"30%",outline:"none"}}/> */}
            
            
            <div class="card-body pt-1 border-0 " >

             
              <h5 class="card-title title-font  ">Card title</h5>
              <p class="card-text card-body-font ">
                Some quick example text to build on the card title and make up
               
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-4">
        <div class="card  box border-0 ">
            <img src={music} class="card-img-top " alt="..." />
            {/* <img src={play} className='position-absolute play-icon  ' style={{width:"30%",outline:"none"}}/> */}
            
            
            <div class="card-body pt-1 border-0 " >

             
              <h5 class="card-title title-font  ">Card title</h5>
              <p class="card-text card-body-font ">
                Some quick example text to build on the card title and make up
               
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-lg-block d-none">
        <div class="card  box border-0 ">
            <img src={music} class="card-img-top " alt="..." />
            {/* <img src={play} className='position-absolute play-icon  ' style={{width:"30%",outline:"none"}}/> */}
            
            
            <div class="card-body pt-1 border-0 " >

             
              <h5 class="card-title title-font  ">Card title</h5>
              <p class="card-text card-body-font ">
                Some quick example text to build on the card title and make up
               
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
}
