import { Block, useBlock } from "../utilities/Blocks"
import { Html } from "@react-three/drei";
import { Text } from "./Text";
import state from "../../store";


const text_1 = 'I know Python, Javascript, CSS, and HTML very well. I have worked extensively with Django, React, and related tooling. '
const text_2 = 'In the next couple months, I will be working towards attaining a similar level of facility on the WordPress and Shopify platforms. I can design to a decent extent and implement those designs with organized and maintainable CSS. I care about accessibility, performance, load times, SEO, and minimizing data. New technologies to me represent an endless-source of motivation.'
const text_3 = 'I believe I can integrate seamlessly into a collaborative environment due to my focus on CS fundamentals, idioms, programming patterns, code organization, Git, and build tools. Obviously there will be a learning curve but I am extremely dogged in this endeavour.'
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
                    <article className="second_smallest text-[16px] md:text-xl xl:text-2xl font-bold text-gray-900" tabIndex={index}>
                        {text_1} <br /> <br />{text_2} <br /> <br />{text_3}
                    </article>
                </Html>
            </group>

        </Block>
    )
}





