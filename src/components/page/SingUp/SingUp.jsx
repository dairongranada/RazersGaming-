import './SingUp.css';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../../context/authContext'
import { Alert } from "../../.././Helpers/Alert";

export const SingUp = () => {


  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });






  return (
    <>
    <div className="backgroundContainer"></div>

    <div className='Login-content'>
      <div className="login-form">
          <div className="logo"><span>Team Razers</span></div>

        <h6>Sign In</h6>

        <form onSubmit={handleSubmit} >
          <div className="textbox">
            <input 
              type="email" 
              placeholder="Username Or Email" 
              name="email"
              id="email"
              onChange={handleChange}
            />
            <span className="check-message hidden">Required</span>
          </div>

          <div className="textbox">
            <input 
              type="password" 
              placeholder="Password"
              name="password"
              id="password"
              onChange={handleChange}
            />
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
          <span className='spanError'> 
            {error && <Alert message={"Error: Incorrect Email or Password"} />}
          </span>
          <button type='submit' value="Log In Now" className="login-btn" >Log In Now</button>

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