import React from 'react';

const projectsData = [
    { id: 1, title: 'E-commerce Shop', desc: 'A full-featured cart utilizing Redux Toolkit.' },
    { id: 2, title: 'Task Manager', desc: 'A productivity app with drag-and-drop features.' },
    { id: 3, title: 'Weather App', desc: 'Real-time weather data fetching via API.' },
];

const Projects = () => {
    return (
        <div className="container">
            <h1 style={{ marginBottom: '1.5rem' }}>My Projects</h1>
            <div className="grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="card">
                        <h3>{project.title}</h3>
                        <p style={{ margin: '1rem 0' }}>{project.desc}</p>
                        <button className="btn" style={{ fontSize: '0.8rem' }}>View Demo</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;