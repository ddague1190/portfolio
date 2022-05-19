import React, { forwardRef, useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'
import lerp from "lerp"
import "./CustomMaterial"
import state from "../../store"





const CustomStripe = forwardRef(({ color = "white", shift = 100, opacity = 1, args, ...props }, ref) => {
    const material = useRef()
    let last = state.top.current
    const heroPic = useLoader(TextureLoader, '/genericcodingpic.jpg')

    useMemo(() => {
      heroPic.minFilter = LinearFilter
    }, [heroPic])
    useFrame(() => {
        const { pages, top } = state
        material.current.shift = lerp(material.current.shift, ((top.current - last) / shift) * 1.5, 0.1)
        last = top.current
    })
    return (
 
        <mesh ref={ref} {...props}>
            <planeBufferGeometry attach="geometry" args={args} />
            <customMaterial ref={material}  />
        </mesh>

    )
})

export default CustomStripe
CustomStripe.displayName= 'CustomStripe'
