import React from 'react';
import FunFacts from './FunFacts';
import Interests from './Interests';
import PCSpecs from './PCSpecs';
import Socials from './Socials';
import './AboutMe.css'; // Assuming you will create a CSS file for specific styles

const AboutMe: React.FC = () => {
    return (
        <div className="about-me">
            <h1 style={{ fontFamily: 'JetBrains Mono' }}>About Me</h1>
            <FunFacts />
            <Interests />
            <PCSpecs />
            <Socials />
        </div>
    );
};

export default AboutMe;