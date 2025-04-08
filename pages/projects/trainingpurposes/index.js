import React, { useEffect, useReducer } from 'react'
import { addOverflowHidden, removeOverflowHidden } from "../../../lib/homeOverflowStyles"
import GitHubButton from "../../../components/utilities/GitHubButton";

const TINY_SHELTER_ARCHIVE = 'TINY_SHELTER_ARCHIVE'
const STONETHRONE = 'STONETHRONE'
const CALCULATOR = 'CALCULATOR'
const ARTICLE_1 = 'ARTICLE_1'
const ARTICLE_2 = 'ARTICLE_2'

const initial_state = {
    TINY_SHELTER_ARCHIVE: {
        links: ['https://project-tsa.herokuapp.com/', 'https://github.com/ddague1190/tinyshelterarchive'],
        show: false
    },
    STONETHRONE: {
        links: ['https://secure-lowlands-39459.herokuapp.com/', 'https://github.com/ddague1190/shopstonethrone'],
        show: false
    },
    CALCULATOR: {
        links: ['https://ddague1190.github.io/calculator/', 'https://github.com/ddague1190/calculator'],
        show: false
    },
    ARTICLE_1: {
        links: ['https://ddague1190.github.io/article_kawasakivoyager/', 'https://github.com/ddague1190/article_kawasakivoyager'],
        show: false
    },
    ARTICLE_2: {
        links: ['https://ddague1190.github.io/article_horseculture/', 'https://github.com/ddague1190/article_horseculture'],
        show: false
    }
}

const reducer = (state, action) => {
    const copy = { ...state }

    switch (action.type) {
        case 'show':
            copy[action.whichLink]['show'] = true
            return copy

        case 'hide':
            copy[action.whichLink]['show'] = false
            return copy

        case 'reset':
            return initial_state

        default:
            return state
    }
}

const TrainingPurposes = () => {
    const [state, dispatch] = useReducer(reducer, initial_state)

    useEffect(() => {
        removeOverflowHidden()
        return (() => {
            addOverflowHidden()
        })
    }, [])

    return (
        <div className="relative mt-20 mx-10 mb-10 lg:max-w-5xl lg:mx-auto flex flex-col gap-10">

            <section className='py-5 w-max'>
                <dl >
                    <dt className="text-xl tracking-widest font-light py-2 border-b-2">
                        More developed
                    </dt>
                    <dd
                        onMouseEnter={dispatch.bind(null, { type: 'show', whichLink: TINY_SHELTER_ARCHIVE })}
                        onMouseLeave={dispatch.bind(null, { type: 'hide', whichLink: TINY_SHELTER_ARCHIVE })}
                        className="group p-4 relative flex flex-col"
                    >
                        <span className="text-2xl sm:text-4xl font-extrabold">Tiny shelter archive </span>
                        <ul className="text-left text-gray-500">
                         <li className="translate-x-4">Jul-2021</li>
                            <li className="translate-x-4">A pure Django application</li>
                            <li className="translate-x-8 text-[#43bdff]">A campervan database</li>
                        </ul>

                        {state[TINY_SHELTER_ARCHIVE]['show'] &&
                            <GitHubButton links={state[TINY_SHELTER_ARCHIVE]['links']} youTubeLink='https://www.youtube.com/watch?v=4d0LN69pRQw' />
                        }
                    </dd>
                    <dd
                        onMouseEnter={dispatch.bind(null, { type: 'show', whichLink: STONETHRONE })}
                        onMouseLeave={dispatch.bind(null, { type: 'hide', whichLink: STONETHRONE })}
                        className="group p-4 relative flex flex-col">
                        <span className="text-2xl sm:text-4xl font-extrabold">Stonethrone</span>
                        <ul className="text-left text-gray-500">
                        <li className="translate-x-4">Nov-2021</li>

                            <li className="translate-x-4">A Django and pure JS website</li>
                            <li className="translate-x-8 text-[#43bdff]">An online hat store</li>
                        </ul>
                        {state[STONETHRONE]['show'] &&
                            <GitHubButton links={state[STONETHRONE]['links']} youTubeLink='https://www.youtube.com/watch?v=Ssd09_FMGRo' />
                        }
                    </dd>
                </dl>
            </section>
            <section className='py-5 w-max'>
                <dl>
                    <dt className="text-xl tracking-widest font-light py-2 border-b-2">
                        Minor works
                    </dt>
                    <dd
                        onMouseEnter={dispatch.bind(null, { type: 'show', whichLink: CALCULATOR })}
                        onMouseLeave={dispatch.bind(null, { type: 'hide', whichLink: CALCULATOR })}
                        className="group relative p-4"
                    >
                        <span className=" text-2xl sm:text-4xl font-extrabold">Pure JS Calculator</span>
                        {state[CALCULATOR]['show'] &&
                            <GitHubButton links={state[CALCULATOR]['links']} />
                        }
                    </dd>
                    <dd
                        onMouseEnter={dispatch.bind(null, { type: 'show', whichLink: ARTICLE_1 })}
                        onMouseLeave={dispatch.bind(null, { type: 'hide', whichLink: ARTICLE_1 })}
                        className="group p-4 relative">
                        <span className="text-2xl sm:text-4xl font-extrabold">Article 1</span>
                        <ul className="text-left text-gray-500">
                        <li className="translate-x-4">Sep-2021</li>

                            <li className="translate-x-4">An adventure in BEM and SASS</li>
                            <li className="translate-x-8 text-[#43bdff] ">Parallels between NASA Voyager <br className="block sm:hidden"/> <span className='pl-5 sm:pl-0'>and Kawasaki Voyager</span></li>
                        </ul>
                        {state[ARTICLE_1]['show'] &&
                            <GitHubButton links={state[ARTICLE_1]['links']} />
                        }
                    </dd>
                    <dd

                        onMouseEnter={dispatch.bind(null, { type: 'show', whichLink: ARTICLE_2 })}
                        onMouseLeave={dispatch.bind(null, { type: 'hide', whichLink: ARTICLE_2 })}
                        className="group p-4 relative"
                    >
                        <span className="text-2xl sm:text-4xl font-extrabold">Article 2</span>
                        <ul className="text-left text-gray-500">
                        <li className="translate-x-4">Oct-2021</li>

                            <li className="translate-x-4">An adventure in BEM and SASS</li>
                            <li className="translate-x-8 text-[#43bdff]">Native American Plains Culture </li>
                        </ul>
                        {state[ARTICLE_2]['show'] &&
                            <GitHubButton links={state[ARTICLE_2]['links']} />
                        }
                    </dd>
                </dl>

            </section>
        </div >

    )
}

export default TrainingPurposes