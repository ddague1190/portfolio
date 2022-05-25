import { Block, useBlock } from "../utilities/Blocks"
import { Html } from "@react-three/drei";
import { Text } from "./Text";
import state from "../../store";

export default function IntroductoryStatement({ image, index, offset, factor, header  }) {

  const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
  const size =  1
  const pixelWidth = w * state.zoom * size
  const text = 'I have a never-ending thirst for the building. '

  return (
    <Block factor={factor} offset={offset}>
      <group position={[(-w * size) / 2, (-w * size) / 2 + 4, 1]}>
        <Text size={w * 0.05} position={[w/2, .75, 0]} color={state.boldColor}>
          overview
        </Text>
        <Html
          className="pointer-events-none"
          style={{ width: pixelWidth / (mobile ? 1 : 1), fontSize: '20px' }}
        >
          <p className="second_smallest text-[16px] md:text-xl xl:text-2xl  font-bold text-gray-900" tabIndex={index}>{text}</p>
        </Html>
        <Block factor={0.2}>
          <Text opacity={0.5} size={w * 0.1} color="#efefef" position={[0, 1.25, 0]}>
            01
          </Text>
        </Block>
      </group>
    </Block>
  )
}
