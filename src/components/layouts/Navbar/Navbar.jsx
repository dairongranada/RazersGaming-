import React, { useState } from 'react'
import './Navbar.css'

import { useAuth } from '../../../context/authContext' 
import GamingLogo from '../../../image/GamingLogo.png'


export const Navbar = () => {

  const [sidebarNav, setSidebarnav] = useState("close")
    const OpenMenu = () => {setSidebarnav("showMenu")}
    const CloseMenu = () => {setSidebarnav("close")}


    const user  = useAuth()  //utilizar para traer info

  return (
    <>
      <div className={`sidebar ${sidebarNav}`}>
        <div className="logo-details">
          
          {sidebarNav == "close" &&
            <i onClick={OpenMenu} className='bx bx-menu' style={{cursor:"pointer"}} ></i>
          }

          {sidebarNav == "showMenu" &&
            <i onClick={CloseMenu} className='bx bx-menu' style={{cursor:"pointer"}} ></i>
          }
          <span className="logo_name">RAZERS GAMING</span>
        </div>

      <ul className="nav-links">
        <li>
          <a href="/">
            <i className='bx bx-home-circle' ></i>
            <span className="link_name">Home</span>
          </a>
          <ul className="sub-menu blank">
            <li><a className="link_name" href="/">Home</a></li>
          </ul>
        </li>


        <li>
          <ul className="sub-menu blank">
            <li><a className="link_name" href="#">Category</a></li>
          </ul>
        </li>

          <li>
            <div className="iocn-link">
              <a href="#">
                <i className='bx bx-collection' ></i>
                <span className="link_name">Category</span>
              </a>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>

            <ul className="sub-menu">
              <li><a className="link_name" href="#">Category</a></li>
              <li><a href="#">HTML & CSS</a></li>
              <li><a href="#">JavaScript</a></li>
              <li><a href="#">PHP & MySQL</a></li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i className='bx bx-line-chart' ></i>
              <span className="link_name">Chart</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Chart</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-cog' ></i>
              <span className="link_name">Setting</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Setting</a></li>
            </ul>
          </li>
        <li>

          <li>
            <a href="/Views/Admin/">
              <i className='bx bx-line-chart' ></i>
              <span className="link_name">Admin</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Admin</a></li>
            </ul>
          </li>



        <div className="profile-details">
          <div className="profile-content">
            <img src={GamingLogo} alt={GamingLogo} />
          </div>
          <div className="name-job">
            <div className="profile_name"></div>
            <div className="job">Web Desginer</div>
          </div>
          <i className='bx bx-log-out' ></i>
        </div>

      </li>
    </ul>
      </div>

    </>
  )
}
