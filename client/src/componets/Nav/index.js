import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div class="navbar">
          <div className="logo">
            <Link to="/"></Link>
          </div>
          <span className="login-btns">
            <Link to="/wishList">
              <button className="login-btn">Wish List</button>
            </Link>

              <Link to="/modelA"><button className="login-btn">Model 2023</button></Link>
              <Link to="/modelB"> <button className="login-btn">Model 2022</button></Link>
              <Link to="/modelC"> <button className="login-btn">Model 2021 </button></Link>
         
          </span>
        </div>
      );
    
    } else {
      return (
        <div className="navbar">
          <div className="logo"></div>
          <span className="login-btns">
            <Link to="/signup">
              <button className="login-btn"> Signup</button>
            </Link>

            <Link to="/login">
              <button className="login-btn">Login</button>
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