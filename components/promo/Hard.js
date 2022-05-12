import { Block, useBlock } from "../utilities/Blocks"
import Plane from "./Plane";
import { Html } from "@react-three/drei";
import { Text } from "./Text";
import state from "../../store";
import styled from 'styled-components';

const DD = styled.dd`
position: relative;
font-size: 1.2rem;
line-height: 1.4rem;
color: #5a5a5a;
&::before {
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translate(0, -50%);
    width: 4px;
    height: 4px;
    background-color: #43bdff;
    border-radius: 50%;
}
`


export default function Hard({ image, index, offset, factor, header, aspect, text }) {


    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? 0.65 : 1
    const alignRight = (canvasWidth - w * size - margin) / 2
    const pixelWidth = w * state.zoom * size
    const left = !(index % 2)
    const correctionSkillsX = w > 7.8 ? 1.5 : w > 5.75 ? 1.8 : w > 4.3 ? 1.3 : 1
    return (
        <Block factor={factor} offset={offset}>
            <group position={[left ? -alignRight : alignRight, 0, 0]}>


                <Plane map={image} args={[1, 1, 32, 32]} shift={40} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
                <Html
                    style={{ width: '100vw', pointerEvents: 'none', textAlign: left ? "left" : "right", fontSize: '20px' }}
                    position={[left || mobile ? -w + correctionSkillsX : - w - 2, (-w * size) / 2 / aspect - 3, 1]}
                >

                    <section className='text-xl sm:text-2xl lg:text-3xl overflow-visible flex flex-col relative py-12' >
                        <dl className="text-gray-50">
                            <dt className="mt-10 font-extrabold text-[#43bdff] tracking-tighter">Languages</dt>
                            <DD>HTML</DD>
                            <DD>CSS</DD>
                            <DD>Python</DD>
                            <DD>Javascript</DD>
                            <dt className="mt-10 font-extrabold text-[#43bdff] tracking-tighter">Near-term targets for growth</dt>
                            <DD>Typescript</DD>
                            <DD>Node backend</DD>
                            <DD>WebGL</DD>
                            <DD>Deeper study of Algorithms</DD>

                        </dl>
                    </section>
                </Html>
                <Text left={left} right={!left} size={w * 0.04} color='white' top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
                    {header}
                </Text>
            </group>
        </Block>
    )
}
