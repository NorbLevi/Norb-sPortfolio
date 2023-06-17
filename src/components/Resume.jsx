import React from 'react';
import parse from 'html-react-parser'

const Resume = ({ icon, year, Title, desc }) => {
  return (
    <div className="resume_item">
      <div className="resume_icon">
        {icon}
      </div>

      <span className="resume_date">{year}</span>

      <h3 className="resume_subtitle">{parse(Title)}</h3>

      <p className="resume_description">{desc}</p>
    </div>
  );
};

export default Resume;
