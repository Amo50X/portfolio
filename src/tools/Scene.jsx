import { Canvas } from "@react-three/fiber"
import './Scene.css'
import Models from "./Models"
import { FaS } from "react-icons/fa6"

const Scene = () => {
  const scaleFactor = window.innerWidth  / 1300;
  console.log(scaleFactor)
  return (
    <>

        <Canvas 
          camera={{
            position: [0,0,7],
          
          }}
        >
            {/* <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              maxPolarAngle={Math.PI * 1/2}
              minPolarAngle={Math.PI * 1/2}

            /> */}
            
            <group position={[0,0,0]} scale={scaleFactor}>
              <ambientLight intensity={2}/>
              <Models/>
            </group>
            
        </Canvas>
    </>
    
  )
}

export default Scene