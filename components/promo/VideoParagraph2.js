import { Block, useBlock } from "../utilities/Blocks"
import { useState, useEffect, useRef } from "react";
import * as THREE from 'three'
import Plane from "./Plane";
import { Html, useAspect } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Text } from "./Text";
import state from "../../store";
import fonts from "../utilities/fonts";
import lerp from 'lerp'
export default function VideoParagraph2({ image, index, offset, factor, header, aspect, text }) {
    const { viewportHeight, offsetFactor } = useBlock()
    const material = useRef()
    let last = state.top.current
    let shift = 10
    let opacity = 1


    const [video] = useState(() =>
        Object.assign(document.createElement('video'), { src: '/fishnstik_demo.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }),
    )
    useEffect(() => void video.play(), [video])
    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? 0.65 : 1
    const alignRight = (canvasWidth - w * size - margin) / 2
    const pixelWidth = w * state.zoom * size
    const left = !(index % 2)
    const color = index % 2 ? "#005656" : "#03a9f4"

    useFrame(() => {
        const { pages, top } = state
        // material.current.scale = lerp(material.current.scale, offsetFactor - top.current / ((pages - 1) * viewportHeight), 0.1)
        material.current.shift = lerp(material.current.shift, ((top.current - last) / shift) * 1.5, 0.1)
        last = top.current
    })

    return (
        <Block factor={factor} offset={offset}>
            <group position={[left ? -alignRight : alignRight, 0, 0]}>
                <mesh  aspect={aspect} scale={[w * size, (w * size) / aspect, 1]}>
                    <planeBufferGeometry />
                    <customMaterial ref={material} color={color} transparent opacity={opacity}>

                        {/* <meshBasicMaterial toneMapped={false}> */}
                        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
                        {/* </meshBasicMaterial> */}
                    </customMaterial>
                </mesh>
                {/* <Plane map={image} args={[1, 1, 32, 32]} shift={75} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} /> */}
                <Html
                    className="cursor-pointer pointer-events-none"
                    style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: left ? "left" : "right", fontSize: '20px' }}
                    position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}
                >
                    <div className="text-gray-50 font-bold" tabIndex={index}>{text}</div>
                </Html>
                <Text left={left} right={!left} size={w * 0.04} color="#f1f1f1" top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
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


VideoParagraph2.displayName = 'VideoParagraph2';