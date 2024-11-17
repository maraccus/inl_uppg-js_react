import React from 'react'

const FeatureCard = ({item}) => {
  return (
    <div className="card">
        <div className="card-icon">
            <img src={item.imageUrl} alt={item.imageAlt} />
        </div>
        <div className="card-text">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
        </div>
    </div>
  )
}

export default FeatureCard