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




const TroikaText = ({ text, options }) => {

    const scrollPosition = useWindowPosition()
    const textRef = useRef();
    const grainRef = useRef();
    const { viewportHeight } = useBlock()
    // State:
    const { height } = useThree((state) => state.viewport)
    
    // useEffect(() => {
    //     grainRef.current.granularity = 0
    // }, [])

    useFrame(() => {
        const curTop = state.top.current
        const nextY = (curTop)
        // grainRef.current.granularity = THREE.MathUtils.lerp(grainRef.current.granularity, nextY, 0.1)
        // if(curTop<1) {
        //     grainRef.current.granularity = 0
        // }
        // if(curTop > 300) {
        //     grainRef.current.granularity = 0
        // }

    })


    // Handlers:


    return (
        <group>
            <text
                ref={textRef}
                position-z={-180}
                {...options}
                text={text}
                font={fonts['Philosopher']}
                anchorX="center"
                anchorY="middle"
            >
                <meshPhongMaterial attach="material" color={options.color} />
            </text>

            <pointLight position={[-100, 0, -160]} />
            <pointLight position={[0, 0, -170]} />
            <pointLight position={[100, 0, -160]} />

        </group>
    );
}

export default TroikaText


