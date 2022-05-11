import React, { forwardRef, useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import lerp from "lerp"
import "./CustomMaterial"
import state from "../../store"


export const ExperimentalVideoPlane = forwardRef(({ color = "white", shift = 1, opacity = 1, args, map, ...props }, ref) => {
    const meshRef = useRef();
    const material = useRef()
    useEffect(() => {
      const vid = document.createElement("video");
      vid.src = "https://d3f2mb23naggdc.cloudfront.net/fishnstik_demo.mp4";
      vid.crossOrigin = "Allow-Origin";
      vid.loop = vid.muted = vid.playsInline = true;
      vid.play();
      vid.encoding = THREE.sRGBEncoding;
      material.current.map = new THREE.VideoTexture(vid);
    });
    let last = state.top.current

    useFrame(() => {
        const { pages, top } = state
        material.current.shift = lerp(material.current.shift, ((top.current - last) / shift) * 1.5, 0.1)
        last = top.current
    })

    return (
      <mesh ref={meshRef} {...props}>
        <planeGeometry attach="geometry" args={args} />
        <customMaterial ref={material}  />
      </mesh>
    );
  });


const VideoPlane = forwardRef(({ color = "white", shift = 1, opacity = 1, args, ...props }, ref) => {
    const material = useRef()
    let last = state.top.current
    const [video] = useState(() =>
        Object.assign(document.createElement('video'), { src: "https://d3f2mb23naggdc.cloudfront.net/fishnstik_demo.mp4", crossOrigin: 'Allow-Origin', loop: true, muted: true, playsInline: true}),
    )
    useEffect(() => void video.play(), [video])
    useFrame(() => {
        const { pages, top } = state
        material.current.shift = lerp(material.current.shift, ((top.current - last) / shift) * 1.5, 0.1)
        last = top.current
    })
    return (
 
        <mesh ref={ref} {...props}>
            <planeBufferGeometry attach="geometry" args={args} />
            <customMaterial ref={material}  >
                <videoTexture attach='map' args={[video]} encoding={THREE.sRGBEncoding} />
            </customMaterial>
        </mesh>

    )
})

export default VideoPlane
ExperimentalVideoPlane.displayName= 'ExperimentalVideoPlane';
VideoPlane.displayName = 'VideoPlane';