
import React, { useMemo } from "react"
import { useLoader } from "@react-three/fiber"
import { TextureLoader, LinearFilter } from "three"
import { Text } from "./Text"
import Plane from "./Plane"
import { Block, useBlock } from "../utilities/Blocks"
import state from "../../store"
import VideoParagraph from "./VideoParagraph"
import Soft from "./Soft";
import Hard from "./Hard"
import { Html } from "@react-three/drei"


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
  }), [images])
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
  const sizeFactor = !mobile ? 0.06 : 0.06
  const unCorrectedOffset = 3.2
  const correctedOffset = w > 10 ? unCorrectedOffset : w > 7.2 ? unCorrectedOffset - .4 : w > 6 ? unCorrectedOffset - .55 : unCorrectedOffset - .7
  const contactMeX = w > 12 ? 5 : w > 11 ? 4 : 3
  const size = w * sizeFactor < .75 ? w * sizeFactor : .75
  return (
    <>

      <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Text left size={w * 0.15} position={[-w / 3.2, 2, -1]} color="black">
            Hello! 
          </Text>
        </Block>
        <Block factor={1.0}>
          <Html className="bottom-left pointer-events-none" style={{ color: "white" }} position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
            <div className="text-4xl w-max font-extrabold text-white tracking-tighter mb-5">{`Darryl Dague's portfolio`}</div>
            <div className="text-2xl w-max font-light"> -front-end focused,{mobile ? <br /> : ""} full-stack web developer.</div>
          </Html>
        </Block>
        {/* <Block factor={1.2} >
          <MultilineText top left size={w *.15} lineHeight={w / 7} position={[-w / 3.2, 0.5, -1]} color="gray" text={"Hello all,\nI am a front-end focused,\nfull-stack web developer"} />
        </Block> */}
      </Block>

      <VideoParagraph index={0} {...state.paragraphs[0]} image={images[0]} onClick={() => { alert('asdf') }} />

      <Hard index={1} {...state.paragraphs[1]} image={images[1]} />

      <Soft index={2} {...state.paragraphs[2]} image={images[2]} />


      <Block key={0} factor={1} offset={0}>
        <Plane materialShift map={heroPic} args={[50, 10, 32, 32]}   shift={40} rotation={[0, Math.PI/8, Math.PI / 32]} position={[-1,5,-200]} />
      </Block>

    </>
  )
}