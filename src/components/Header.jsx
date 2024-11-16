import React from 'react'

const Header = () => {
  return (
    
    <header className="bg-gradient">

        <div className="container ">

            <div className="section-hero">

                <nav>
                    <div className="navbar">
                        <div className="navbar-left flex-center-v">
                            <a href="#"><img src="assets/nav-logo.svg" alt="" /></a>
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
                </nav>
                
                <div className="hero-top flex-row flex-sb">

                    <div className="section-hero-info">

                        <div>
                            <div>
                                <h1>Manage All Your Money In One App</h1>
                                <p>We offer you a new generation of the mobile banking.<br/>
                                    Save, spend & manage money in your pocket.</p>
                            </div>
                            <div className="market-btns">
                                <img className="storebutton" src="assets/appstore.svg" alt="" />
                                <img className="storebutton googleplay" src="assets/googleplay.svg" alt="" />
                            </div>
                        </div>

                        <div className="header-showmore">
                            <div className="faq-dropdown"><i className="fa-solid fa-chevron-down"></i></div>
                            <p className="p-s">Discover more</p>
                        </div>

                    </div>

                    <div className="section-hero-img">
                        <img src="assets/header-phones.png" alt="" />
                    </div>

                </div>

            </div>
        
        </div>

    </header>

  )
}

export default Header