import React from 'react';
import './style.css';

import Home from '../../components/Home';
import Aboutme from '../../components/Aboutme';
// import Navbar from '../../components/Navbar';
// import Project from '../../components/Project';
// import Contact from '../../components/Contact';

export default function Site () {
    return (
        <div className="conteiner">
            {/* <Navbar /> */}
            <Home />
            <Aboutme />
            {/* <Project />
            <Contact /> */}
        </div>
    );
}