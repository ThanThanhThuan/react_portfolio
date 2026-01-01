import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h1>About Me</h1>
            <div className="card" style={{ marginTop: '1rem' }}>
                <p>
                    I am a passionate developer with expertise in React, JavaScript, and modern web technologies.
                    I love creating clean, efficient, and user-friendly interfaces. When I'm not coding,
                    you can find me learning new frameworks or contributing to open source.
                </p>
                <h3 style={{ marginTop: '1rem' }}>Skills</h3>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>React & Redux</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>Node.js</li>
                </ul>
            </div>
        </div>
    );
};

export default About;