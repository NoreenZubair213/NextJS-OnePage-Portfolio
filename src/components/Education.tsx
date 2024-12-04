import React from "react";
import "../app/styles/education.css";

const Education = () => {
  return (
    <div id="education" className="education-container">
      <h2 className="education-heading" data-aos="zoom-in-up">
        Education
      </h2>
      <div className="education-list">
        <div className="education-item" data-aos="fade-up">
          <h3 className="degree">Bachelor of Science in Computer Science</h3>
          <p className="university">XYZ University</p>
          <p className="duration">2018 - 2022</p>
          <p className="details">
            Focused on software engineering, algorithms, and machine learning. Developed various projects in web development.
          </p>
        </div>

        <div className="education-item" data-aos="fade-up">
          <h3 className="degree">High School Diploma</h3>
          <p className="university">ABC High School</p>
          <p className="duration">2014 - 2018</p>
          <p className="details">
            Completed with a focus on science and mathematics, excelling in advanced computer science and physics courses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
