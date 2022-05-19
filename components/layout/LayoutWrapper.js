import headerNavLinks from "../../data/headerNavLinks"
import Link from "../utilities/Link"
import SectionContainer from "./SectionContainer"
import MobileNav from './MobileNav'
import Portal from "../utilities/Portal"
import { useRouter } from "next/router"


const LayoutWrapper = ({ children }) => {



    const router = useRouter()
    const useLight = true

    return (
        <SectionContainer>
            <div className="flex flex-col h-screen justify-between">
                <Portal>
                    <header className="flex w-screen  ml-auto">
                        <div className="flex items-center text-base leading-5 p-2">
                            <div className="hidden sm:block">
                                {headerNavLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        href={link.href}
                                        className={`p-1 font-extrabold lg:text-2xl text-xl tracking-tighter  ${router.pathname === link.href ? 'text-[#43bdff] select-text tracking-tighter ' : (useLight ? 'text-gray-500' : 'text-gray-800')} hover:scale-[1.01] sm:p-4`}
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
            </div>
        </SectionContainer>
    )
}

export default LayoutWrapper
