import './SingUp.css';
import React, { useEffect, useState } from "react";
import 'boxicons'


export const SingUp = () => {

  const [changeS, setChanges] = useState()

  const iniciarSesionC =()=> {
    setChanges("active")
  }
  

  return (
    <>
    <div className='contRegAndLog'>
  
    <div className="container-form sign-up">
      <div className="welcome-back">
        <div className="message">
          <h2>Bienvenido a RAZERS GAMING</h2>
          <p>si ya tienes una cuenta por favor inicia sesion aqui</p>
          <button onClick={iniciarSesionC} className='sign-up-btn'>Iniciar Sesion</button>
        </div>
      </div>

      <form className='formulario'>
        <h2 className="create-account">Crear una cuenta</h2>
        <div className="iconos">
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
        <p className="cuenta-gratis">Crear una cuenta gratis</p>
        <input type="text" placeholder='Nombre'/>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Contraseña'/>
        <button className='RegisterButton'>Registrarse</button>
      </form>
    </div>

    <div className="container-form sign-in">
    <form className={`formulario`}>
        <h2 className="create-account">Iniciar Sesion</h2>
        <div className="iconos">
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
        <p className="cuenta-gratis">¿Aun no tienes una cuenta?</p>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Contraseña'/>
        <input type="button" placeholder='Iniciar Sesion'/>
        {/* <button>Iniciar Sesion</button> */}
      </form>
      <div className="welcome-back">
        <div className="message">
          <h2>Bienvenido de nuevo</h2>
          <p>si aun no tienes una cuenta por favor registrarse aqui aqui</p>
          <button className='sign-in-btn'>Iniciar Sesion</button>
        </div>
      </div>

      
    </div>

  </div>
  </>
  )
}
