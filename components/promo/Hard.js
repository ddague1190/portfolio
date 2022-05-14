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


export default function Hard({ image, index, offset, factor, header, aspect }) {


    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? 0.65 : 1
    const alignRight = (canvasWidth - w * size - margin) / 2
    const pixelWidth = w * state.zoom * size
    const left = false
    const correctionSkillsX = w > 7.8 ? 1.5 : w > 5.75 ? 1.8 : w > 4.3 ? 1.3 : 1
    const text = 'asdf'
    return (
        <Block factor={factor} offset={offset}>
            <group position={[left ? -alignRight : alignRight, 0, 0]}>


                <Plane map={image} args={[1, 1, 32, 32]} shift={40} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />

                <Text left={left} right={!left} size={w * 0.04} color={state.boldColor} top position={[((-w) * size) / 50, (w * size) / aspect / 2 + 0.5, -1]}>
                    iconic tooling
                </Text>
                <Html
                className="pointer-events-none"
                    style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: left ? "left" : "right", fontSize: '20px' }}
                    position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}
                >
                    <div className="font-bold text-white" tabIndex={index}>{text}</div>
                </Html>
            </group>
        </Block>
    )
}
