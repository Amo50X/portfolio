import { Float,Grid,AccumulativeShadows, RandomizedLight ,MeshDistortMaterial,Text, Stars, PresentationControls } from "@react-three/drei"
import { useMemo, memo } from 'react'
import { useLoader } from "@react-three/fiber";
import * as THREE from 'three';
import { MathUtils } from 'three'
import { useState } from "react";
import { animated, useSpring } from "@react-spring/three";


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

const Experience = ({name,texture, positionX}) => {
  const [hover, setHover] = useState(false)

    const spring = useSpring({
      from: {
        scale: hover ? 3 : 3.5,
      },
      to: {
        scale: hover ? 3.5 : 3,
      }
    })
  return (
    
    <animated.mesh 
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        scale={spring.scale} 
        position-x={positionX} 
        castShadow 
        receiveShadow
      >
        <planeGeometry args={[1,1,32,32]}/>
        <MeshDistortMaterial map={texture} transparent opacity={0.8}/>
        <Text position-y={-0.6} scale={0.1} color={'#00a8be'}>{name}</Text>
      </animated.mesh>
  )
}

const Models = () => {

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
    
      <Stars speed={2}/>
      <PresentationControls
        snap
      >
        <Geometries/>
      </PresentationControls>
      
      <Float>       
        <Experience name={"3D Models"} texture={modelTexture} positionX={0}/>
        <Experience name={"Games"} texture={gameTexture} positionX={-5}/>
        <Experience name={"AI"} texture={aiTexture} positionX={5}/>  
      </Float>
      <Ground/>
      <Shadows/>
    </>
  )
}

export default Models

function Ground() {
  const gridConfig = {
    cellSize: 0.5,
    cellThickness: 0.5,
    cellColor: '#6f6f6f',
    sectionSize: 3,
    sectionThickness: 1,
    sectionColor: '#00a8be',
    fadeDistance: 30,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true
  }
  return <Grid position={[0, -3, 0]} args={[10.5, 10.5]} {...gridConfig} />
}

const Shadows = memo(() => (
  <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
    <RandomizedLight amount={8} radius={4} position={[5, 8, -5]} />
  </AccumulativeShadows>
))