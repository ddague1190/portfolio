import React, { forwardRef, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import lerp from "lerp"
import "./CustomMaterial"
import { useBlock } from "../utilities/Blocks"
import state from "../../store"

const Plane = forwardRef(({ color = "white", shift = 1, opacity = 1, args, map, materialShift, ...props }, ref) => {

  const { viewportHeight, offsetFactor } = useBlock()
  const material = useRef()
  let last = state.top.current
  useFrame(() => {
    const { pages, top } = state
    if(materialShift) material.current.scale = lerp(material.current.scale, offsetFactor - top.current / ((pages - 1) * viewportHeight), .1)
    material.current.shift = lerp(material.current.shift, ((top.current - last) / shift) * 1.5, 0.1)
    last = top.current
  })
  return (
    <mesh ref={ref} {...props}>
      <planeBufferGeometry args={args} />
      <customMaterial ref={material} color={color} map={map} transparent opacity={opacity} />
    </mesh>
  )
})

export default Plane

Plane.displayName = 'Plane';