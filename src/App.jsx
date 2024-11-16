import { useState } from 'react'
import './assets/css/main.css'
import './assets/css/utility.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Logos from './components/Logos.jsx' 
import Features from './components/Features.jsx'
import How from './components/How.jsx'
import Features2 from './components/Features2.jsx'
import Reviews from './components/Reviews.jsx'
import Faq from './components/Faq.jsx'

import React from 'react'

const App = () => {
  return (
    <>
    <Header />
    <div className="wrapper">
      <Logos />
      <Features />
      <How />
      <Features2 />
      <Reviews />
      <Faq />
    </div>
    <Footer />
    </>
  )
}

export default App
