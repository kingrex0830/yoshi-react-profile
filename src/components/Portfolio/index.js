import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'eventfinderr',
      description: 'EventFinderr',
      link: "https://amritpal-kaur0.github.io/EventFinderr/",
      repo: "https://github.com/Amritpal-Kaur0/EventFinderr"
    },
    {
      name: 'student-manager',
      description: 'Student Manager',
      link: "https://best-ever-student-manager-c65168e4e5e9.herokuapp.com",
      repo: "https://github.com/kingrex0830/student-manager"
    },
    {
      name: 'weather-app',
      description: 'Weather App',
      link: "https://kingrex0830.github.io/weather-app/",
      repo: "https://github.com/kingrex0830/weather-app"
    },
    {
      name: 'text-editor',
      description: 'Text Editor',
      link: "https://yoshi-text-editor-83c687a4b8ea.herokuapp.com",
      repo: "https://github.com/kingrex0830/text-editor"
    },
    {
      name: 'note-taker',
      description: 'Note Taker',
      link: "https://yoshi-note-taker-acd4e16b1de8.herokuapp.com",
      repo: "https://github.com/kingrex0830/note-taker"
    },
    {
      name: 'portfolio',
      description: 'Portfolio',
      link: "https://kingrex0830.github.io/yoshi-portfolio/",
      repo: "https://github.com/kingrex0830/yoshi-portfolio"
    }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
