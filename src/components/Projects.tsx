import React from 'react';
import Card from './Card'; // Removed Heading import as it is unused
import '../app/styles/projects.css';

const data = [
  {
    id: 0,
    title: "Simple Calculator Project",
    desc: "A Basic Calculator application built with TypeScript and Node.js for efficient and type-safe operations",
    img: "/project-1.png",
    tags: ["Typescript", "Node"],
  },
  {
    id: 1,
    title: "Interactive Resume Builder App",
    desc: "Built a Resume Builder using HTML, CSS, and TypeScript, allowing users to customize resumes with real-time preview and styling options",
    img: "/project--02.png",
    tags: ["Typescript", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Number Guessing Game Project",
    desc: "Developed a Number Guessing Game with TypeScript and Node.js, where players guess a random number with feedback and attempts.",
    img: "/project-3.png",
    tags: ["Typescript", "Node"],
  },
  {
    id: 3,
    title: "Todo CLI manager project",
    desc: "A CLI-based To-Do List application built with TypeScript and Node.js, allowing efficient task management from the terminal. Users can add, edit, and delete tasks with ease.",
    img: "/project-04.png",
    tags: ["Typescript", "Node"],
  },
  {
    id: 4,
    title: "Currency Converter Project",
    desc: "A CLI Currency Converter built with TypeScript and Node.js, allowing users to convert currencies with real-time exchange rates in the terminal",
    img: "/project-5.jpg",
    tags: ["Typescript", "Node"],
  },
  {
    id: 5,
    title: "Word Counter Project",
    desc: "A CLI Word Counter built with TypeScript and Node.js, quickly analyzing text to count words, characters, and lines directly in the terminal",
    img: "/project-6.jpg",
    tags: ["Typescript", "Node"],
  }
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
