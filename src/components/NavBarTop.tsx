
import NavLinks from "./NavLinks"
import Image from "next/image"
import Link from "next/link"

export default function NavBarTop() {
    return (   
        <nav className="flex justify-between items-center">
            <Link href="/">
                <Image
                className="justify-center"
                src="/logo-black.png"
                alt="Inside Edit Logo"
                width={125}
                height={0}
                />
            </Link>
            
            <NavLinks />
        </nav>
    )
}