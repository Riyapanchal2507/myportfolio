import React from 'react'
import './home.css'
import Footer from '../footer'
import About from '../body/about'
import Header from "../../components/header/index"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from '../body/project'
import Skills from '../body/skills'
import Work from '../body/work'
import Contact from '../body/contact'
function Home() {
  return (
    <div className='home'>
        <div>           
           <BrowserRouter>
               <div className='stickys'>
                  <Header />
              </div>
              <Routes>
                 <Route path='/' element={<About />} />  
                 <Route path='/project' element={<Project/>} />
                 <Route path='/skills' element={<Skills/>} />
                 <Route path='/work' element={<Work/>} />
                 <Route path='/contact' element={<Contact/>} />
              </Routes>
              <div className='fixes'>
                  <Footer /> 
              </div>      
           </BrowserRouter>
      </div>
    </div>
  )
}

export default Home
