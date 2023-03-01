import React from "react";
import "../styles/signup.css";
import Frame from "../images/Frame.png";
import Close from "../icons/Close-Square.png";
import Google from "../icons/Google1.png";
import Facebook from "../icons/Facebook.png";
import Apple from "../icons/Google1.png";

export default function (props) {
  const close = props.close;
  return (
    <div class="overlay">
      <div class="sign-up-container">
       <div class="mobile-button-container d-lg-none">
              <img
                src={Close}
                onClick={close}
                style={{ cursor: "pointer" }}
              /> </div>
        <div class="sign-up-image-container">
          <img src={Frame} />
        </div>
        <div class="field-container">
          <div class="heading">Sign Up</div>
          {/* <div class="data-container"> */}
          <input
            type="text"
            placeholder="Full Name"
            class="input-field"
          ></input>
          <input type="text" placeholder="Email" class="input-field"></input>
          <input
            type="password"
            placeholder="Password"
            class="input-field"
          ></input>
          <input
            type="password"
            placeholder="Confirm Pasword"
            class="input-field"
          ></input>
          <div class="subscribe">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;subscribe to our newsletter
          </div>

          <div class="sign-up-button">
            <button
            class="sign-up-btn"
              
            >
              Sign Up
            </button>
          </div>
          <div class="login-link">

            Already have an account? &nbsp; <a style={{color:"black",cursor:"pointer"}} onClick={props.showSignIn}>  Sign in</a>

          </div>

          {/* </div> */}
        </div>
        <div class="link-container">
          <div class="line-container">
            <div class="line"></div>
            <div class="or"> or</div>
            <div class="line"></div>
          </div>
          <div class="other-container">

            <div className="d-none d-lg-block">
            <div class="button-container">
              <img
                src={Close}
                onClick={props.close}
                style={{ cursor: "pointer" }}
              />
              
            </div>
            </div>
            <button class="link-button"><img src={Google}/> Sign Up with Google</button>
            <button class="link-button"><img src={Facebook}/>Sign Up with Facebook</button>
          <button class="link-button"><img src={Apple}/>Sign Up with Apple</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
