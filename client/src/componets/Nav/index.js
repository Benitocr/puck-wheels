import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

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

export default Nav;