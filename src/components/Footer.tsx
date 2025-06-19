import Image from "next/image"
import Envelope from "./icons/Envelope.svg"
import Instagram from "./icons/Instagram.svg"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mx-[5%] mt-6 mb-2 border-t border-t-gray-300">

          {/* Inside Edit Logo + Icons */}
          <div className="flex justify-between pt-4">
            <div>
              <Link href="/">
                <Image
                className="object-contain h-auto"
                src="/logo-black.png"
                alt="Inside Edit Logo"
                width={150}
                height={50}
                />
              </Link>
            </div>
            
            <div className="flex items-center gap-2">
              <a href="mailto:lheintz@insideedit.com">
                <Envelope className="w-6 h-6 hover:text-[#b6b5af]" />
              </a>

              <a 
                href="https://www.instagram.com/insideeditnyc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-7 h-7 hover:text-[#b6b5af]" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <p>&copy; Azzurra Studios 2025</p>
          </div>
          
        </footer>
    )
}