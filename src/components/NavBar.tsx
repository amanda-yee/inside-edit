
import Links from "./Links"
import Image from "next/image"

export default function NavBar() {
    return (   
        <nav className="ml-10 mr-25">
            <a href="/">
                <Image
                className="py-10"
                src="/logo-black-rotated.png"
                alt="Inside Edit Logo"
                width={25}
                height={150}
                />
            </a>
            <Links />
        </nav>
    )
}