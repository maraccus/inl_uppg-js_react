import React from 'react'
import ImageLogo from '../assets/images/nav-logo.svg'

const Navbar = () => {
  return (
  
    <div className="navbar">
        <div className="navbar-left flex-center-v">
            <a href="#"><img src={ImageLogo} alt="" /></a>
            <a href="#" className="navbar-text">Features</a>
        </div>

        <div className="navbar-right flex-center-v">

            <div className="darkmode-toggle">
                <p className="navbar-text navbar-text-darkmode">Dark Mode</p>
                <div className="darkmode-switch"></div>
                <span className="darkmode-slider"></span>
            </div>
            <button className="btn btn-primary btn-icon-nav"><i className="fa-light fa-user"></i>Sign in / up</button>
        </div>
    </div>

  )
}

export default Navbar