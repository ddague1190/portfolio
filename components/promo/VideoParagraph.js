import { Block, useBlock } from "../utilities/Blocks"
import { Text } from "./Text";
import state from "../../store";
import { Html } from "@react-three/drei";

import { ExperimentalVideoPlane } from "./VideoPlane";

export default function VideoParagraph({ image, index, offset, factor, header, aspect }) {

    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? .65 : 1
    const alignRight = (canvasWidth - w * size - margin) / 2 - (!mobile && .4)
    const left = !(index % 2)
    const pixelWidth = w * state.zoom * size


    const text="An e-commerce platform built with React and Django."
    return (
        <Block factor={factor} offset={offset}>
            <group position={[-alignRight, 0, 0]}>
                <ExperimentalVideoPlane args={[1, 1, 32, 32]} shift={150} size={size} aspect={aspect} scale={[w * size*1.2 , (w * size*1.2) / aspect, 1]} />
                <group>
                    <Text lineHeight={w / 13} left={left} right={!left} size={w * .06 } color={state.boldColor} top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + (w/8), -1]}>fish n wire</Text>
                </group>
                <Html
            style={{ width: pixelWidth / (mobile ? 1 : 2), fontSize: '20px' }}
            position={[ mobile ? (-w * size) / 2 : -w/1.8, (-w * size) / 2 / aspect - 0.7, 1]}
            >
            <div className="font-extrabold tracking-tighter text-2xl  text-gray-50 text-left" tabIndex={index}>{text}</div>
          </Html>
            </group>
        </Block>
    )
}
