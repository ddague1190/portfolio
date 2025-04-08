import { Block, useBlock } from "../utilities/Blocks"
import { Text } from "./Text";
import state from "../../store";
import { Html } from "@react-three/drei";

import { ExperimentalVideoPlane } from "./VideoPlane";

export default function VideoParagraph({ image, index, offset, factor, header, aspect }) {

    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? .65 : 1
    const alignRight = (canvasWidth - w * size - margin) / 2 - (!mobile && .4)
    const left = false
    const pixelWidth = w * state.zoom * size


    const text = "A quick demo of an e-commerce platform I made with React and Django."
    return (
        <Block factor={factor} offset={offset}>
            <group position={[0, 0, 0]}>
                <ExperimentalVideoPlane args={[1, 1, 32, 32]} shift={200} size={size} aspect={aspect} scale={[w * size * 1.2, (w * size * 1.2) / aspect, 1]} />

                <Text lineHeight={w / 13} left={left} right={!left} size={w * .05} color={state.boldColor} top position={[(w) / 3, (w * size) / aspect / 2 + (w / 8), -1]}>project demo</Text>

                <Html
                    className="pointer-events-none"
                    style={{ width: pixelWidth, fontSize: '20px' }}
                    position={[(-w * size) / 2, (-w * size) / 2 / aspect - 0.7, 1]}
                >
                    <p className="text-base md:text-xl xl:text-2xl  font-extrabold tracking-tighter text-gray-500 text-left" tabIndex={index}>{text} <button type='button' disabled className='text-base md:text-xl xl:text-2xl outline-none ml-1 bg-transparent text-black'> [see more]</button></p>
                </Html>
            </group>

        </Block>
    )
}
