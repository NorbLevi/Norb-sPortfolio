import React from 'react'

import{
  
  FaPhoneSquareAlt,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'


import { FiMail, FiSend } from 'react-icons/fi'

import './contact.css'

const contact = () => {
  return (
    <section className="contact section">
        <h2 className="section_title">
            Get In <span>Touch</span>
        </h2>

    <div className="contact_container container grid">
      <div className="container_data">
        <h3 className="contact_title">
          Come Say Hello !
        </h3>

        <p className="contact_description">
          Feel free to get in touch with me. I am always open to discuss
          new Projects, creative ideas or opportunities and to help you achive the
          Web Page of your choice.
        </p>

        <div className="contact_info">
          <div className="info_item"> 
          
          <FiMail className='info_icon'/> 
          
            <div>
              <span className="info_title">Mail Me</span>
              <h4 className="info_desc">norbtony2268@gmail.com</h4>
            </div>
          </div>

        

            <div className="info_item"> 
            <FaPhoneSquareAlt className='info_icon'/> 


            <div>
              <span className="info_title">Call Me</span>
              <h4 className="info_desc">+2547-4399-9130</h4>
            </div>

          </div>
        </div>


        <div className="contact_socials">
        <a href="www.github.com" className="contact_social-link"> <FaGithub /> </a>
        <a href="http://twitter.com/Levi_Norb?t=yhALf_1dCelGWSykdiiZdQ&s=09" className="contact_social-link"> <FaTwitter /> </a>
        <a href="www.instagram.com" className="contact_social-link"> <FaInstagram /> </a>
        <a href="www.linkedin.com" className="contact_social-link"> <FaLinkedinIn/> </a>
        </div>
      </div>

      <form className="contact_form">

        <div className="form_input-group">
          <div className="form_input-div">
            <input type="text" placeholder='Your Name' className="form_control" />
          </div>
          <div className="form_input-div">
            <input type="email" placeholder='Email' className="form_control" />
          </div>

          <div className="form_input-div">
            <input type="text" placeholder='Subject' className="form_control" />
          </div>
        </div>

        <div className="form_input-div">
        <textarea placeholder='Message' className="form_control textarea"></textarea>
        </div>

        <div className="button contact_button">
          Send 
          <span className="button_icon contact_button-icon">
            <FiSend/>
          </span>
        </div>
      </form>
    </div>
    </section>
  )
}

export default contact