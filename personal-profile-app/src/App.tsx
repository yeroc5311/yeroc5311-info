import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import FunFacts from './components/FunFacts';
import Interests from './components/Interests';
import PCSpecs from './components/PCSpecs';
import Socials from './components/Socials';
import Guestbook from './components/Guestbook';
import CounterButton from './components/CounterButton';
import BlogPost from './components/BlogPost';
import ThemeToggle from './components/ThemeToggle';
import './styles/index.css';

const App = () => {
  const [theme, setTheme] = useState('void'); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'void' ? 'flashbang' : 'void'));
  };

  return (
    <div className={theme}>
      <ThemeToggle toggleTheme={toggleTheme} />
      <AboutMe />
      <FunFacts />
      <Interests />
      <PCSpecs />
      <Socials />
      <Guestbook />
      <CounterButton />
      <BlogPost />
    </div>
  );
};

export default App;