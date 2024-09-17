import { Float, MeshDistortMaterial, useGLTF,Text, PresentationControls, Stars } from "@react-three/drei"
import { useLoader } from "@react-three/fiber";
import * as THREE from 'three';

const Models = () => {

  const model = useGLTF('./models/Joy.glb');
  const gameTexture = useLoader(THREE.TextureLoader, './texture/games.png');
  const modelTexture = useLoader(THREE.TextureLoader, './texture/model.png');

  return (
    
    <>
      
    
      <Stars/>
     
      <Float>
        
        <mesh scale={4} position={[-5,0,0]} >
          <planeGeometry args={[1,1,32,32]}/>
          <MeshDistortMaterial map={modelTexture}/>
          <Text position-y={-0.6} scale={0.1}>3D models</Text>
        </mesh>
        <mesh scale={4} position={[0,0,0]}>
          <planeGeometry args={[1,1,32,32]}/>
          <MeshDistortMaterial map={gameTexture}/>
          <Text position-y={-0.6} scale={0.1}>Games</Text>
        </mesh>
        <mesh scale={4} position={[5,0,0]}>
          <planeGeometry args={[1,1,32,32]}/>
          <MeshDistortMaterial color={"black"} transparent/>
          <Text position-y={-0.6} scale={0.1}>AI</Text>
        </mesh>
      </Float>
    </>
  )
}

export default Models