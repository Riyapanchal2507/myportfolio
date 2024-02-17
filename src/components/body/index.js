import React from 'react'
import About from './about'
import Contact from './contact'
import Project from './project'
import Skills from './skills'
import Work from './work'
import './body.css'

function Body() {
  return (
    <div className='body'>
      <section id='about'>
        <About/>       
      </section>

      <section id='project'>
       <Project/>
      </section>

      <section id='skills'>
        <Skills/>
      </section>

      <section id='work'>
        <Work/>
      </section>
      
      <section id='contact'>
        <Contact/>
      </section>

    </div>
  )
}

export default Body
