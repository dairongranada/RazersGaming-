import './SingUp.css';
import React, { useEffect, useState } from "react";


export const SingUp = () => {

const [first, setfirst] = useState()



  // $(".textbox input").focusout(function(){
  //   if($(this).val() == ""){
  //     $(this).siblings().removeClassName("hidden");
  //     $(this).css("background","#554343");
  //   }else{
  //     $(this).siblings().addClassName("hidden");
  //     $(this).css("background","#484848");
  //   }
  // });
  
  // $(".textbox input").keyup(function(){
  //   var inputs = $(".textbox input");
  //   if(inputs[0].value != "" && inputs[1].value){
  //     $(".login-btn").attr("disabled",false);
  //     $(".login-btn").addClassName("active");
  //   }else{
  //     $(".login-btn").attr("disabled",true);
  //     $(".login-btn").removeClassName("active");
  //   }
  // }); 


  return (
    <>
    <div className="backgroundContainer"></div>

    <div className='Login-content'>
      <div className="login-form">
          <div className="logo"><span>Team Razers</span></div>

        <h6>Sign In</h6>

        <form action="">
          <div className="textbox">
            <input type="text" placeholder="Username Or Email" />
            <span className="check-message hidden">Required</span>
          </div>

          <div className="textbox">
            <input type="password" placeholder="Password" />
            <span className="check-message hidden">Required</span>
          </div>

          <div className="options">
            <label className="remember-me">
              <span className="checkbox">
                <input type="checkbox" />
                <span className="checked"></span>
              </span>
              Remember me
            </label>
            <a href="#">Forgot Your Password</a>
          </div>

          <input type="submit" value="Log In Now" className="login-btn" />

          <div className="privacy-link">
            <a href="#">Privacy Policy</a>
          </div>
        </form>

        <div className="dont-have-account">
          Don't have an Razers Games account?
        </div>
      </div>
    </div>
          
    </>
  )
}