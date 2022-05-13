import { useState, useEffect } from "react"
import * as THREE from 'three'
import { Reflector, Text, useTexture, useGLTF } from '@react-three/drei'


function VideoText({ clicked, ...props }) {

    return (
      <Text font="/Galley.otf" fontSize={3} letterSpacing={-0.06} {...props}>
        darryl
        {/* <meshBasicMaterial toneMapped={false}>
          <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial> */}
      </Text>
    )
  }

export default VideoText