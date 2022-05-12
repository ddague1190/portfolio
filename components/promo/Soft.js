import { Block, useBlock } from "../utilities/Blocks"
import { Html } from "@react-three/drei";
import Model from "../three/avatar/Anim_wave";
import { useRef } from "react";
import { Text } from "./Text";
import state from "../../store";

export default function Soft({ image, index, offset, factor, header, aspect, text }) {
    const ref = useRef()
    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? 0.65 : 1

    return (
        <Block factor={factor} offset={offset}>
            <group position={[0, -2, 0]}>
                <mesh>
                    <Model scale={3.3} />
                    <ambientLight intensity={2} />
                    <Text size={w * 0.05} position={[w/50, 2, 100]} color={state.boldColor}>
                        contact/resume
                    </Text>

                </mesh>

            </group>
        </Block>
    )
}
