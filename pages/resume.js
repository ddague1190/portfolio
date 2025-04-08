import React, { useEffect, useState } from 'react'
import Head from "next/head"
import { removeOverflowHidden, addOverflowHidden } from "../lib/homeOverflowStyles"
import Link from "next/link"


const About = () => {

    const [copied, setCopied] = useState(false)

    useEffect(() => {
        removeOverflowHidden()
        document.body.style.fontSize = '100%'
        return (() => {
            addOverflowHidden()
        })
    }, [])


    function copyToClipboard(text, e) {
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute('value', text);
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        setCopied(true);
    }
    return (
        <>
            <main className="max-w-4xl smallest text-[14px] md:text-base mx-auto lg:px-0 px-4 mt-20 mb-20 " itemScope itemType="http://schema.org/Person">
                <header className=''>
                    <h1 className="tracking-tighter font-extrabold text-2xl mb-2">Darryl Dague</h1>
                    <span className="relative z-0 inline-flex shadow-sm rounded-md">
                        <div className="relative">
                            <button type="button" className="relative inline-flex items-center p-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-[#43bdff] focus:border-[#43bdff]" onClick={copyToClipboard.bind(null, 'daguedarryl@gmail.com')}>Copy email</button>
                            {copied &&
                                <span className="w-max absolute left-1/2 -bottom-3/4 -translate-x-1/2 text-green-500 font-bold">&#10003; Copied</span>
                            }
                        </div>
                        <Link
                            passHref
                            href='https://github.com/ddague1190'
                        >
                        <button type="button" className="-ml-px relative inline-flex items-center p-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-[#43bdff] focus:border-[#43bdff]">

                        <svg role="img" viewBox="0 0 24 24" height='20px' xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                        </button>
                        </Link>
                        <Link
                            passHref
                            href='https://leetcode.com/ddague/'
                        >
                        <button type="button" className="-ml-px relative inline-flex items-center p-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-[#43bdff] focus:border-[#43bdff]">

                        LeetCode Profile
                        </button>
                        </Link>
                        <Link href='./resume.pdf'>
                        <button type="button" className="-ml-px relative inline-flex items-center p-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-[#43bdff] focus:border-[#43bdff]">
                            resume.pdf
                        </button>
                        </Link>
                    </span>



                </header>

                <section className="mb-2">
                    <h2 className="uppercase text-[#43bdff] mb-1 mt-10 tracking-tighter border-b-[1px]">
                        Summary
                    </h2>
                    <p className="tracking-tighter mb-1">Recent CS graduate with interest in software development, bioinformatics, and webGL.</p>
                </section>
                <section className="mb-2">
                    <h2 className="uppercase text-[#43bdff] mb-1 mt-10 tracking-tighter border-b-[1px]">
                        Education
                    </h2>
                    <details className='' open >
                        <summary className='list-none'>University of the People, B.S. in Computer Science (graduation requirements met, waiting on degree conferral)
                            <time className="float-right font-light">2022-2025</time>
                        </summary>
                    </details>
                    <br/>
                    <details className="" open >
                        <summary className="list-none">New College of Florida, B.A. in Chemistry
                            <time className="float-right font-light">2005 - 2009</time>
                        </summary>

                    </details>
                </section>
                <section className="mb-2">
                    <h2 className="uppercase text-[#43bdff] mb-1 mt-10 tracking-tighter border-b-[1px]">
                        Projects
                        <span className="text-black lowercase float-right ">
                            <Link href="/projects">[see other projects]</Link>
                        </span>

                    </h2>
                    <details className="mb-1" open>
                        <summary className="list-none font-semibold tracking-tighter">Fish n Wire
                            <a target="_blank" rel="noopener noreferrer" className='tracking-normal font-normal ml-1' href="https://fishnwire.herokuapp.com">(https://fishnwire.herokuapp.com)</a>
                            <time className="float-right font-light">2022</time>
                        </summary>
                        <p className=""> </p>
                        <ul className="list-disc ml-5 tracking-tight text-gray-500">
                            <li>An e-commerce platform built with React and Django per the specifications of the client.</li>
                        </ul>

                    </details>

                </section>
                <section className="mb-2">
                    <h2 className="uppercase text-[#43bdff] mb-1 mt-10 tracking-tighter border-b-[1px]">
                        Technical Skills
                    </h2>
                    <ul className="list-disc ml-3">
                        <li>Languages: Python, JavaScript, CSS, HTML, PHP, Java, SQL</li>
                        <li>Frameworks: React, Django, Next, SASS, Bootstrap, TailwindCSS</li>
                        <li>Tools: Git, AWS, Webpack </li>
                    </ul>
                </section>
                <section className="mb-2">
                    <h2 className="uppercase text-[#43bdff] mb-1 mt-10 tracking-tighter border-b-[1px]">
                        Work experience
                    </h2>
                    <details className="mb-2" open >
                        <summary className="list-none tracking-tighter font-bold">Machine Operator, FishNStik Terminal Tackle Manufacturing
                            <time className="float-right font-light">2020 - 2022</time>
                        </summary>
                        <ul className="list-disc ml-5 text-gray-500">
                            <li>Built a custom e-commerce platform for the company (unpaid)</li>
                            <li>Increased production output by more than 100%</li>
                        </ul>

                    </details>

                    <details className="mb-2" open>
                        <summary className="list-none tracking-tighter font-bold" open>Manufacturing Associate
                            <time className="float-right font-light">2013 - 2020</time>

                        </summary>
                        <ul className="list-disc ml-5 text-gray-500">
                            <li>Documentation specialist, awarded by QA and Manufacturing leadership for technical writing skills and dedication to continuous improvement</li>
                            <li>Main responsibility was aspetic processing in accordance with federal guidelines </li>
                        </ul>
                    </details>
                    <article><Link href='./resume.pdf'>[Link to resume.pdf file]</Link></article>
                </section>
                <section className="mb-2">
                    <h2 className="uppercase text-[#43bdff] mt-10 tracking-tighter border-b-[1px]">
                        Publications</h2>
                    <ul className="">
                        <li>Basturea, <strong>Dague</strong>, Deutscher, and Rudd. YhiQ is RsmJ, the Methyltransferase Responsible for Methylation of G1516 in 16S rRNA of E. col. In: Journal of Molecular Biology (JMB). 2011.</li>
                    </ul>

                </section>

            </main>
        </>

    )
}

export default About