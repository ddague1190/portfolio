import React, { Suspense, useState, useRef } from "react";
import ReactDOM from "react-dom";
import * as THREE from 'three'
import { extend, Canvas, useFrame, useThree, Dom } from '@react-three/fiber'
import DatGui, { DatColor, DatNumber, DatSelect } from "react-dat-gui";
import { Text } from "troika-three-text";
import { EffectComposer, Depth, Pixelation } from "@react-three/postprocessing"
import fonts from "../../utilities/fonts";
import { useIntersect, Image, ScrollControls, Scroll, OrbitControls, useTexture } from '@react-three/drei'
import { useEffect } from "react";
import { createRef } from "react";
import { useBlock } from '../../utilities/Blocks'
import state from '../../../store'
import { useMotionValue } from 'framer-motion'
import useWindowPosition from '../../../lib/useWindowPosition'
import dynamic from 'next/dynamic'



extend({ Text });
const text = "";




const Granular = ({ opts }) => {

    const scrollPosition = useWindowPosition()
    const grain = 10
    const textRef = useRef();
    const grainRef = useRef();
    const { viewportHeight } = useBlock()
    // State:
    const { height } = useThree((state) => state.viewport)



    useFrame(() => {
        const curTop = state.top.current
        const nextY = (curTop)
        grainRef.current.granularity = THREE.MathUtils.lerp(grainRef.current.granularity, nextY, 0.1)
        if (curTop < 1) {
            grainRef.current.granularity = 0
        }
        if (curTop > 200) {
            grainRef.current.granularity = 0
        }

    })


    // Handlers:


    return (
        <group>
            <text
                ref={textRef}
                position-z={-180}
                {...opts}
                text={text}
                font={fonts['Philosopher']}
                anchorX="center"
                anchorY="middle"
            >
                <meshPhongMaterial attach="material" color={opts.color} />
            </text>
            <Suspense fallback={null}>
                <EffectComposer size={[1, 2]}>
                    {scrollPosition < 200 &&
                        <Pixelation ref={grainRef} granularity={0} />}
                </EffectComposer>
            </Suspense>
            <pointLight position={[-100, 0, -160]} />
            <pointLight position={[0, 0, -170]} />
            <pointLight position={[100, 0, -160]} />

        </group>
    );
}

export default Granular



        // <div className='absolute top-0 right-0'>
        //     <DatGui data={opts} onUpdate={setOpts}>
        //         <DatSelect path="font" options={Object.keys(fonts)} />
        //         <DatNumber path="fontSize" min={1} max={50} step={1} />
        //         <DatNumber path="maxWidth" min={50} max={500} step={1} />
        //         <DatNumber path="lineHeight" min={0.5} max={2} step={0.1} />
        //         <DatNumber path="letterSpacing" min={-0.1} max={0.5} step={0.01} />
        //         <DatSelect
        //             path="textAlign"
        //             options={["left", "center", "right", "justify"]}
        //         />
        //         <DatSelect
        //             path="materialType"
        //             label="material"
        //             options={["MeshBasicMaterial", "MeshPhongMaterial"]}
        //         />
        //         <DatColor path="color" />
        //     </DatGui>
        // </div>