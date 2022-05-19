import { useState } from "react";
import ReactDOM from "react-dom";
import { extend } from "@react-three/fiber"
import DatGui, { DatColor, DatNumber, DatSelect } from "react-dat-gui";
import { Text } from "troika-three-text";
import Montserrat_Bold from "./Montserrat_Bold.json"
// import "react-dat-gui/build/react-dat-gui.css";
import { Block, useBlock } from "../utilities/Blocks"



extend({ Text });

import React from 'react'

const ExperimentalText = ({ text }) => {
  const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()



  const [rotation, setRotation] = useState([Math.PI / 2, Math.PI / 2, 0, 0]);
  const [opts, setOpts] = useState({
    fontSize: .4,
    color: "#333333",
    maxWidth: 10,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial"
  });


  return (
    <>
      <group
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <text
          position-z={-180}
          rotation={rotation}
          {...opts}
          text={text}
          font={Montserrat_Bold}
          anchorX="center"
          anchorY="middle"
        >
          {opts.materialType === "MeshPhongMaterial" ? (
            <meshPhongMaterial attach="material" color={opts.color} />
          ) : null}
        </text>

        <pointLight position={[-300, 0, -160]} />
        <pointLight position={[0, 0, 170]} />
        <pointLight position={[100, 0, -160]} />

      </group>
    </>
  )
}

export default ExperimentalText