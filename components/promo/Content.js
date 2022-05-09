import ReactDOM from "react-dom"
import { useRouter } from 'next/router'
import React, { Suspense, useEffect, useRef, useMemo } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { Html, Sky } from "@react-three/drei"
import { TextureLoader, LinearFilter } from "three"
import lerp from "lerp"
import { Text, MultilineText } from "./Text"
import Plane from "./Plane"
import Plane2 from "./Plane2"
import { Block, useBlock } from "../utilities/Blocks"
import state from "../../store"
import Paragraph from "./Paragraph"
import * as THREE from 'three'
import VideoParagraph from "./VideoParagraph"
import VideoParagraph2 from "./VideoParagraph2"
import Soft from "./Soft";
import Hard from "./Hard"
import Contact from "./Contact"
import LearnerProjects from "./LearnerProjects"
import { size } from "lodash"

export default function Content() {





  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  )

  const heroPic = useLoader(TextureLoader, '/genericcodingpic.jpg')

  useMemo(() => {
    heroPic.minFilter = LinearFilter
  }, [heroPic])

  useMemo(() => images.forEach((texture, index) => {
    if (index == 0) {
      texture.generateMipmaps = false
      // texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping
      texture.needsUpdate = true
    }
    (texture.minFilter = LinearFilter)
  }, [images]))
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
  const sizeFactor = !mobile ? 0.06 : 0.06
  const unCorrectedOffset = 3.2
  const correctedOffset = w > 10 ? unCorrectedOffset : w > 7.2 ? unCorrectedOffset - .4 : w > 6 ? unCorrectedOffset - .55 : unCorrectedOffset - .7
  const contactMeX = w > 12 ? 5 : w > 11 ? 4 : 3
  return (
    <>

      <Block factor={2} offset={0}>
        <Block factor={0} >
          <MultilineText top left size={w * sizeFactor} lineHeight={w / 7} position={[-w / 1.5, 0.5, 0]} color="white" text={"Hello all,\nI am a front-end focused,\nfull-stack web developer"} />
        </Block>
      </Block>

      <VideoParagraph index={0} {...state.paragraphs[0]} image={images[0]} onClick={() => { alert('asdf') }} />

      <Hard index={1} {...state.paragraphs[1]} image={images[1]} />

      <Soft index={2} {...state.paragraphs[2]} image={images[2]} />


      <Block key={0} factor={0} offset={0}>
        <Plane map={heroPic} args={[40, 20, 32, 32]} shift={50} color='white' rotation={[0, 0, Math.PI / 16]} position={[.8, -8, -100]} />
      </Block>

    </>
  )
}