import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <div className="section-features container spacer-t flex-h spacer-b">
        <img className="feature-img" src="./images/features-phone.png" alt="" />
        <div className="section-features-content">
            <div className="heading">
                <h2>App Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem tempora perspiciatis numquam, dolorum inventore molestias quasi provident aut ab veniam quibusdam eligendi enim vel error!</p>
            </div>
            <div className="feature-cards">

                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />

            </div>
        </div>
    </div>
  )
}

export default Features