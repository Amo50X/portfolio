import { Canvas, useLoader } from '@react-three/fiber';
import './Skill.css';
import { Float, MeshDistortMaterial,Sparkles,Text } from '@react-three/drei';
import * as THREE from 'three';
import { useState } from 'react';
import { animated, useSpring } from '@react-spring/three';



const Skill = () => {
  const htmlTexture = useLoader(THREE.TextureLoader, './texture/html_logo.png');
  const cssTexture = useLoader(THREE.TextureLoader, './texture/css_logo.png');
  const jsTexture = useLoader(THREE.TextureLoader, './texture/js_logo.png');
  const reactTexture = useLoader(THREE.TextureLoader, './texture/react_logo.png');
  const bootTexture = useLoader(THREE.TextureLoader, './texture/bootstrap_logo.png');
  const blenderTexture = useLoader(THREE.TextureLoader, './texture/blender_logo.png');
  const unityTexture = useLoader(THREE.TextureLoader, './texture/unity_logo.png');
  const pythonTexture = useLoader(THREE.TextureLoader, './texture/python_logo.png');
  const cPlusTexture = useLoader(THREE.TextureLoader, './texture/Cplus_logo.png');
  const cSharpTexture = useLoader(THREE.TextureLoader, './texture/Csharp_logo.png');

  function LogoSkill ({position, texture, text}) {
    const [hover, setHover] = useState(false)

    const spring = useSpring({
      from: {
        scale: hover ? 0.8 : 0.6,
        speed: hover ? 2 : 5
      },
      to: {
        scale: hover ? 0.6 : 0.8,
        speed: hover ? 5 : 2,
      }
    })

    return (
  
      <animated.group
          position={position}
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          scale={spring.scale}
        >
          <Float 

            speed={5}
          >
            <Sparkles
              color={"aqua"}
              size={2}
              count={10}
            />
            <mesh>
              <planeGeometry args={[1, 1, 32,32]}/>
              <MeshDistortMaterial map={texture} transparent speed={5}/>
            </mesh>
            <Text
              font='./fonts/Roboto-Bold.ttf'
              fontSize={0.2}
              fontWeight={50}
              position-y={-0.7}
              color={'#00a8be'}
            >
              {text}
            </Text>
          </Float>
          
        </animated.group >
  
    )
  }

  return (
    <section id='skills'>
      <Canvas>
        
        <ambientLight intensity={2}/>
        <Text
          position-y={2.5}
          color={"#00a8be"}
          font='./fonts/Roboto-Bold.ttf'
        >
          Skills
        </Text>
        <group position-y={-1}>
          <LogoSkill position={[-4,2,0]} texture={htmlTexture} text={'HTML'} />
          <LogoSkill position={[-2,2,0]} texture={cssTexture} text={'CSS'} />
          <LogoSkill position={[0,2,0]} texture={jsTexture} text={'Javascript'} />
          <LogoSkill position={[2,2,0]} texture={reactTexture} text={'React JS'} />
          <LogoSkill position={[4,2,0]} texture={bootTexture} text={'Bootstrap'} />

          <LogoSkill position={[-4,0,0]} texture={blenderTexture} text={'Blender 3D'} />
          <LogoSkill position={[-2,0,0]} texture={unityTexture} text={'Unity'} />
          <LogoSkill position={[0,0,0]} texture={pythonTexture} text={'Python'} />
          <LogoSkill position={[2,0,0]} texture={cPlusTexture} text={'C++'} />
          <LogoSkill position={[4,0,0]} texture={cSharpTexture} text={'C#'} />
        </group>

        {/* <Instances
          limit={100}
          range={100}
          position-z={0}
        >
          <sphereGeometry/>
          <meshNormalMaterial/>
          <Instance 
            color="red"
            scale={1}
            rotation={[Math.PI / 3, 0, 0]}
          />

        </Instances> */}

        
        
      </Canvas>
    </section>
  )
}

export default Skill