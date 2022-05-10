import React, { forwardRef, useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import lerp from "lerp"
import "./CustomMaterial"
import state from "../../store"
import { Suspense } from "react"

const VideoPlane = forwardRef(({ color = "white", shift = 1, opacity = 1, args, map, ...props }, ref) => {
    const material = useRef()
    let last = state.top.current
    const [video] = useState(() =>
        Object.assign(document.createElement('video'), { src: "https://d3f2mb23naggdc.cloudfront.net/fishnstik_demo.mp4", crossOrigin: 'Allow-Origin', loop: true, muted: true }),
    )
    useEffect(() => void video.play(), [video])
    useFrame(() => {
        const { pages, top } = state
        material.current.shift = lerp(material.current.shift, ((top.current - last) / shift) * 1.5, 0.1)
        last = top.current
    })
    return (
        <Suspense fallback={

            <video controls width="">

              
            <source src="https://d3f2mb23naggdc.cloudfront.net/fishnstik_demo.mp4"
              type="video/mp4"/>

              Sorry, your browser does not support embedded videos.
            </video>
        }>

        <mesh ref={ref} {...props}>
            <planeBufferGeometry args={args} />
            <customMaterial ref={material} color={color} transparent opacity={opacity}>
                <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
            </customMaterial>
        </mesh>
        </Suspense>

    )
})

export default VideoPlane

VideoPlane.displayName = 'VideoPlane';