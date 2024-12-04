import React from 'react';
import "../app/styles/experience.css";

const Experience = () => {
    const experiences = [
        {
            role: "Frontend Developer",
            company: "Tech Solutions",
            duration: "Jan 2020 - Dec 2022",
            details: "Developed responsive web applications using React, improved UI/UX design, and optimized site performance by 20%."
        },
        {
            role: "Software Engineer Intern",
            company: "Code Innovators",
            duration: "Jun 2019 - Dec 2019",
            details: "Worked on backend APIs using Node.js, collaborated with frontend teams, and implemented features to streamline user workflows."
        },
    ];

    return (
        <div className="experience-container" id="experience">
            <h2 className="experience-heading">Experience</h2>
            <div className="experience-cards">
                {experiences.map((exp, index) => (
                    <div className="experience-card" key={index}>
                        <h3 className="role">{exp.role}</h3>
                        <p className="company">{exp.company}</p>
                        <p className="duration">{exp.duration}</p>
                        <p className="details">{exp.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;

