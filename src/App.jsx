import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Technologies from './components/Technologies'
import Stats from './components/Stats'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Technologies />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </>
  )
}

export default App