import { Float, MeshDistortMaterial, useGLTF,Text, Stars, PresentationControls } from "@react-three/drei"
import { useMemo } from 'react'
import { useLoader } from "@react-three/fiber";
import * as THREE from 'three';
import { MathUtils } from 'three'
import { useState } from "react";

const geometries = [
  { geometry: new THREE.TetrahedronGeometry(1) },
  { geometry: new THREE.CylinderGeometry(0.8, 0.8, 2, 32) },
  { geometry: new THREE.ConeGeometry(0.5, 0.7, 32) },
  { geometry: new THREE.SphereGeometry(0.5, 32, 32) },
  { geometry: new THREE.IcosahedronGeometry(1) },
  { geometry: new THREE.TorusGeometry(0.5, 0.35, 16, 32) },
  { geometry: new THREE.OctahedronGeometry(1) },
  { geometry: new THREE.SphereGeometry(0.5, 32, 32) },
  { geometry: new THREE.BoxGeometry(1, 1, 1) },
]

const Models = () => {

  // const model = useGLTF('./models/Joy.glb');
  const gameTexture = useLoader(THREE.TextureLoader, './texture/games.png');
  const modelTexture = useLoader(THREE.TextureLoader, './texture/model.png');
  const aiTexture = useLoader(THREE.TextureLoader, './texture/ai.jpg');

  const material = new THREE.MeshNormalMaterial()

  function Geometries() {
    const n = 30
    const randProps = useMemo(() => Array.from({ length: n }, () => geometries[Math.floor(Math.random() * geometries.length)]), [])
    return randProps.map((prop) => {
      return (
        <Float
        >
          <mesh
            scale={MathUtils.randFloat(0.25, 0.5)}
            position={[MathUtils.randFloat(-10, 10), MathUtils.randFloat(-5, 5), MathUtils.randFloat(-5, 5)]}
            geometry={prop.geometry}
            material={material}
          />
        </Float>
      )
    })
  }

  return (
    
    <>
      <Text
        font='./fonts/Roboto-Bold.ttf'
        fontSize={1.8}
        fontWeight={50}
        position-y={3.7}
      >
        Work
        <meshNormalMaterial/>
      </Text>
    
      <Stars/>
      <PresentationControls
        snap
      >
        <Geometries/>
      </PresentationControls>
      
      <Float>
        
        <mesh 
          scale={3.5} 
          position={[-6,0,0]} 
        >
          <planeGeometry args={[1,1,32,32]}/>
          <MeshDistortMaterial  map={modelTexture} transparent opacity={0.5}/>
          <Text position-y={-0.6} scale={0.1} color={'#00a8be'}>3D models</Text>
        </mesh>
        <mesh scale={3.5} position={[0,0,0]}>
          <planeGeometry args={[1,1,32,32]}/>
          <MeshDistortMaterial map={gameTexture} transparent opacity={0.5}/>
          <Text position-y={-0.6} scale={0.1} color={'#00a8be'}>Games</Text>
        </mesh>
        <mesh scale={3.5} position={[6,0,0]}>
          <planeGeometry args={[1,1,32,32]}/>
          <MeshDistortMaterial map={aiTexture} transparent opacity={0.5}/>
          <Text position-y={-0.6} scale={0.1} color={'#00a8be'}>AI</Text>
        </mesh>
      </Float>
    </>
  )
}

export default Models