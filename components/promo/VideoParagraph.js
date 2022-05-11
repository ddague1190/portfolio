import { Block, useBlock } from "../utilities/Blocks"
import { Html } from "@react-three/drei";
import { Text } from "./Text";
import state from "../../store";
import VideoPlane from "./VideoPlane";
import { ExperimentalVideoPlane } from "./VideoPlane";

export default function VideoParagraph({ image, index, offset, factor, header, aspect, text }) {

    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? .65 : 1
    const alignRight = (canvasWidth - w * size - margin) / 2
    const left = !(index % 2)


    return (
        <Block factor={factor} offset={offset}>
            <group position={[-alignRight, 0, 0]}>
                <ExperimentalVideoPlane args={[1, 1, 32, 32]} shift={50} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} />

                {/* <VideoPlane args={[1, 1, 32, 32]} shift={50} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} /> */}
                <Html
                    className="pointer-events-none"
                    style={{ textAlign: left ? "left" : "right", fontSize: '20px' }}
                    position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}
                >
                    <div className="text-gray-100 px-3 lg:mx-auto leading-6 min-w-[300px] sm:w-[600px] lg:w-max text-light" tabIndex={index}>{text}</div>
                    <div className='absolute z-50 ml-3 mt-5 flex-row flex gap-3  '>
                        <div id='href:/projects/fishnstik' className="text-blue-500 cursor-pointer text-lg underline text-semibold tracking-tighter"
                        >
                            FishNStik details

                        </div>
                        <div id='href:/projects/' className="text-white underline text-lg text-semibold tracking-tighter"
                        >
                            All projects

                        </div>
                    </div>


                </Html>
                <Html position={[w > 8 ? -2 : -1, 1.5, 0]}>

                </Html>


                <group>

                    <Text left={left} right={!left} size={w * .04} color="white" top position={[((left ? -w : w) * size) / 2 + .5, (w * size) / aspect / 2 + 0.5, -1]}>
                        {header}
                    </Text>
                    <directionalLight color='blue' position={[100, -100, 10]} intensity={20} />

                </group>

            </group>
        </Block>
    )
}
