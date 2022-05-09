import { Block, useBlock } from "../utilities/Blocks"
import Plane from "./Plane";
import { Html } from "@react-three/drei";
import { Text } from "./Text";
import state from "../../store";
import fonts from "../utilities/fonts";
import VideoPlane from "./VideoPlane";
import { useFrame } from "@react-three/fiber";

export default function VideoParagraph({ image, index, offset, factor, header, aspect, text }) {

    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? .7 : 1.5
    const alignRight = (canvasWidth - w * size - margin) / 10
    const pixelWidth = w * state.zoom * size
    const left = !(index % 2)
    const color = index % 2 ? "#005656" : "#03a9f4"

    const correctedOffset = w > 10 ? offset : w > 6 ? offset - .2 : offset - .4

    return (
        <Block factor={factor} offset={correctedOffset}>
            <group position={[left ? -alignRight : alignRight, 0, 0]}>

                <VideoPlane args={[1, 1, 32, 32]} shift={20} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
                <Html
                    className="cursor-pointer pointer-events-none"
                    style={{ textAlign: left ? "left" : "right", fontSize: '20px' }}
                    position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}
                >
                    <div className="text-gray-100 px-3 lg:mx-auto leading-6 min-w-[300px] sm:w-[600px] lg:w-max tracking-tighter  text-3xl" tabIndex={index}>{text}</div>



                        </Html>
                        <Html position={[w > 8 ? -5 : -4.5, 1.5, 0]}>
                            <div className='absolute z-50 ml-3 mt-5 sm:flex-row flex gap-2 flex-col w-max'>
                                <button id='href:/projects/fishnstik' className="font-extrabold tracking-tighter inline-flex items-center px-8 py-4 border border-black  text-lg lg:text-2xl rounded-md shadow-sm text-black bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
                                >
                                    See FishNStik details

                                </button>
                                <button id='href:/projects/' className="font-bold tracking-tighter inline-flex items-center px-4 py-2 border border-gray-500 text-lg w-max lg:text-xl rounded-md shadow-sm text-gray-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
                                >
                                    See all projects

                                </button>
                            </div>
                        </Html>


                        <group>

                            <Text left={left} right={!left} size={w * .04} color="white" top position={[((left ? -w : w) * size) / 2 + .5, (w * size) / aspect / 2 + 0.5, -1]}>
                                {header}
                            </Text>
                            <directionalLight color='blue' position={[100, -100, 0]} intensity={50} />

                        </group>

                    </group>
                </Block>
                )
}
