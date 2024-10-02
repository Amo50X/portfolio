import { Canvas } from '@react-three/fiber'
import React from 'react'

const Design = () => {
  return (
    <section className='design' style={{
      height: '1px'
    }}>
      <Canvas
        gl={{alpha: false,
          antialias: true
        }}
      >
        
      </Canvas>
    </section>
  )
}

export default Design