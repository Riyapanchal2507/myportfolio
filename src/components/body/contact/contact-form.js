import React from 'react'
import './contactform.css'
function ContactForm() {
  return (
    <div>
      <form>
            <input type="text" placeholder="enter your Name" /><br/>
            <input type="password" placeholder="enter your E-mail" /><br/>
            <input type="tel" placeholder="enter your Phone Number"/><br/>
            <textarea placeholder="Leave a message"/><br/>
            <button type="submit">Submit</button>
            <p>don't have account ? <a href="#">Create Account</a></p>
            </form>
    </div>
  )
}

export default ContactForm
