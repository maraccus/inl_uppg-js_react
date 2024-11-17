import React, { useState } from 'react'
import Features2Card from './Features2Card'

const Features2 = () => {

    const [feature2Items, setFeature2Items] = useState([
        { imageUrl: "./images/features-icn-easypayments.png", imageAlt: "Bild", text: "Manage your payments online. Mollis congue egestas egestas fermentum fames." },
        { imageUrl: "./images/features-icn-cashback.png", imageAlt: "Bild", text: "A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.." },
        
    ])

  return (

    <div className="section-features2 spacer-t spacer-b container">

        <div className="section-features2-section">

            <div className="features-card spacer-t">
                <h2 className="heading2">Make your money<br/> transfer simple and clear</h2>
                <ul>
                    <li>
                        <p><i className="fa-regular fa-circle-check clr-primary"></i>Banking transactions are free for you</p>
                    </li>
                    <li>
                        <p><i className="fa-regular fa-circle-check clr-primary"></i>No monthly cash commission</p>
                    </li>
                    <li>
                        <p><i className="fa-regular fa-circle-check clr-primary"></i>Manage payments and transactions online</p>
                    </li>
                </ul>
                <button className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right button-icon-r"></i></button>
            </div>
            
            <img src="./images/features2-1.png" alt="" />

        </div>

        <div className="section-features2-section spacer-t">
            
            <img src="./images/features2-2.png" alt="" />

            <div className="features-card spacer-t4">
                <h2>Receive payment from international bank details</h2>
                <div className="flex-h spacer-t1">
                    
                    {
                        feature2Items.map((item, index) => (<Features2Card key={index} item={item} />))
                    }

                </div>
                <button className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right button-icon-r"></i></button>
            </div>

        </div>
    </div>
  )
}

export default Features2