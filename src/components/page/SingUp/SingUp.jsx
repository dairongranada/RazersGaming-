import './SingUp.css';
import React, { useEffect, useState } from "react";
import 'boxicons'


export const SingUp = () => {

  // const [changeS, setChanges] = useState()

  // const iniciarSesionC =()=> {
  //   setChanges("active")
  // }
  

  return (
    <>
      <div className='contRegAndLog'>
        
        {/* <div className="contInfotransL">

          <div className="contTitleInf">
            <h2>¿DO YOU ALREADY HAVE AN ACCOUNT?</h2>
          </div>

          <div className="contTextInf">
            <p>If you already have an account, you do not have to go through the
              Registration process, you must go to the login process with the data
              that you have previously registered by clicking on the following button
            </p>
          </div>

          <div className="contBtnLogTrans">
            <button className='BtnLogTrans'>go to login</button>
          </div>

        </div>

        <div className="contFormRegister">

          <div className="FormRegister">
            <h2>Register</h2>

            <div className="contIcons">

              <div className="border-icono">
                <box-icon type='logo' name='instagram'></box-icon>
              </div>

              <div className="border-icono">
                <box-icon type='logo' name='facebook-circle'></box-icon>
              </div>

              <div className="border-icono">
                <box-icon name='linkedin' type='logo' ></box-icon>
              </div>

            </div>

            <div className="contInpustForM">
              <div className="boxInput">
                <input type="text" placeholder='Full Name'/>
              </div>

              <div className="boxInput">
                <input type="email" placeholder='Email'/>
              </div>

              <div className="boxInput">
                <input type="password" placeholder='Password'/>
              </div>

            </div>

            <div className="contBtnForm">
              <button className='BtnForm'>Register</button>
            </div>

          </div>
        </div> */}






      <div className="contFormRegister">

        <div className="FormRegister">
          <h2>Login</h2>

          <div className="contIcons">

            <div className="border-icono">
              <box-icon type='logo' name='instagram'></box-icon>
            </div>

            <div className="border-icono">
              <box-icon type='logo' name='facebook-circle'></box-icon>
            </div>

            <div className="border-icono">
              <box-icon name='linkedin' type='logo' ></box-icon>
            </div>

          </div>

          <div className="contInpustForM">

            <div className="boxInput">
              <input type="email" placeholder='Email'/>
            </div>

            <div className="boxInput">
              <input type="password" placeholder='Password'/>
            </div>

          </div>

          <div className="contBtnForm">
            <button className='BtnForm'>Login</button>
          </div>

        </div>
        </div>

        <div className="contInfotransL">

          <div className="contTitleInf">
            <h2>¿Do not you have an account yet?</h2>
          </div>

          <div className="contTextInf">
            <p>If you do not have an account yet, you must complete the registration
              process to create it, and thus enjoy our entire website
            </p>
          </div>

          <div className="contBtnLogTrans">
            <button className='BtnLogTrans'>go sign up</button>
          </div>

        </div>


              
      </div>
    </>
  )
}