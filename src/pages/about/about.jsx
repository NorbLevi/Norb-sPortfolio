import React from 'react'
import Info from '../../components/info'
import Stat from '../../components/Stats'
import { FaDownload } from 'react-icons/fa'
import CV from '../../assets/Norbert Ochieng Omondi CV .pdf'
import Skill from '../../components/skills'
import './about.css'
import { resume } from '../../data'
import Resume from '../../components/Resume'


const About = () => {
  return (
    <main className="section container abt">
      <section className="about ">
        <h2 className="section_title">
          About <span>Me</span>
        </h2>

        <div className="about_container grid">
          <div className="about_info">
            <h3 className="section_subtitle">Personal Info</h3>
            <ul className="info_list grid">
                <Info />
            </ul>
            <a href={CV} download='' className="button">Download Cv <span className="button_icon"><FaDownload/></span></a>
          </div>

          <div className="stats grid">
            <Stat/>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section_subtitle subtitle_center"> My Skills</h3>
        <div className="skills_container grid">
          <Skill/>
        </div>
      </section>

      <div className="separator"></div>

      <section className="resune">
      <h3 className="section_subtitle subtitle_center"> Experience and Education</h3>
      <div className="resume_container grid" >
        <div className="resume_data">
            {resume.map((val) => {
              if (val.category === 'experience') {
                return <Resume key={val.id} {...val}/>;
              }
              return null;
            })}
        </div>

        <div className="resume_data">
            {resume.map((val) => {
              if (val.category === 'education') {
                return <Resume key={val.id} {...val}/>;
              }
              return null;
            })}
        </div>
        
      </div>

      </section>

    </main>
  )
}

export default About
