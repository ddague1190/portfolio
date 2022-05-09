import React, { useEffect, useState } from 'react'
import Head from "next/head"
import { removeOverflowHidden, addOverflowHidden } from "../lib/homeOverflowStyles"
import Link from '../components/utilities/Link'



const About = () => {

    const [copied, setCopied] = useState(false)

    useEffect(() => {
        removeOverflowHidden()
        document.body.style.fontSize = '100%'
        document.body.style.backgroundColor = 'white'
        return (() => {
            document.body.style.backgroundColor = 'black'
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
            <Head>

            </Head>
            <main className="max-w-4xl lg:mx-auto mx-10 mt-20 mb-20 " itemScope itemType="http://schema.org/Person">
                <header className=''>
                    <h1 className="tracking-tigher font-extrabold text-2xl mb-2">Darryl Dague</h1>

                    <dl className='flex items-center gap-4 w-full'>
                        <div className="flex items-center gap-2 w-max text-left relative text-blue-400">
                            <dt className="sr-only">
                                Copy email:
                            </dt>


                            <dd className="cursor-pointer inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-400 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                                onClick={copyToClipboard.bind(null, 'ddague77@gmail.com')}>
                                Copy email
                            </dd>
                            {copied &&
                                <span className="w-max absolute left-1/2 -bottom-3/4 -translate-x-1/2 text-green-500 font-bold">&#10003; Copied</span>
                            }
                        </div>
                        <dt className="sr-only">
                            GitHub Link
                        </dt>
                        <dl className="cursor-pointer">
                            <Link href='https://github.com/ddague1190'>
                                <svg role="img" viewBox="0 0 24 24" height='20px' xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                            </Link>
                        </dl>

                    </dl>


                </header>

                <section className="mb-2">
                    <h2 className="uppercase text-base text-blue-300 mb-1 mt-10 tracking-tighter border-b-[1px]">
                        Summary
                    </h2>
                    <p className="tracking-tighter text-base mb-1">I am an aspiring web developer with a strong foundation in programming syntax and idioms and CS fundamentals. Through a set of self-directed projects, I have become deeply familiar for with modern frameworks and development tools. I can quickly leverage new technologies while also working diligently to perfect my understanding of tools with which I have had more practice. </p>
                </section>
                <section className="mb-2">
                    <h2 className="uppercase text-blue-300 mb-1 mt-10 tracking-tighter border-b-[1px]">
                        Education
                    </h2>
                    <details className='mb-1' open >
                        <summary className='list-none'>HarvardX Computer Science for Web Development Certificate
                            <time className="float-right font-light">2021</time>
                        </summary>

                    </details>
                    <details className="" open >
                        <summary className="list-none">New College of Florida, B.A. in Chemistry
                            <time className="float-right font-light">2005 - 2009</time>
                        </summary>

                    </details>
                </section>
                <section className="mb-2">
                    <h2 className="uppercase text-blue-300 mb-1 mt-10 tracking-tighter border-b-[1px]">
                        Projects
                        <Link className='text-gray-400 lowercase float-right' href="https://chunlianglyu.com/projects/">[see other projects]</Link>
                    </h2>
                    <details className="mb-1" open>
                        <summary className="list-none font-semibold tracking-tighter">FishNStik
                            <Link className='tracking-normal font-normal ml-1' href="https://fishnstik.herokuapp.com">(https://fishnstik.herokuapp.com)</Link>
                            <time className="float-right font-light text-gray-400">2022</time>
                        </summary>
                        <p className=""> </p>
                        <ul className="list-disc ml-3 tracking-tight">
                            <li>FishNStik is an e-commerce platform built with React with Redux and Django with Django Rest Framework.</li>
                            <li>Built specifically for the client business model, with a non-normal checkout flow and tiered discounts.</li>
                            <li>Built and rebuilt - I gained a deep knowledge of React strengths and limitations
                            </li>
                        </ul>

                    </details>

                </section>
                <section className="mb-2">
                    <h2 className="uppercase text-blue-300 mb-1 mt-10 tracking-tighter border-b-[1px]">
                        Technical Skills
                    </h2>
                    <ul className="list-disc ml-3">
                        <li>Languages: Python, JavaScript, CSS, HTML</li>
                        <li>Databases: PostgreSQL</li>
                        <li>Frameworks: React, Django, Next, Sass</li>
                        <li>Tools: Git, AWS</li>
                    </ul>
                </section>
                <section className="mb-2">
                    <h2 className="uppercase text-blue-300 mb-1 mt-10 tracking-tighter border-b-[1px]">
                        Work experience
                    </h2>
                    <details className="mb-2" open >
                        <summary className="list-none tracking-tighter font-bold">Machine Operator, FishNStik Terminal Tackle Manufacturing
                            <time className="float-right font-light">2020 - 2022</time>
                        </summary>
                        <ul className="list-disc ml-3">
                            <li>Built a custom e-commerce platform for the company</li>
                        </ul>

                    </details>
                    <details className="mb-2" open>
                        <summary className="list-none tracking-tighter font-bold">Sterile Processing Technician, KRS Biotech
                            <time className="float-right font-light">2018 - 2020</time>
                        </summary>

                    </details>
                    <details className="mb-2" open>
                        <summary className="list-none tracking-tighter font-bold" open>Manufacturing Associate
                            <time className="float-right font-light">2013 - 2018</time>

                        </summary>
                        <ul className="list-disc ml-3">
                            <li>Documentation specialist, awarded by QA and Manufacturing leadership for technical writing skills and dedication to continuous improvement</li>
                            <li>Main responsibility was aspetic processing in accordance with federal guidelines </li>
                            <li>Companies worked for (first 2 are world leaders): Sanofi-Genzyme, Lonza Biologics, Goodwin Biotechnology</li>
                        </ul>

                    </details>
                </section>
                <section className="mb-2">
                    <h2 className="uppercase text-blue-300 mt-10 tracking-tighter border-b-[1px]">
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