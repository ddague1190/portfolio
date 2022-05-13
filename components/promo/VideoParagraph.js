import { Block, useBlock } from "../utilities/Blocks"
import { MultilineText } from "./Text";
import state from "../../store";
import { ExperimentalVideoPlane } from "./VideoPlane";

export default function VideoParagraph({ image, index, offset, factor, header, aspect, text }) {

    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? .65 : 1
    const alignRight = (canvasWidth - w * size - margin) / 2
    const left = !(index % 2)
    const correctHeight = w > 8 ? -3 : -2
    return (
        <Block factor={factor} offset={offset}>
            <group position={[-alignRight, 0, 0]}>
                <ExperimentalVideoPlane args={[1, 1, 32, 32]} shift={100} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} />

                {/* <VideoPlane args={[1, 1, 32, 32]} shift={50} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} /> */}



                <group>

  
                    <MultilineText left={left} right={!left} size={w * .04} color={state.boldColor} lineHeight={.7} top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 1, -1]} 
                    text={'featured project\nan e-commerce platform'}/>

  
                </group>

            </group>
        </Block>
    )
}
