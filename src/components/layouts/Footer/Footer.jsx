import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <>
    <footer>
        <div>
            <div className='info_me' >
                <img src="data:image/jpeg;base64,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" alt="" />
                
                <div className='info_me_cell'>
                    <span> <i className="fa-solid fa-phone-volume"></i> <span style={{marginLeft:"5px" }} >+57 321 866 6262</span></span>
                    <span> <i className="fa-solid fa-envelope"></i> <span style={{marginLeft:"5px" }}>dairongranada21@gmail.com</span></span>
                </div>
            </div>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>Games</li>
                <li>News</li>
                <li>log in</li>
                <li>Sign up</li>
            </ul>
        </div>


        <div  className='redes_sociales' >
             
            <h5 style={{fontSize:"25px" }} >Social media</h5>
            <div className='reds_socials_icons'>
                <a href="https://github.com/dairongranada"> <i class="fa-brands fa-github"></i>  </a>
                <a href="https://instagram.com/dairongranadaa"> <i class="fa-brands fa-instagram"></i> </a>
                <a href="https://www.facebook.com/DAIRON.CG/"> <i class="fa-brands fa-facebook"></i> </a>
            </div>
        </div>


    </footer>
        <center>© Todos los derechos reservados - 2023  ( Dairon Granada ) </center>
    </>
  )
}
