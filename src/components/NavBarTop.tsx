
import NavLinks from "./NavLinks"
import Image from "next/image"
import Link from "next/link"

export default function NavBarTop() {
    return (   
        <nav className="sticky top-0 flex justify-between mt-[2%]">
            <Link href="/">
                <Image
                className="justify-center"
                src="/logo-black.png"
                alt="Inside Edit Logo"
                width={150}
                height={0}
                />
            </Link>
            
            <NavLinks />
        </nav>
    )
}