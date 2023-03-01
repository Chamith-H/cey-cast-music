import React from "react";
import "../styles/signup.css";
import Frame from "../images/Frame.png";
import Close from "../icons/Close-Square.png";
import Google from "../icons/Googlec.png";
import Facebook from "../icons/Facebook.png";
import Apple from "../icons/Apple.png";

export default function (props) {
  const closeModal = props.closeModal;
  
  return (
    <div class="overlay">
      <div class="login-container">
      <div class="button-container d-lg-none">
              <img
                src={Close}
                onClick={props.close}
                style={{ cursor: "pointer" }}
              />
              
            </div>
        <div class="sign-up-image-container">
          <img src={Frame} />
        </div>
        <div class="field-container">
          <div class="heading">Sign In</div>
          {/* <div class="data-container"> */}

          <input type="text" placeholder="Email" class="input-field"></input>
          <input
            type="password"
            placeholder="Password"
            class="input-field"
          ></input>

          <div class="sign-up-button">
            <button
            onClick={ ()=>{console.log("done")}}
              // style={{
              //   width: "40%",
              //   borderRadius: "15px",
              //   marginTop: "20px",
              //   backgroundColor: "#30398C",
              //   border: "none",
              //   height: "30px",
              //   color: "white",
              // }}
              class="sign-up-btn"
            >
              Sign In
            </button>
          </div>

          <div class="login-link">

            Create your account! &nbsp; <a style={{color:"black",cursor:"pointer"}} onClick={props.showSignUp}>  Sign up</a>

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
            <div className=" d-none d-lg-block ">
            <div class="button-container ">
              <img
                src={Close}
                onClick={props.close}
                style={{ cursor: "pointer" }}
              />
              </div>
              
            </div>
            <button class="link-button"><img src={Google}/>&nbsp;Sign In with Google</button>
            <button class="link-button"><img src={Facebook}/>Sign In with Facebook</button>
          <button class="link-button"><img src={Apple}/>Sign In with Apple</button>
          </div>
          
       
          {/* <div class="button-container">
            <img
              src={Close}
              onClick={closeModal}
              style={{ cursor: "pointer" }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
