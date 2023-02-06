import React, { useState } from 'react'
import './Navbar.css'
import GamingLogo from '../../../image/GamingLogo.png'

export const Navbar = () => {
    const [sidebarNav, setSidebarnav] = useState("close")

    const OpenMenu = () => {
        setSidebarnav("showMenu")
    }
    const CloseMenu = () => {
        setSidebarnav("close")
    }

  return (
    <>
        <div className={`sidebar ${sidebarNav}`}>
    <div class="logo-details">
      {sidebarNav == "close" &&
        <i onClick={OpenMenu} className='bx bx-menu' style={{cursor:"pointer"}} ></i>
      }

      {sidebarNav == "showMenu" &&
        <i onClick={CloseMenu} className='bx bx-menu' style={{cursor:"pointer"}} ></i>
      }

      <span className="logo_name">RAZERS GAMING</span>
    </div>

    <ul class="nav-links">

      <li>
        <a href="/">
          <i class='bx bx-home-circle' ></i>
          <span class="link_name">Home</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="/">Home</a></li>
        </ul>
      </li>


      <li>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Category</a></li>
        </ul>
      </li>
      <li>
        <div class="iocn-link">
          <a href="#">
            <i class='bx bx-collection' ></i>
            <span class="link_name">Category</span>
          </a>
          <i class='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">Category</a></li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">PHP & MySQL</a></li>
        </ul>
      </li>

      <li>
        <a href="#">
          <i class='bx bx-line-chart' ></i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
      </li>

      <li>
        <a href="#">
          <i class='bx bx-cog' ></i>
          <span class="link_name">Setting</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Setting</a></li>
        </ul>
      </li>
      <li>



    <div class="profile-details">
      <div class="profile-content">
        <img src={GamingLogo} alt={GamingLogo} />
      </div>
      <div class="name-job">
        <div className="profile_name">Prem Shahi</div>
        <div className="job">Web Desginer</div>
      </div>
      <i class='bx bx-log-out' ></i>
    </div>


  </li>
</ul>
  </div>

    </>
  )
}
