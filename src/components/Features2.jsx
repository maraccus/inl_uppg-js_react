import React from 'react'

const Features2 = () => {
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
                    <div className="card-v">
                        <img src="./images/features-icn-easypayments.png" alt="" />
                        <p className="spacer-t1">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                    </div>
                    <div className="card-v">
                        <img src="./images/features-icn-cashback.png" alt="" />
                        <p className="spacer-t1">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris..</p>
                    </div>
                </div>
                <button className="btn btn-primary">Learn more <i className="fa-solid fa-arrow-right button-icon-r"></i></button>
            </div>

        </div>
    </div>
  )
}

export default Features2