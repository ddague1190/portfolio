import { Block, useBlock } from "../utilities/Blocks"
import Plane from "./Plane";
import { Html } from "@react-three/drei";
import { Text } from "./Text";
import state from "../../store";
import fonts from "../utilities/fonts";

export default function Contact({ image, index, offset, factor, header, aspect, text }) {
  
    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? 0.65 : 1
    const alignRight = (canvasWidth - w * size - margin) / 2
    const pixelWidth = w * state.zoom * size
    const left = !(index % 2)
    const color = index % 2 ? "#005656" : "#03a9f4"
    return (
      <Block factor={factor} offset={offset}>
        <group position={[left ? -alignRight : alignRight, 0, 0]}>
          <Plane map={image} args={[1, 1, 32, 32]} shift={75} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
          <Html
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
