import React from 'react'

const How = () => {
  return (
    <div className="section-how bg-light spacer-t spacer-b">
        <div className="container">

            <h2 className="text-center">How Does It Work?</h2>

            <div className="carousel spacer-t3">
                <img src="./images/how-phone-left.png" alt="" />
                <img src="./images/how-phone-middle.png" alt="" />
                <img src="./images/how-phone-right.png" alt="" />
            </div>

            <div className="section-how-txtbox text-center element-center">
                <h3 className="spacer-t3">Latest Transaction History</h3>
                <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
            </div>

        </div>
    </div>
  )
}

export default How