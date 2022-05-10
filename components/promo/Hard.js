import { Block, useBlock } from "../utilities/Blocks"
import Plane from "./Plane";
import { Html } from "@react-three/drei";
import { Text } from "./Text";
import state from "../../store";
import fonts from "../utilities/fonts";
import { nexticon } from "../utilities/icons";
import styled from 'styled-components';
const DD = styled.dd`
position: relative;
color: #f3f4f6;
&::before {
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translate(0, -50%);
    width: 4px;
    height: 4px;
    background-color: #f3f4f6;
    border-radius: 50%;
}
`


export default function Hard({ image, index, offset, factor, header, aspect, text }) {



    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? 0.65 : 1
    const alignRight = (canvasWidth - w * size - margin) / 2
    const pixelWidth = w * state.zoom * size
    const left = !(index % 2)
    const color = index % 2 ? "blue" : "#03a9f4"
    const correctedOffset = w > 10 ? offset : w > 7.2 ? (offset - .3) : w > 6 ? offset - .45 : offset - .7
    const correctionSkillsX = w > 7.8 ? 2.5 : w > 5.75 ? 1.5 : 1
    return (
        <Block factor={factor} offset={offset}>
            <group position={[left ? -alignRight : alignRight, 0, 0]}>


                <Plane map={image} args={[1, 1, 32, 32]} shift={50} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
                <Html
                    style={{ width: '100vw', pointerEvents: 'none', textAlign: left ? "left" : "right", fontSize: '20px' }}
                    position={[left || mobile ? -w+ correctionSkillsX  : - w-2, (-w * size) / 2 / aspect - 2, 1]}
                >

                    <section className='text-xl sm:text-2xl lg:text-3xl overflow-visible flex flex-col relative py-12' >
                        <dl className="text-gray-50">
                            <dt className="mt-6 font-extrabold text-blue-200 tracking-tighter">Technologies</dt>
                            <DD>Semantic HTML</DD>
                            <DD>Maintainable CSS </DD>
                            <DD>React</DD>
                            <DD>Django</DD>
                            <DD>Related frameworks (see CV)</DD>
                            <dt className="mt-6 font-extrabold text-blue-200 tracking-tighter">Near-term targets for skills expansion</dt>
                            <DD>Node</DD>
                            <DD>Typescript</DD>
                            <DD>WebGL</DD>
                            <DD>Algorithms</DD>
                            <DD>Finding a web dev position</DD>

                        </dl>
                    </section>
                </Html>
                <Text left={left} right={!left} size={w * 0.04} color='white' top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
                    {header}
                </Text>
                {/* <Block factor={0.2}>
                    <Text opacity={0.5} size={w * 0.5} color="#1A1E2A" position={[((left ? w : -w) / 2) * size, (w * size) / aspect / 1, -10]}>
                        {"0" + (index + 1)}
                    </Text>
                </Block> */}
            </group>
        </Block>
    )
}
