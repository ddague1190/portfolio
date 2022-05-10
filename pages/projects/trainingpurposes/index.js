import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from "next/router"
import Link from "next/link";
import { addOverflowHidden, removeOverflowHidden } from "../../../lib/homeOverflowStyles"
import Popup from 'reactjs-popup';
import GitHubButton from "../../../components/utilities/GitHubButton";

const TINY_SHELTER_ARCHIVE = 'TINY_SHELTER_ARCHIVE'
const STONETHRONE = 'STONETHRONE'
const CALCULATOR = 'CALCULATOR'
const ARTICLE_1 = 'ARTICLE_1'
const ARTICLE_2 = 'ARTICLE_2'

const links = {
    TINY_SHELTER_ARCHIVE: ['https://www.tinyshelterarchive.com/', 'https://github.com/ddague1190/tinyshelterarchive'],
    STONETHRONE: ['https://secure-lowlands-39459.herokuapp.com/', 'https://github.com/ddague1190/shopstonethrone'],
    CALCULATOR: ['https://ddague1190.github.io/calculator/', 'https://github.com/ddague1190/calculator'],
    ARTICLE_1: ['https://ddague1190.github.io/article_kawasakivoyager/', 'https://github.com/ddague1190/article_kawasakivoyager'],
    ARTICLE_2: ['https://ddague1190.github.io/article_horseculture/', 'https://github.com/ddague1190/article_horseculture']
}

const TrainingPurposes = () => {


    const [whichLink, setLink] = useState('')

    useEffect(() => {
        window.addEventListener('focus', setLink.bind(null, ''))
        removeOverflowHidden()
        return (() => {
            addOverflowHidden()
            removeEventListener('focus', setLink.bind(null, ''))
        })
    }, [])

    return (
        <div className="relative mt-20 mx-10 mb-10 lg:max-w-5xl lg:mx-auto flex flex-col gap-10">

            <section className='py-5 w-max'>
                <dl >
                    <dt className="text-xl tracking-widest font-light py-2">
                        More developed
                    </dt>
                    <dd
                        onClick={setLink.bind(null, TINY_SHELTER_ARCHIVE)}
                        className="group p-6 relative flex flex-col"
                    >
                        <span className="text-2xl sm:text-4xl pt-2 text-white font-extrabold">Tiny shelter archive</span>
                        <ul className="text-left text-gray-300">
                            <li className="translate-x-4">A pure Django application</li>
                            <li className="translate-x-8 text-blue-300">A campervan database</li>
                        </ul>
                        <div className={`${whichLink === CALCULATOR ? 'block' : 'hidden'} group-hover:block`}>
                            <GitHubButton setLink={setLink} links={links[whichLink]} youTubeLink='https://www.youtube.com/watch?v=4d0LN69pRQw' />
                        </div>
                    </dd>
                    <dd
                        onClick={setLink.bind(null, STONETHRONE)}
                        className="group p-6 relative flex flex-col">
                        <span className="text-2xl sm:text-4xl pt-2 text-white font-extrabold">Stonethrone</span>
                        <ul className="text-left text-gray-300">
                            <li className="translate-x-4">A Django and pure JS website</li>
                            <li className="translate-x-8 text-blue-300">An online hat store</li>
                        </ul>
                        <div className={`${whichLink === STONETHRONE ? 'block' : 'hidden'} group-hover:block`}>
                            <GitHubButton setLink={setLink} links={links[whichLink]} youTubeLink='https://www.youtube.com/watch?v=Ssd09_FMGRo' />
                        </div>
                    </dd>
                </dl>
            </section>
            <section className='py-5 w-max'>
                <dl>
                    <dt className="text-xl tracking-widest font-light py-2">
                        Minor works
                    </dt>
                    <dd
                        onClick={setLink.bind(null, CALCULATOR)}
                        className="group p-6 relative"
                    >
                        <span className=" text-2xl sm:text-4xl pt-2 font-extrabold">Pure JS Calculator</span>
                        <div className={`${whichLink === CALCULATOR ? 'block' : 'hidden'} group-hover:block`}>
                            <GitHubButton setLink={setLink} links={links[whichLink]} />
                        </div>
                    </dd>
                    <dd
                        onClick={setLink.bind(null, ARTICLE_1)}
                        className="group p-6 relative">
                        <span className="text-2xl sm:text-4xl pt-2 font-extrabold">Article 1</span>
                        <ul className="text-left text-gray-300">
                            <li className="translate-x-4">An adventure in BEM and SASS</li>
                            <li className="translate-x-8 text-blue-300">Cosmic motorcyclism</li>
                        </ul>
                        <div className={`${whichLink === ARTICLE_1 ? 'block' : 'hidden'} group-hover:block`}>
                            <GitHubButton setLink={setLink} links={links[whichLink]} />
                        </div>
                    </dd>
                    <dd

                        onClick={setLink.bind(null, ARTICLE_2)}
                        className="group p-6 relative"
                    >
                        <span className="text-2xl sm:text-4xl pt-2 font-extrabold">Article 2</span>
                        <ul className="text-left text-gray-300">
                            <li className="translate-x-4">An adventure in BEM and SASS</li>
                            <li className="translate-x-8 text-blue-300">Native American Plains Culture </li>
                        </ul>
                        <div className={`${whichLink === ARTICLE_2 ? 'block' : 'hidden'} group-hover:block`}>
                            <GitHubButton setLink={setLink} links={links[whichLink]} />
                        </div>
                    </dd>
                </dl>

            </section>
        </div >

    )
}

export default TrainingPurposes