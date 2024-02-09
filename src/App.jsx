import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Feature from './Components/Feature'

const App = () => {
  return (
    <div className="w-full min-h-screen text-white  bg-zinc-900">
     <Navbar/>
     <LandingPage/>
     <Marquee/>
     <About/>
     <Eyes/>
     <Feature/>
    </div>
  )
}

export default App
