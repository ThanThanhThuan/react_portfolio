import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hi, I'm <span style={{ color: 'var(--accent-color)' }}>Than Thanh Thuan</span></h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                A Frontend React Developer building responsive web applications.
            </p>
            <Link to="/projects" className="btn">View My Work</Link>
        </div>
    );
};

export default Home;