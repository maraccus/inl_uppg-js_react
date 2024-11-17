import React from 'react'

const Hero = () => {
  return (
    <section className="section-hero">

                
        <div className="hero-top flex-row flex-sb">

            <div className="section-hero-info">

                <div>
                    <div>
                        <h1>Manage All Your Money In One App</h1>
                        <p>We offer you a new generation of the mobile banking.<br/>
                            Save, spend & manage money in your pocket.</p>
                    </div>
                    <div className="market-btns">
                        <img className="storebutton" src="./images/appstore.svg" alt="" />
                        <img className="storebutton googleplay" src="./images/googleplay.svg" alt="" />
                    </div>
                </div>

                <div className="header-showmore">
                    <div className="faq-dropdown"><i className="fa-solid fa-chevron-down"></i></div>
                    <p className="p-s">Discover more</p>
                </div>

            </div>

            <div className="section-hero-img">
                <img src="./images/header-phones.png" alt="" />
            </div>

        </div>

    </section>
  )
}

export default Hero