//inspired by https://codesandbox.io/s/tender-worker-sh76f?from-embed=&file=/src/store.js:91-224
import React, { useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import state from "../store"
import { Html } from "@react-three/drei"
import Content from "../components/promo/Content"
import { addOverflowHidden, removeOverflowHidden } from "../lib/homeOverflowStyles"
import Diamonds from "../components/promo/diamonds/Diamonds"
import { useRouter } from "next/router"
import Plane from "../components/promo/Plane";
import lerp from 'lerp'




function Startup() {
    const ref = useRef()
    useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
    return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}


export default function Home() {
    const router = useRouter()
    useEffect(() => {
        addOverflowHidden();
        return removeOverflowHidden
    }, [])


    useEffect(() => {

        const goToBuildPage = (e) => {
            e.preventDefault();

            if (e.target.id === '01') {
                router.push('/projects/fishnstik')
            }
            else if (e.target.id === 'href:/projects/') {
                router.push('/projects')
            }
            else if (e.target.id === 'href:/about') {
                router.push('/about')
            }
            else if (e.target.id === '03') {
                router.push('/about')
            }

        }
        document.addEventListener('click', goToBuildPage)
        return () => {
            removeEventListener('click', goToBuildPage)
        }
    }, [router])
    const scrollArea = useRef()
    const onScroll = (e) => (state.top.current = e.target.scrollTop)
    useEffect(() => void onScroll({ target: scrollArea.current }), [])
    return (
        <>
            <Canvas linear dpr={[1, 2]} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
                <Suspense fallback={<Html center className="text-white text-3xl font-bold tracking-tighter" >Loading...</Html>}>
                    <Content />
                    <Diamonds />
                </Suspense>
            </Canvas>
            <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
                {new Array(state.sections).fill().map((_, index) => (
                    <div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
                ))}
            </div>
        </>
    )
}




