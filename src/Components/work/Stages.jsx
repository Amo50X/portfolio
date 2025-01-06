import { Scroll, ScrollControls, Text, MeshDistortMaterial, useVideoTexture, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const Stages = () => {


  return (
    <>
      <ambientLight />


      <ScrollControls pages={3}>
        <Slider />
      </ScrollControls>
    </>
  )
}

export default Stages

function VideoMaterial({ src }) {
  const texture = useVideoTexture(src)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.x = 1
  texture.offset.x = 1
  return <MeshDistortMaterial side={THREE.DoubleSide} map={texture} toneMapped={false} transparent distort={0.2} speed={3} />
}

function Slider() {
  const data = useScroll();
  const screenRef = useRef();
  const introRef = useRef();
  const bigRef = useRef();

  useFrame(() => {
    screenRef.current.position.x = (-4 - (data.range(0, 0.33) * 8));
    introRef.current.style.left = `${900 + (data.range(0, 0.33) * 800)}px`;
    bigRef.current.scale.set(0.5 + data.range(0, 0.33), 0.5 + data.range(0, 0.33), 0.5 + data.range(0, 0.33))
  })

  return (<>
    <Scroll>
      <mesh position={[-4, 0, 0]} ref={screenRef}>
        <planeGeometry args={[6, 4, 32, 32]} />
        <VideoMaterial src={'./video/sci.mp4'} />
      </mesh>
      <mesh scale={1} position={[0, -5, 0]} ref={bigRef} >
        <planeGeometry args={[6, 4, 32, 32]} />
        <VideoMaterial src={'./video/gn.mp4'} />
      </mesh>
      <Text
        font='./fonts/Roboto-Bold.ttf'
        fontSize={0.5}
        position={[0, 3.5, 0]}
        color={'aqua'}
        fontWeight={'1500'}
      >
        3D Modelling
      </Text>
    </Scroll>
    <Scroll html >
      <p ref={introRef} style={{
        top: '300px',
        left: '900px'
      }}>
        I've been 3D modelling since 2020 using a tool named Blender 3D. The reason I started 3D modelling is
        I have passion for Games Development and on of the steps in to making a good 3D game is to know 3D modelling.
        That's when I began my journey of 3D modelling.
      </p>
    </Scroll>

  </>)
}