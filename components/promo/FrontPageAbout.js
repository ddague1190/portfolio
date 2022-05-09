import React from 'react'
import { Html } from "@react-three/drei";
import { useBlock } from "../utilities/Blocks";
import state from "../../store";
const FrontPageAbout = () => {
    const {viewportWidth, canvasWidth, contentMaxWidth} = useBlock()
    return (
        <Html style={{minWidth: (contentMaxWidth *state.zoom), backgroundColor:'blue'}} >
            <aside className="mx-auto text-left bg-red-500">
                <h1 className="font-extrabold font-3xl">asdfasdfasdfk kaskaskkakkakka vkakakaka</h1>
            </aside>
        </Html>
    )
}

export default FrontPageAbout