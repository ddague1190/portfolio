
import React, { useMemo } from "react"
import * as THREE from 'three'
import { useLoader } from "@react-three/fiber"
import { TextureLoader, LinearFilter } from "three"
import { Text, MultilineText } from "./Text"
import Plane from "./Plane"
import { Block, useBlock } from "../utilities/Blocks"
import state from "../../store"
import VideoParagraph from "./VideoParagraph"
import Soft from "./Soft";
import Hard from "./Hard"


export default function Content() {
  const images = useLoader(
    TextureLoader, ['/langicons.png'])

  const heroPic = useLoader(TextureLoader, '/genericcodingpic.jpg')

  useMemo(() => {
    heroPic.minFilter = LinearFilter
  }, [heroPic])

  useMemo(() => images.forEach((texture, index) => {
    texture.generateMipmaps = false
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping
    texture.needsUpdate = true
    texture.minFilter = LinearFilter
  }), [images])
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()


  return (
    <>


      <Block factor={1} offset={0}>
        <Block factor={1.2}>

          <Text left size={w * .15} position={[-w / 3, 1, 0]} color={state.boldColor}>
            hello!
          </Text>
          <MultilineText size={w * .05} lineHeight={w / 10} position={[-w / 50, -1, -1]} text={`You\'ve landed on Darryl\'s\nweb dev portfolio page`} color='black' />



        </Block>

      </Block>

      <VideoParagraph index={0} {...state.paragraphs[0]} />

      <Hard index={1} {...state.paragraphs[1]} image={images[0]} />

      <Soft index={2} {...state.paragraphs[2]} />


      <Block key={0} factor={1} offset={0}>
        <Plane materialShift map={heroPic} args={[50, 10, 32, 32]} shift={40} rotation={[0, Math.PI / 8, Math.PI / 32]} position={[7, 6, -200]} />
      </Block>

    </>
  )
}