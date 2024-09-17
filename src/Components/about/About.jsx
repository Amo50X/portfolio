import React from 'react'
import './About.css'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className='about-section' id='about'>
        
        <div className='about'>
            <h1>About Me</h1>
            <div className='about-content'>
                
                <motion.img src="src/assets/me.jpg" alt="" 
                  whileTap={{rotateY: "180deg"}}
                  whileHover={{scale:0.8}}
                />
            
                <p> 
                  Hello! My Name is Amogelang Sibanda. I enjoy building Web Applications and designing 3D models. I studied 
                  Information Technology at Tshwane University of Technology and specialised in Intelligent Industrial System. 
                </p>
            </div>
        </div>
    </section>
  )
}

export default About