import { useState, useEffect } from "react"
import * as THREE from 'three'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'


function VideoText({ clicked, ...props }) {
    // const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true }))
    // useEffect(() => void (clicked && video.play()), [video, clicked])
    return (
      <Text font="/fonts/helvetiker_regular.typeface.json" fontSize={3} letterSpacing={-0.06} {...props}>
        darryl
        {/* <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial> */}
      </Text>
    )
  }

export default VideoText