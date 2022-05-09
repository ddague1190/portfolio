import React, { forwardRef, useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import lerp from "lerp"
import "./CustomMaterial"
import { useBlock } from "../utilities/Blocks"
import state from "../../store"

const VideoPlane = forwardRef(({ color = "white", shift = 1, opacity = 1, args, map, ...props }, ref) => {
    const { viewportHeight, offsetFactor } = useBlock()
    const material = useRef()
    let last = state.top.current
    const [video] = useState(() =>
        Object.assign(document.createElement('video'), { src: "https://ddague1190portfolio.s3.amazonaws.com/fishnstik_demo.mp4", crossOrigin: 'Anonymous', loop: true, muted: true }),
    )
    useEffect(() => void video.play(), [video])
    useFrame(() => {
        const { pages, top } = state
        // material.current.scale = lerp(material.current.scale, offsetFactor - top.current / ((pages - 1) * viewportHeight), 0.1)
        material.current.shift = lerp(material.current.shift, ((top.current - last) / shift) * 1.5, 0.1)
        last = top.current
    })
    return (
        <mesh ref={ref} {...props}>
            <planeBufferGeometry args={args} />
            <customMaterial ref={material} color={color} transparent opacity={opacity}>
                <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
            </customMaterial>
        </mesh>
    )
})

export default VideoPlane

VideoPlane.displayName = 'VideoPlane';