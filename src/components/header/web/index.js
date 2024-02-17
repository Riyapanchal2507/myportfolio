import React from 'react'
import './web.css'
import { NavLink } from 'react-router-dom'
function Web() {
  return (
    <div className='web'>
      <div className='web-option'>
        <NavLink className='web-option-link' to="/project"><i class="fa-solid fa-pen-to-square option-icon"></i>Project</NavLink>
      </div>

      <div className='web-option'>
        <NavLink className='web-option-link' to="/skills"><i class="fa-solid fa-book-open-reader option-icon"></i>Skills</NavLink>
      </div>

      <div className='web-option'>
        <NavLink className='web-option-link' to="/work"><i class="fa-solid fa-briefcase option-icon"></i>Work</NavLink>
      </div>

      <div className='web-option'>
        <NavLink className='web-option-link' to="/contact"><i class="fa-regular fa-user option-icon"></i>Contact</NavLink>
      </div>
    </div>
  )
}

export default Web
