import React from 'react'
import './About.css'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className='about-section' id='about'>
        
        <div className='about'>
            <h1>About Me</h1>
            <div className='about-content'>
                
                <motion.img src="./images/me.jpg" alt="" 
                  initial={{borderRadius: "50%"}}
                  whileTap={{rotateY: "180deg"}}
                  whileHover={
                    {scale : 0.8}
                  }
                  whileInView={
                    {borderRadius: ['50%','0','50%'],
                      rotateZ: ['90deg', '180deg', '0']
                    }
                  }
                />
            
                <p> 
                  Hello World!<br/> 
                  I'm a versatile full-stack developer with a passion for creating seamless web experiences using Python and React. My journey in tech has taken me through a variety of fields, including game development with Unity, where I bring virtual worlds to life, and graphic design with Blender 3D, where I craft visually stunning 3D designs.
                  <br/>
                  <br/>
  	              Beyond development and design, I’ve also ventured into the world of data science, utilizing analytical skills to turn complex datasets into actionable insights. My diverse skill set allows me to approach problems with a unique, creative, and technical perspective, ensuring the best possible solutions.
                  
                </p>
            </div>
        </div>
    </section>
  )
}

export default About