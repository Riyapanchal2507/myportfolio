import React from 'react'
import './mobile.css'
import { NavLink } from 'react-router-dom'
function Mobile({isOpen, setIsOpen}) {
  return (
    <div className='mobile'>
      <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
        <i class="fa-regular fa-circle-xmark"></i>
      </div>
      <div className='mobile-options'>
      <div className='mob-option'>
        <NavLink className='mob-option-link' to="/project"><i class="fa-solid fa-pen-to-square option-icon"></i>Project</NavLink>
      </div>

      <div className='mob-option'>
        <NavLink className='mob-option-link' to="/skills"><i class="fa-solid fa-book-open-reader option-icon"></i>Skills</NavLink>
      </div>

      <div className='mob-option'>
        <NavLink className='mob-option-link' to="/work"><i class="fa-solid fa-briefcase option-icon"></i>Work</NavLink>
      </div>

      <div className='mob-option'>
        <NavLink className='mob-option-link' to="/contact"><i class="fa-regular fa-user option-icon"></i>Contact</NavLink>
      </div>
      </div>
      </div>
  )
}

export default Mobile
