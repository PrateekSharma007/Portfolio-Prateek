import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    // <div className="overflow-x-hidden text-neutral-300 antialiased slec bg-cyan300 selection:text-cyan-900">


    // </div>

    <div>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

        <Navbar />
        <Hero />
        <About />
        <MyWork />
        <Contact />
        <Footer />
      </div>

    </div>



  )
}

export default App
