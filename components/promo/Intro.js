import { Block, useBlock } from "../utilities/Blocks"
import Plane from "./Plane";
import { Html } from "@react-three/drei";
import { Text } from "./Text";
import state from "../../store";

export default function IntroductoryStatement({ image, index, offset, factor, header  }) {

  const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
  const size =  1
  const pixelWidth = w * state.zoom * size
  const text = 'I am an aspiring web developer with a strong foundation in programming language syntax and idioms, web technologies, and CS principles. I have tremendous respect for the programmers and scientists who paved the way. I work hard to follow their practices correctly and purposefully - which, of course, is ultimately necessary to attain fluidity and expressivity with the code. Learning to program has informed and improved many aspects of my life. My goal is to practice and build upon this learning by attaining a web development position.'

  return (
    <Block factor={factor} offset={offset}>
      <group position={[(-w * size) / 2, (-w * size) / 2 + 4, 1]}>
        <Text size={w * 0.05} position={[w/2, .5, 0]} color={state.boldColor}>
          overview
        </Text>
        <Html
          className="pointer-events-none"
          style={{ width: pixelWidth / (mobile ? 1 : 1), fontSize: '20px' }}
        >
          <article className="text-base md:text-xl xl:text-2xl  font-bold text-gray-900" tabIndex={index}>{text}</article>
        </Html>
        <Block factor={0.2}>
          <Text opacity={0.5} size={w * 0.1} color="#efefef" position={[0, 1, 0]}>
            01
          </Text>
        </Block>
      </group>
    </Block>
  )
}
