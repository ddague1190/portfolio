
import React, { useMemo, useEffect } from "react"
import * as THREE from 'three'
import { useLoader } from "@react-three/fiber"
import { TextureLoader, LinearFilter } from "three"
import { MultilineText } from "./Text"
import Plane from "./Plane"
import { Block, useBlock } from "../utilities/Blocks"
import state from "../../store"
import VideoParagraph from "./VideoParagraph"
import Soft from "./Soft";
import { Hard } from "./Hard"
import IntroductoryStatement from "./Intro"




export default function Content() {

  const heroPic = useLoader(TextureLoader, '/genericcodingpic.jpg')

  useMemo(() => {
    heroPic.minFilter = LinearFilter
    heroPic.generateMipmaps = false
    heroPic.wrapS = heroPic.wrapT = THREE.ClampToEdgeWrapping
    heroPic.needsUpdate = true
  }, [heroPic])


  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()


  return (
    <>
      <Block factor={1} offset={0.09}>
        <Block factor={1}>

          <MultilineText size={w * .05} lineHeight={w / 13} position={[-w / 100, 3.5, -1]} text={`Building from exuberance\nto exacting specifications.`} color='white' />
        </Block>
      </Block>
      <IntroductoryStatement index={8} offset={.75} factor={1} aspect={3} />
      <VideoParagraph index={1} {...state.paragraphs[0]} />
      <Hard index={2} {...state.paragraphs[1]} />
      <Soft index={3} {...state.paragraphs[3]} />

      <Block key={0} factor={2} offset={-.75}>
        <Plane materialShift map={heroPic} args={[50, 50, 32, 32]} shift={40} rotation={[0, 0, -Math.PI / 2.2]} position={[-2, 8, -20]} />
      </Block>

      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>

          <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 16]} position={[0, 0, -20]} />
        </Block>
      ))}

    </>
  )
}