import { Canvas } from "@react-three/fiber"
import React from 'react'
import { Sky } from "@react-three/drei"
const clouds = (props) => {
  return (
    <Canvas>
    <Sky
        distance={450000}
        sunPosition={[5, 1, 8]}
        inclination={0}
        azimuth={0.25}
        {...props}
    />
 </Canvas>
  )
}

export default clouds