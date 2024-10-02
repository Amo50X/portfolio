import React from "react";
import Nav from './Components/nav/Nav';
import Home from './Components/home/Home';
import About from './Components/about/About';
import { motion, useScroll, useSpring } from 'framer-motion';
import Journey from './Components/journey/Journey';
import Skill from './Components/skill/Skill';
import Work from './Components/work/Work';
const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 7,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <Nav />
      <Home />
      <About />
      <Journey />
      <Skill />
      <Work />
    </>
  );
};

export default Portfolio;
