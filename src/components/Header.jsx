import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Header = () => {
  return (
    
    <header className="bg-gradient">
        <div className="container ">
            <Navbar />
            <Hero />
        </div>
    </header>

  )
}

export default Header