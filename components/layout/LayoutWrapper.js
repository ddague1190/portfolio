import siteMetadata from "../../data/siteMetadata"
import headerNavLinks from "../../data/headerNavLinks"
import Link from "../utilities/Link"
import SectionContainer from "./SectionContainer"
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useEffect, useRef, useState, useContext } from "react"
import Portal from "../utilities/Portal"
import state from "../../store"
import { useRouter } from "next/router"

const LayoutWrapper = ({ children }) => {
    const router = useRouter()

    return (
        <SectionContainer>
            <div className="flex flex-col h-screen justify-between">
                <Portal>
                    <header className="flex ml-auto">
                        <div className="flex items-center text-base leading-5 p-2">
                            <div className="hidden sm:block">
                                {headerNavLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        href={link.href}
                                        className={`p-1 font-extrabold text-xl tracking-wider  ${router.route === link.href ? 'text-gray-300 select-text tracking-tighter ':'text-gray-500'} hover:scale-[1.01] hover:text-gray-400 sm:p-4`}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                            <MobileNav />
                        </div>

                    </header>
                </Portal>
                <main className="mb-auto">{children}</main>
                {/* <Footer /> */}
            </div>
        </SectionContainer>
    )
}

export default LayoutWrapper
