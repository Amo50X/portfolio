import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Stages from './Stages';

const Design = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    setIsLoading(true)
    setInterval(() =>{
      setIsLoading(false)
    },2000)
  },[])

  return (
    <section className='design' style={{
      height: '1px',
    }}>
      
      {
        isLoading?
        <div className='load'>
          <motion.img src='./images/gear.png'
            animate={{
              rotateZ: ['90deg','90deg','0','0','90deg','90deg','0']
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
          />
          <h1>Loading...</h1>
        </div>
        :
        <>
          <video className='bg_video' src="/video/ball.mp4" autoPlay loop/>         

          <Canvas
            gl={{alpha: true,
              antialias: true
            }}
          >
            <Stages/>
          </Canvas>
        </>
        
      }
        
    </section>
  )
}

export default Design

