import React from 'react';
import "../app/styles/skills.css"; // Import the custom CSS files

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      {/* Main Heading */}
      <h2 className='main-skills-heading' data-aos="fade-down">
        My Skills
      </h2>

      <div className='skills-grid'>
        {/* Left Column: Skills Description */}
        <div data-aos="zoom-in-up" className='skills-left'>
          <h2 className='skills-heading'>Technologies I Work With</h2>
          <p className='skills-text'>
            I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I am also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>

        {/* Right Column: Skills */}
        <div className='skills-right'>
          <div className='skills-icons-grid'>
            <div className='skills-space'>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
            <div className='skills-space'>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
