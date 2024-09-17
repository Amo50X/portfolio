import { Canvas } from "@react-three/fiber"
import './Scene.css'
import Models from "./Models"
import { FaS } from "react-icons/fa6"

const Scene = () => {
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
            <ambientLight intensity={2}/>
            <group position={[0,0,0]}>

              <Models/>
            </group>
            
        </Canvas>
    </>
    
  )
}

export default Scene