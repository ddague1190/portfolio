import * as THREE from 'three'
import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Reflector, Text, useTexture, useGLTF, OrbitControls } from '@react-three/drei'
import Model from "./Anim_turn";
import Model_wave from "./Anim_wave";
import Ground from "./Ground";
import VideoText from "./VideoText"


export default function Scene() {
    return (
        <Canvas   gl={{ alpha: false }} camera={{ position: [20, 1, 3], fov: 50 }}>

          <directionalLight position={[10, 10, 50]} intensity={200} />

            <Model_wave  scale={3} position={[0,-5,0]}/>


        </Canvas>
    );
}


//             {/* <color attach="background" args={['#000000']} />
//             <fog attach="fog" args={['black', 15, 20]} /> */}
// <Suspense fallback={null}>
// <group position={[0, -1, 0]}>
//     <Model  rotation={[0, Math.PI - 0.4, 0]} position={[-1.2, 0, 0.6]} scale={[1,1,1]}/>
//     {/* <Ground /> */}
//     <VideoText position={[0, 1.3, -2]}  />
// </group>
// <ambientLight intensity={0.5}  />
// <spotLight position={[0, 10, 0]} intensity={0.3} />
// <directionalLight position={[-20, -20, -10]} intensity={0.7} />
// </Suspense>