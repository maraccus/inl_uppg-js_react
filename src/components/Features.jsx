import React from 'react'

const Features = () => {
  return (
    <div className="section-features container spacer-t flex-h spacer-b">
        <img className="feature-img" src="assets/features-phone.png" alt="" />
        <div className="section-features-content">
            <div className="heading">
                <h2>App Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem tempora perspiciatis numquam, dolorum inventore molestias quasi provident aut ab veniam quibusdam eligendi enim vel error!</p>
            </div>
            <div className="feature-cards">

                <div className="card">
                    <div className="card-icon">
                        <img src="assets/features-icn-easypayments.png" alt="" />
                    </div>
                    <div className="card-text">
                        <h3>Easy Payments</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-icon">
                        <img src="assets/features-icn-datasecurity.png" alt="" />
                    </div>
                    <div className="card-text">
                        <h3>Data Security</h3>
                        <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-icon">
                        <img src="assets/features-icn-coststatistics.png" alt="" />
                    </div>
                    <div className="card-text">
                        <h3>Cost Statistics</h3>
                        <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-icon">
                        <img src="assets/features-icn-support.png" alt="" />
                    </div>
                    <div className="card-text">
                        <h3>Support 24/7</h3>
                        <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-icon">
                        <img src="assets/features-icn-cashback.png" alt="" />
                    </div>
                    <div className="card-text">
                        <h3>Regular Cashback</h3>
                        <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-icon">
                        <img src="assets/features-icn-topstandards.png" alt="" />
                    </div>
                    <div className="card-text">
                        <h3>Top Standards</h3>
                        <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Features