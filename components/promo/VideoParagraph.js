import { Block, useBlock } from "../utilities/Blocks"
import { Html } from "@react-three/drei";
import { Text } from "./Text";
import state from "../../store";
import VideoPlane from "./VideoPlane";

export default function VideoParagraph({ image, index, offset, factor, header, aspect, text }) {

    const { contentMaxWidth: w, canvasWidth, margin, mobile, viewportWidth } = useBlock()
    const size = aspect < 1 && !mobile ? .65 : 1
    const alignRight = (canvasWidth - w * size - margin) / 2
    const pixelWidth = w * state.zoom * size
    const left = !(index % 2)


    return (
        <Block factor={factor} offset={offset}>
            <group position={[-alignRight, 0, 0]}>

                <VideoPlane args={[1, 1, 32, 32]} shift={50} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} />
                <Html
                    className="cursor-pointer pointer-events-none"
                    style={{ textAlign: left ? "left" : "right", fontSize: '20px' }}
                    position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}
                >
                    <div className="text-gray-100 px-3 lg:mx-auto leading-6 min-w-[300px] sm:w-[600px] lg:w-max text-2xl text-light" tabIndex={index}>{text}</div>



                </Html>
                <Html position={[w > 8 ? -3 : -1.5, 1.5, 0]}>
                    <div className='absolute z-50 ml-3 mt-5 sm:flex-row -translate-x-20 items-center flex gap-2 flex-col w-max'>
                        <div id='href:/projects/fishnstik' className="cursor-pointer font-extrabold tracking-tighter bg-white inline-flex items-center px-8 py-4 border border-black  text-lg lg:text-2xl rounded-md shadow-sm text-black bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            See FishNStik details

                        </div>
                        <div id='href:/projects/' className="cursor-pointer font-bold tracking-tighter inline-flex items-center px-4 py-2 border border-gray-700 text-lg w-max lg:text-xl rounded-md shadow-sm text-gray-700 bg-white bg-opacity-30  focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            See all projects

                        </div>
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
