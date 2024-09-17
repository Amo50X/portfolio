import { Canvas } from "@react-three/fiber"
import './Scene.css'
import Models from "./Models"
import { OrbitControls, SpotLight } from "@react-three/drei"

const Scene = () => {
  return (
    <section>
        <Canvas 
          shadows
          camera={{
            position: [0,0,7],
          }}
        >
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              maxPolarAngle={Math.PI * 1/2}
              minPolarAngle={Math.PI * 1/2}

            />
            <ambientLight intensity={0.9}/>
            <group position={[0,0,0]}>

              <Models/>
            </group>
            
        </Canvas>
    </section>
    
  )
}

export default Scene