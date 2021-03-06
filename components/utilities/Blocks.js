import * as THREE from "three"
import React, { createContext, useRef, useContext } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import state from "../../store"
const offsetContext = createContext(0)

function Block({ children, offset, factor, ...props }) {
  const { offset: parentOffset, sectionHeight } = useBlock()
  const ref2 = useRef()
  const ref = useRef()
  offset = offset !== undefined ? offset : parentOffset
  useFrame(() => {
    const curY = ref.current.position.y
    const curTop = state.top.current

    // factor how fast 
    // offset where on screen initially and from which direction to enter
    // when -sectionHeight (which is equal to canvas height if pages and sections are equal)*offset*factor = 0, then group will be center
    ref.current.position.y = THREE.MathUtils.lerp(curY, (curTop / state.zoom) * factor, .15)
  })
  return (
    <offsetContext.Provider value={offset}>
      <group {...props} ref={ref2} position={[0, -sectionHeight * offset * factor, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  )
}

function useBlock() {
  const { sections, pages, zoom } = state
  const { size, viewport } = useThree()
  const offset = useContext(offsetContext)
  const viewportWidth = viewport.width * zoom
  const viewportHeight = viewport.height * zoom
  const canvasWidth = viewportWidth / zoom
  const canvasHeight = viewportHeight / zoom
  const mobile = size.width < 700
  const margin = canvasWidth * (mobile ? 0.2 : 0.1)
  let contentMaxWidth = canvasWidth * (mobile ? 0.8 : 0.6)
  if (contentMaxWidth > 12) contentMaxWidth = 12
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1))
  const offsetFactor = (offset + 1.0) / sections

  return {
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    sectionHeight,
    offsetFactor
  }
}

export { Block, useBlock }
