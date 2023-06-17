import React from 'react'
import Profile from '../../assets/home.jpg'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'
import { Link } from 'react-router-dom'

const home = () => {
  return (
        <section className="home section grid">
          <img src={Profile} alt='' className='home_img'/>

          <div className="home_content">
            <div className="home_data">
              <h1 className="home_title">
                <span>I'm Norbert Ochieng</span> Web Designer
              </h1>
              <p className="home_description">
                I'm a Kenyan Based web designer & front-end developer focused on crafting clean,responsive & user-friendly
                experiences, I'm passionate about building excelent software that improves the lives of those around me.
              </p>

              <Link to='/about' className='button'>
                 More About Me <span className='button_icon'> <FaArrowRight className='icon'/></span>
                 </Link>
            </div>
          </div>

         <div className="color_block"></div>
        </section>
    
  )
}

export default home