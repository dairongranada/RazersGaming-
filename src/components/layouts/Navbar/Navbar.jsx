import React from 'react'
import './Navbar.css'
import GamingLogo from '../../../image/GamingLogo.png'
import $ from "jquery";



$(window).ready(function(){
    var heroHeight = $('#Hero').innerHeight();
    var top = heroHeight+'px';
    document.querySelector('#ShapeLeft').style.top = top;
  });
  
  $(window).resize(function(){
    var heroHeight = $('#Hero').innerHeight();
    var top = heroHeight+'px';
    document.querySelector('#ShapeLeft').style.top = top;
  });
  
  
  window.addEventListener("scroll", function(){
    if(window.scrollY>=10){
        document.querySelector('#Header').style.backgroundColor = 'rgba(0,0,0,0.7)';
        document.querySelector('#Header').style.backdropFilter = 'blur(10px)';
    }else{
        document.querySelector('#Header').style.backgroundColor = 'transparent';
        document.querySelector('#Header').style.backdropFilter = 'none';
    }
  });
  
export const Navbar = () => (
    <>
        <div className="headerSection" id="Header">
            <div className="logoContainer">
                <img src='{}'  alt="" className="logo"/>
            </div>
            <div className="menuContainer">
                <span className="menuItem"><a href="#" className="menuItemLink">Home</a></span>
                <span className="menuItem"><a href="#" className="menuItemLink">Games</a></span>
                <span className="menuItem"><a href="#" className="menuItemLink">News</a></span>
                <span className="menuItem"><a href="#" className="menuItemLink">log in</a></span>
                <span className="menuItem"><a href="#" className="menuItemLink">Sign up</a></span>
            </div>

            <div className="hamburguerMenu">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div> 
    </>
)
