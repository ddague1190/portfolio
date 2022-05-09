//inspired by https://codesandbox.io/s/tender-worker-sh76f?from-embed=&file=/src/store.js:91-224
import Portal from "../components/utilities/Portal"
import * as THREE from "three"
import React, { useRef, useEffect, useState, Suspense } from "react"
import fonts from "../components/utilities/fonts"
import { ReactDOM } from "react"
import { Canvas, useFrame, Dom, useLoader } from "@react-three/fiber"
import state from "../store"
import { Block, useBlock } from "../components/utilities/Blocks"
import Model from "../components/three/avatar/Anim_wave"
import Granular from "../components/three/text/Granular";
import DatGui, { DatColor, DatNumber, DatSelect } from "react-dat-gui";
import { Html, OrbitControls, useTexture, Plane as DreiPlane } from "@react-three/drei"
import { PlaneGeometry } from "three"
import { MeshBasicMaterial } from "three"
import Ground from "../components/three/avatar/Ground"
import TroikaText from "../components/three/text/Text"
import FrontPageAbout from "../components/promo/FrontPageAbout"
import Content from "../components/promo/Content"
import { addOverflowHidden, removeOverflowHidden } from "../lib/homeOverflowStyles"
import Diamonds from "../components/promo/diamonds/Diamonds"
import Spinner from "../components/promo/Loader"
import { useRouter } from "next/router"

export default function Home() {
    const router = useRouter()
    useEffect(() => {
        addOverflowHidden();
        return removeOverflowHidden
    }, [])


    useEffect(() => {

        const goToBuildPage = (e) => {
            e.preventDefault();

            if (e.target.id === 'href:/projects/fishnstik') {
                router.push('/projects/fishnstik')
            }
            else if (e.target.id === 'href:/projects/') {
                router.push('/projects')
            }
            else if (e.target.id === 'href:/about') {
                router.push('/about')
            }
 
        }
        document.addEventListener('click', goToBuildPage)
        return () => {
            removeEventListener('click', goToBuildPage)
        }
    }, [])
    const scrollArea = useRef()
    const onScroll = (e) => (state.top.current = e.target.scrollTop)
    useEffect(() => void onScroll({ target: scrollArea.current }), [])
    return (
        <>
            <Canvas linear orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
                <Suspense fallback={<Html center className="text-white text-3xl font-bold tracking-tighter" >Loading...</Html>}>
                    <Content />
                    <Diamonds />
                </Suspense>
            </Canvas>
            <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
                {new Array(state.sections).fill().map((_, index) => (
                    <div key={index} id={"0" + index} style={{ height: `${(state.pages/ state.sections) * 100}vh` }} />
                ))}
            </div>
        </>
    )
}




