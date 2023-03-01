import React from "react";
import Notifications from "./Notifications";
import SearchIcon from "../icons/search.png";
import SearchDrop from "./SearchDrop";
import DarkOverlay from "./DarkOverlay";

export default function QuickSearch(props) {
  return (
    <div className="row justify-content-left pb-3 position-relative gx-0">
      <div className="col-lg-11 hd ">
        QUICK SEARCH

        <div className="row gx-0 mt-3">
          <div className="col-lg-2 col-1">
          
          <button class="search-btn"><img src={SearchIcon}/></button>
        
        
          </div>

          <div className="col-lg-10 col-11">
          <input type="text" class="search " />
          </div>

        </div>
        {/* <div class="input-group flex-nowrap pt-1 " >
          <span class="input-group-text" style={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",backgroundColor:"white",border:"none"}} id="addon-wrapping">
          <i class="fa fa-search" aria-hidden="true"></i>
          </span>
          <input
            type="text"
            class="form-control rounded-pil"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            style={{borderTopRightRadius:"20px",borderBottomRightRadius:"20px",border:"none"}}
          />
          
        </div> */}
        {props.notifi==true && <Notifications close={props.closeNotification} />} 
        {props.search == true && <SearchDrop close={props.closeSearch}/>}
         {/*     */}
         
      </div>
    </div>
  );
}
                                                       