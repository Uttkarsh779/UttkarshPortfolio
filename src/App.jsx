import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Hero from './components/heroSection'
import './index.css'
import Cta from './components/cta'
import AboutMe from './components/aboutMe'
import Skills from './components/Skills'
import Projects from './components/Project'
import Experience from './components/Experience'
import Contact from './components/contactMe'
import Footer from './components/footer'


function App() {


  return (
    <>

      <div>

        {/* <Header /> */}
        <Hero />



        <Cta />
        <AboutMe />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Contact />
        <Footer />
        {/* <h1>My portfolio </h1> */}

      </div>
    </>
  )
}

export default App
