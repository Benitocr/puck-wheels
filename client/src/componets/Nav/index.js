import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="navbar">
          <div className="logo">
            <Link to="/"></Link>
          </div>
          <span className="login-btns">
            <Link to="/wishList">
              <button className="login-btn">
                <span>Wish List</span>
              </button>
            </Link>

            <Link to="/modelA">
              <button className="login-btn">
                <span>Model 2023</span>
              </button>
            </Link>
            <Link to="/modelB">              
              <button className="login-btn">
                <span>Model 2022</span>
              </button>
            </Link>
            <Link to="/modelC">              
              <button className="login-btn">
                <span>Model 2021</span>
              </button>
            </Link>
            <Link to="/">              
              <button className="login-btn" onClick={() => Auth.logout()}>
              <span>
              Logout
            </span>
              </button>
            </Link>
          </span>
        </div>
      );
    
    } else {
      return (
        <div className="navbar">
          <div className="logo"></div>
          <span className="login-btns">
            <Link to="/signup">
              <button className="login-btn">
                <span>Signup</span>
              </button>
            </Link>

            <Link to="/login">
              <button className="login-btn">
                <span>Login</span>
              </button>
            </Link>
          </span>
        </div>
      );
    }
  }

  

  return (
    <header className="flex-row px-1">
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}


{/* <footer style={{ display: "flex", width: '100vw', backgroundColor: 'black', padding: '24px', justifyContent: 'center' }}>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', width: '80%'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>			
        <p style={{fontSize: '24px', color: 'white', marginBottom: '24px', fontWeight: 'bold'}}  href="" > </p>
        <a style={{color: 'grey', fontSize: '24px', textDecoration: 'none'}}href="" >Wish List  </a>
        <a style={{color: 'grey', fontSize: '24px', textDecoration: 'none'}} href="" >Model 2023</a>
        <a style={{color: 'grey', fontSize: '24px', textDecoration: 'none'}} href="" >Model 2022</a>
        <a style={{color: 'grey', fontSize: '24px', textDecoration: 'none'}} href="" >Model 2021</a>
        </div>
        </div>
        </footer> */}
        
    

export default Nav;