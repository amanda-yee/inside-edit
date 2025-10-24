import Image from "next/image"
import Envelope from "./icons/Envelope.svg"
import Instagram from "./icons/Instagram.svg"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mx-[5%] mt-6 mb-2 border-t border-t-gray-300">

          {/* Inside Edit Logo + Icons */}
          <div className="flex justify-between pt-4">
            <div className="w-full max-w-[125px]">
              <Link href="/">
                <Image
                src="/logo-black.png"
                alt="Inside Edit Logo"
                width={100}
                height={50}
                className="w-full h-auto object-contain"
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
            <a href="mailto:amandakyee@gmail.com">
                &copy; Azzurra Studios 2025
            </a>
            {/* <p>&copy; Azzurra Studios 2025</p> */}
          </div>
          
        </footer>
    )
}