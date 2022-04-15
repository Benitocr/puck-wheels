import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div class="navbar">
            <div className="logo">
              <Link to="/Home">
           
              </Link>
            </div>
            <span className="login-btns">
              <button className="login-btn">
              <Link to="/wishList">
                Wish List
              </Link>
              </button>
              <button className="login-btn">
                <Link to="/modelA">
                  Model 2023
                </Link>
              </button>
              <button className="login-btn">
                <Link to="/modelB">
                  Model 2022
                </Link>
              </button>
              <button className="login-btn">
              <Link to="/modelC">
                  Model 2021
                </Link>
              </button>
            </span>
          </div>
      )
    
    } else {
      return (
        <div className="navbar">
                <div className="logo"></div>        
                <span className="login-btns">
                <button className="login-btn">
                <Link to="/signup">
                  Signup
                </Link>
                </button>
                <button className="login-btn">
                <Link to="/login">
                  Login
                </Link>
                </button>
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

export default Nav;