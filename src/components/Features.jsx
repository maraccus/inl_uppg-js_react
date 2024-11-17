import React, { useState } from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {

    const [featureItems, setFeatureItems] = useState([
        { title: "Easy Payments", imageUrl: "./images/test.png", imageAlt: "Bild", text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo." },
        { title: "Data Security", imageUrl: "./images/test.png", imageAlt: "Bild", text: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non." },
        { title: "Cost Statistics", imageUrl: "./images/test.png", imageAlt: "Bild", text: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh." },
        { title: "Support 24/7", imageUrl: "./images/test.png", imageAlt: "Bild", text: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris." },
        { title: "Regular Cashback", imageUrl: "./images/test.png", imageAlt: "Bild", text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend." },
        { title: "Top Standards", imageUrl: "./images/test.png", imageAlt: "Bild", text: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu." },
    ])

  return (
    <div className="section-features container spacer-t flex-h spacer-b">
        <img className="feature-img" src="./images/features-phone.png" alt="" />
        <div className="section-features-content">
            <div className="heading">
                <h2>App Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem tempora perspiciatis numquam, dolorum inventore molestias quasi provident aut ab veniam quibusdam eligendi enim vel error!</p>
            </div>
            <div className="feature-cards">

                {
                    featureItems.map((item, index) => (<FeatureCard key={index} item={item} />))
                }

            </div>
        </div>
    </div>
  )
}

export default Features