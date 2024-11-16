import React from 'react'

const footer = () => {

  return (
    <footer className="container">
        <div className="section-newsletter bg-light">
            <div className="section-newsletter-text flex-h flex-sb">
                <img src="./images/bell.png" alt="" />
                <h4>Subscribe to our newsletter to stay <br/>informed about latest updates</h4>
            </div>
            <div className="section-newsletter-box">
                <div className="newsletter-inputfield">
                    <i className="fa-regular fa-envelope"></i>
                    <input type="text" placeholder="Your Email" className="newsletter-input" />
                </div>
                <button className="btn btn-primary">Subscribe</button>
            </div>
        </div>
        <div className="footer">
            <p className="p-s">© 2024 Silicon. All rights reserved. Uppgift av <b>Marcus Johansson, WIN24</b> @ <b>EC Utbildning, Helsingborg</b></p>
        </div>
    </footer>
  )

}

export default footer