import './PageHome.css';
import React, { useEffect, useState } from "react";
import $ from "jquery";

import GamingLogo from '../../../image/GamingLogo.png'
import ShapeWebsite from '../../../image/ShapeWebsite.png'
import Counter from '../../../image/Teams/Counter.jpg'
import LogoCSGO from '../../../image/Teams/Logo CSGO.png'
import Valorant from '../../../image/Teams/Valorant.jpg'
import ValorantBlanco from '../../../image/Teams/Logo Valorant Blanco.png'
import VideoBackground from '../../../image/VideoBackground.mp4'






export const PageHome = () => {
  
  useEffect(() => {
    $('#change_status_vol ').html(`<span id='change_status_vol'>Muted <i className="fa-solid fa-volume-xmark"></i></span>`)
  }, [])


 
function changeStatus() {

}



  return (
    <>
      <div className="backgroundContainer"></div>
      <section style={{marginLeft:"5rem"}}>
        <div className="heroSection" id="Hero">
          <video playsInline autoPlay loop muted  src={VideoBackground} className="backgroundVideo"></video>
          <div className="leftSide">
            <div className="heroTextContainer">
              <h1 className="mainTextHero">Game Changing</h1>
              <h2 className="secondTextHero">Make your gaming experience reach another level with us.</h2>
              <div style={{display:"flex", gap:"20px" }}>
                  <a href="/sing/in" className="buttonHero">Sign in</a>
              </div>
            </div>
          </div>
          <div onClick={changeStatus} className="Volume">
                <span  id='change_status_vol'><i className="fa-solid fa-volume-high"></i> </span>
            </div>
        </div>

        <img src={ShapeWebsite} style={{marginLeft:"3.5rem"}} alt="" className="shapeBackground" id="ShapeLeft" />
        <div className="teamsSection">
          <div className="teamsSectionContainer">
            <h2 className="teamsSectionTitle">GAMES</h2>
            <div className="teamsContainer">
              <div className="teamContainer">
                <img src={Counter} alt="" className="teamBackgroundImage" style={{ height: "330px" }} />
                <img src={LogoCSGO} alt="" className="gameLogo" />
              </div>
              <div className="teamContainer">
                <img src={Valorant} alt="" className="teamBackgroundImage" style={{ height: "100%", width: "100%" }} />
                <img src={ValorantBlanco} alt="" className="gameLogo" />
              </div>
            </div>
          </div>
          
        </div>


        <div className="newsSectionPass">

          <div className="container">
            <div className="card_box">
              <span className='card_box_Premium' ></span>
                <div className='card_box_buy'>
                  <div className='card_box_advantages'>
                    <p><i className="fa-sharp fa-solid fa-check-to-slot"></i> Early access </p>
                    <p style={{padding: "25px 9px 22px 21px", fontSize: "13px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugit esse animi doloribus id! Autem lab, libero quae.</p>
                  </div>
                  <div className='card_box_price'>
                  <h1>$30.000 COP</h1>
                  <button style={{border:"none", marginTop:"1rem" }} className='buttonHero' >Buy premium pass</button>
                </div>
                </div>
            </div>
          </div>

          <div className="container">
            <div className="card_box">
            <span className='card_box_Premium'></span>
              <div className='card_box_buy'>
                <div className='card_box_advantages'>
                  <p><i className="fa-sharp fa-solid fa-check-to-slot"></i> Early access </p>
                  <p style={{padding: "25px 9px 22px 21px", fontSize: "13px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugit esse animi doloribus id! Autem lab, libero quae.</p>
                  </div>
                  <div className='card_box_price'>
                    <h1>$20.000 COP</h1>
                  <button style={{border:"none", marginTop:"1rem" }} className='buttonHero' >Buy premium pass</button>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="card_box">
            <span className='card_box_Basic' ></span>
              <div className='card_box_buy'>
                <div className='card_box_advantages'>
                  <p><i className="fa-sharp fa-solid fa-check-to-slot"></i> Early access </p>
                  <p style={{padding: "25px 9px 22px 21px", fontSize: "13px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugit esse animi doloribus id! Autem lab, libero quae.</p>
                  </div>
                  <div className='card_box_price'>
                    <h1>$10.000 COP</h1>
                  <button style={{border:"none", marginTop:"1rem" }} className='buttonHero' >Buy basic pass</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>


  );
}
