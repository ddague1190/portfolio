import { Block, useBlock } from "../utilities/Blocks"
import Plane from "./Plane";
import { Html, Sky } from "@react-three/drei";
import { Text } from "./Text";
import state from "../../store";
import fonts from "../utilities/fonts";
import Model from "../three/avatar/Anim_wave";
import { MultilineText } from "./Text";
import styled from 'styled-components';
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const DD = styled.dd`
position: relative;
color: #f3f4f6;
&::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translate(0, -50%);
    width: 4px;
    height: 4px;
    background-color: #f3f4f6;
    border-radius: 50%;
}
`

export default function Soft({ image, index, offset, factor, header, aspect, text }) {
    const ref = useRef()
    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? 0.65 : 1.2
    const alignRight = (canvasWidth - w * size - margin) / 2
    const pixelWidth = w * state.zoom * size
    const left = !(index % 2)
    const color = index % 2 ? "#FF5656" : "#03a9f4"
    const correctedOffset = w > 10 ? offset : w > 7.2 ? offset - .5 : w > 6 ? offset - .6 : offset - .8



    return (
        <Block factor={factor} offset={correctedOffset}>
            <group position={[0,0,0]}>
                <mesh>
                    <Model scale={5} />
                    <ambientLight intensity={.4} />
                    <directionalLight position={[10, 10, 20]} />
                    <Html
                        className="text-right w-max"
                        position={[-2.6, -.5, 0]}
                    >

                        <button ref={ref} id='href:/about' className="font-bold tracking-tighter inline-flex items-center px-4 py-2 border border-transparent text-5xl rounded-md shadow-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            CV / Contact
                        </button>
                    </Html>
                </mesh>


                {/* <MultilineText left={left} lineHeight={w / 10} position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]} color="red" text={"documentation specialist\nQA/QC\nwriter"} /> */}

                {/* <Block factor={0.2}>
                    <Text opacity={0.5} size={w * 0.5} color="#1A1E2A" position={[((left ? w : -w) / 2) * size, (w * size) / aspect / 1, -10]}>
                        {"0" + (index + 1)}
                    </Text>
                </Block> */}
            </group>
        </Block>
    )
}
