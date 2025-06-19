
import NavLinks from "./NavLinks"
import Image from "next/image"
import Link from "next/link"

export default function NavBarSide() {
    return (   
        <nav className="sticky top-0 ml-10 mr-20">
            <Link href="/">
                <Image
                className="py-10"
                src="/logo-black-rotated.png"
                alt="Inside Edit Logo"
                width={25}
                height={0}
                />
            </Link>
            
            <NavLinks />
        </nav>
    )
}