import Image from "next/image"
import Envelope from "./icons/Envelope.svg"
import Instagram from "./icons/Instagram.svg"

export default function Footer() {
    return (
        <footer className="flex justify-between mx-20 mt-6 mb-2 border-t border-t-gray-300">
          <div className="flex items-center">
            <Image
            className="object-contain h-auto"
            src="/logo-black.png"
            alt="Inside Edit Logo"
            width={150}
            height={50}
            />
          </div>
          
          <div className="flex flex-col justify-end pt-8">
            <p>&copy; Azzurra Studios 2025</p>
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
          
        </footer>
    )
}