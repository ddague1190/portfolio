import { Block, useBlock } from "../utilities/Blocks"
import Plane from "./Plane";
import { Html } from "@react-three/drei";
import { Text } from "./Text";
import state from "../../store";


const text_1 = 'I am fluent in Python and Javascript. My web technology training spans CSS, HTML, browser APIs, and front- and back-end frameworks like React and Django.'
const text_2 = 'One of things I love about web development is its stacked nature. Once a technology or method is adopted and practiced, you can peel back the layers and learn a topic more deeply. For example, I am strengthening my knowledge of algorithms and advanced data structures - while also formalizing what it means to be a truly accessibility-first, semantic HTML author.'
export function Hard({ image, index, offset, factor, header }) {


    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = 1
    const pixelWidth = w * state.zoom * size
    const left = false
    return (
        <Block factor={factor} offset={offset}>
            <group position={[(-w * size) / 2, (-w * size) / 2 + 3.4, 1]}>
                <Text lineHeight={w / 13} left={left} right={!left} size={w * .05} color={state.boldColor} position={[w / 1.3, .75, 0]}>relevant skills</Text>

                <Html
                    className="pointer-events-none"
                    style={{ width: pixelWidth }}


                >
                    <article className="text-[14px] sm:text-[16px] md:text-xl xl:text-2xl font-bold text-gray-900" tabIndex={index}>
                        {text_1} <br /> <br />{text_2}
                    </article>
                </Html>
                <Block factor={0.2}>
                    <Text position={[0, 1.25, 0]} opacity={0.5} size={w * 0.1} color="#eeeeee" >
                        03
                    </Text>
                </Block>
            </group>

        </Block>
    )
}





