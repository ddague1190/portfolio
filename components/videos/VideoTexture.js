import * as THREE from 'three'
import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useAspect } from '@react-three/drei'

function Scene() {
  const size = useAspect(1800, 1000)
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), { src: '/10.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }),
  )
  useEffect(() => void video.play(), [video])
  return (
    <mesh scale={size}>
      <planeBufferGeometry />
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas orthographic>
      <Scene />
    </Canvas>
  )
}
