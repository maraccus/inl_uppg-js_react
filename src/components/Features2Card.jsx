import React from 'react'

const Features2Card = ({item}) => {
  return (
    <div className="card-v">
        <img src="{item.imageUrl}" alt="item.imageAlt" />
        <p className="spacer-t1">{item.text}</p>
    </div>
  )
}

export default Features2Card