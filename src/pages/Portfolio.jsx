import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A description of the first project',
      link: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A description of the second project',
      link: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A description of the third project',
      link: '#'
    }
  ];

  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <p>Welcome to my portfolio. Here are some of my recent projects.</p>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}