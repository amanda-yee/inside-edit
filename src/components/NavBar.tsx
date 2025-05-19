
import Links from "./Links"
import Image from "next/image"

export default function NavBar() {
    return (   
        <nav className="mx-10">
            <Image
            className="py-10"
            src="/logo-black-rotated.png"
            alt="Inside Edit Logo"
            width={25}
            height={150}
            />
            <Links />
        </nav>
    )
}