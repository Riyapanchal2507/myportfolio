import React from 'react'
import './about.css'
import SocialContact from '../../common/social-contact'
function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Hello There, I am<br/>
          <span className='about-name'>Riya Panchal</span>.<br />
          I'm a passionate front-end web developer with a keen eye for design and a knack for turning creative concepts into captivating digital experiences. With a solid foundation in <span className='about-skills'>HTML, CSS, JavaScript and React</span>, I thrive on crafting user-friendly and visually appealing interfaces that seamlessly bridge the gap between form and function..
        </div>
        <div className='about-img'>
          <img src={require('../../../assets/coding.png')} className='code-img' />
        </div>
      </div>
      <div className='about-bottom'>
        <SocialContact/>
      </div>
    </div>
  )
}

export default About
