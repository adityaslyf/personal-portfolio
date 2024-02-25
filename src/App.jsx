import { useState } from 'react'
import Hero from './components/hero/hero'
import './App.css'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Frontend from './components/skills/Frontend'
import Backend from './components/skills/Backend'
import Experiences from './components/experience/experience'
import Contact from './components/contact/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" w-auto h-[7136px] bg-[#232732] ">
        {/* <div className=' w-[1440px] h-[7019px] bg-[#232732]'> */}
        <Navbar />
        <Hero />
        <About />
        <Projects />
        {/* <div className=' flex flex-row'>
        <Frontend />
        <Backend />
        </div> */}
       
       <Experiences />
       <Contact /> 
      </div>
        {/* </div> */}
    
    </>
  )
}

export default App
