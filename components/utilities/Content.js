import { useBlock } from "./Blocks"
import Plane from "../three/shapes/Plane"
export default function Content({ left, children }) {
    const { contentMaxWidth, canvasWidth, margin } = useBlock()
    const aspect = 1.75
    const alignRight = (canvasWidth - contentMaxWidth - margin) / 2
    return (
      <group position={[alignRight * (left ? -1 : 1), 0, 0]}>
        <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="#bfe2ca" />
        {children}
      </group>
    )
  }