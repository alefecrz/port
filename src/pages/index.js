import React from 'react';

import Home from './Home';
import Aboutme from './Aboutme';
import Skill from './Skill';
// import Contact from './Contact';
// import Navbar from '../../components/Navbar';
// import Project from '../../components/Project';

export default function Site () {
    return (
        <>
            {/* <Navbar /> */}
            <Home />
            <Aboutme />
            <Skill />
            {/* <Project />*/}
            {/* <Contact /> */}
        </>
    );
}
