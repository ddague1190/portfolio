import { Vector3, TextBufferGeometry } from "three"
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import * as THREE from 'three'
import React, { useCallback, useRef, useMemo } from "react"
import { useLoader, useFrame } from "@react-three/fiber"
import { useAsset } from "use-asset"
import lerp from "lerp"
import state from "../../store";
import MOONGET from './MOONGET.json'

class TextGeometry extends THREE.ExtrudeGeometry {

  constructor(text, parameters = {}) {

    const font = parameters.font;

    if (font === undefined) {
      super(); // generate default extrude geometry

    } else {

      const shapes = font.generateShapes(text, parameters.size); // translate parameters to THREE.ExtrudeGeometry API

      parameters.depth = parameters.height !== undefined ? parameters.height : defaults; // defaults

      if (parameters.bevelThickness === undefined) parameters.bevelThickness = .01;
      if (parameters.bevelSize === undefined) parameters.bevelSize = .01;
      if (parameters.bevelEnabled === undefined) parameters.bevelEnabled = false;
      super(shapes, parameters);

    }

    this.type = 'TextGeometry';

  }
}





export function Text({ children, size = 1, left, right, top, bottom, color = "white", opacity = 1, height = 0.01, layers = 0, font = "fonts/helvetiker_regular.typeface.json", ...props }) {

  // const data = useLoader(FontLoader, "/MOONGET_Heavy.blob")

  const data = new FontLoader().parse(MOONGET)
  const geom = useAsset(() => new Promise((res) => res(new TextGeometry(children, { font: data, size: 1, height }))), [children])
  const onUpdate = useCallback(
    (self) => {
      const box = new Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(box)
      self.position.x = left ? 0 : right ? -box.x : -box.x / 2
      self.position.y = top ? 0 : bottom ? -box.y : -box.y / 2
      self.position.z = 100
    },
    [left, right, top, bottom]
  )

  const ref = useRef()
  let last = state.top.current
  useFrame(() => {
    ref.current.shift = lerp(ref.current.shift, (state.top.current - last) / 100, 0.1)
    last = state.top.current
  })

  return (
    <group {...props} scale={[size, size, 0.1]}>
      <mesh geometry={geom} onUpdate={onUpdate} frustumCulled={false}>
        <customMaterial  ref={ref} color={color} transparent opacity={opacity} />
      </mesh>
    </group>
  )
}



export const MultilineText = ({ text, size = 1, lineHeight = 1, position = [0, 0, 0], ...props }) => {
  return (
    text.split("\n").map((text, index) => (<Text key={index} size={size} {...props} position={[position[0], position[1] - index * lineHeight, position[2]]}>{text}</Text>))

  )
}



Text.displayName = 'Text';