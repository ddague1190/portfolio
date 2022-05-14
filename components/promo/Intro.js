import { Block, useBlock } from "../utilities/Blocks"
import Plane from "./Plane";
import { Html } from "@react-three/drei";
import { Text } from "./Text";
import state from "../../store";

export default function IntroductoryStatement({ image, index, offset, factor, header, aspect }) {
  
    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? 1 : 1
    const alignRight = (canvasWidth - w * size - margin) / 2
    const pixelWidth = w * state.zoom * size
    const left = !(index % 2)
    const color = index % 2 ? "#FF5656" : "#03a9f4"
    const text = 'I am an aspiring web developer with a strong foundation in language syntax and idioms, web technologies, and CS principles. I have tremendous respect for the programmers and scientists who paved the way. I work hard to follow their practices correctly and purposefully. Someday I will join their ranks.'

    return (
      <Block factor={factor} offset={offset}>
        <group position={[left ? -alignRight : alignRight, 0, 0]}>
          <Html
          className="pointer-events-none"
            style={{ width: pixelWidth / (mobile ? 1 : 1), textAlign: left ? "left" : "right", fontSize: '20px' }}
            position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}
            >
            <article className="font-bold text-gray-50" tabIndex={index}>{text}</article>
          </Html>
        </group>
      </Block>
    )
  }
