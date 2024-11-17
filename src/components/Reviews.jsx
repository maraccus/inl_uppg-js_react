import React from 'react'
import ReviewCard from './ReviewCard'

const Reviews = () => {
  return (
    <div className="section-reviews bg-light">
        <div className="container spacer-t spacer-b flex-row flex-sb">
            <h2>Clients are<br/> Loving Our App</h2>
            <div className="testimonials">

              <ReviewCard />
              <ReviewCard />

            </div>
        </div>
    </div>
  )
}

export default Reviews