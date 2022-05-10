import { Block, useBlock } from "../utilities/Blocks"
import { Html, Sky } from "@react-three/drei";
import Model from "../three/avatar/Anim_wave";
import styled from 'styled-components';
import { useRef } from "react";


export default function Soft({ image, index, offset, factor, header, aspect, text }) {
    const ref = useRef()
    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? 0.65 : 1

    return (
        <Block factor={factor} offset={offset}>
            <group position={[0,-2,0]}>
                <mesh>
                    <Model scale={3.3} />
                    <ambientLight intensity={.4} />
                    <directionalLight position={[10, 10, 20]} />
                    <Html
                        className="text-right w-max"
                        position={[-1.2, 0, 0]}
                    >

                        <button ref={ref} id='href:/about' className="font-bold tracking-tighter inline-flex items-center px-4 py-2 border border-transparent text-3xl rounded-md shadow-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            CV / Contact
                        </button>
                    </Html>
                </mesh>

            </group>
        </Block>
    )
}
