import React from 'react'

const ReviewCard = () => {
  return (
    <div className="section-review-card">
        <img className="review-stars" src="./images/5-star-rating.png" alt="" />
        <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
        <div className="review-author">
        <img src="./images/icn-reviewee-placeholder.png" alt="" />
        <div>
            <p className='review-author-name'>Fannie Summers</p>
            <p className='review-author-position'>Designer</p>
        </div>
        </div>
    </div>
  )
}

export default ReviewCard