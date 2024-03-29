import React, { useState } from 'react'
import Web from './web'
import Mobile from './mobile'
import './header.css'
import { NavLink } from 'react-router-dom'

function Header() {
  const[isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='header'>
        <NavLink className='logo' to="/">PortFolio</NavLink>
        <div className='menu'>
          <div className='web-menu'>
           <Web/>
          </div>
          <div className='mobile-menu'>
            <div onClick={()=>setIsOpen(!isOpen)}>
              <i class="fa-solid fa-bars menu-icon"></i>
            </div>
            {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
