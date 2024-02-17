import React from 'react'
import './contact.css'
import Separator from '../../common/social-contact/separator';
import ContactForm from './contact-form';
function Contact() {
  return (
    <div className='contact'>
      <Separator />
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Want to get in touch? Contact me on any of the platform</p>
          <a download href={require('../../../assets/resume.pdf')}>
            <i class="fa-solid fa-cloud-arrow-down"></i>
            Download Resume
          </a>        
        </div>
        <div className='form'>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Contact
