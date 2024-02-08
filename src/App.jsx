import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'

const App = () => {
  return (
    <div className="w-full h-screen text-white bg bg-zinc-900">
     <Navbar/>
     <LandingPage/>
    </div>
  )
}

export default App
