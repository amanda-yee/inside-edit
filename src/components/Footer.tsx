import Image from "next/image"

export default function Footer() {
    return (
        <footer className="flex justify-between mx-20 pb-2 border-t border-t-gray-300">
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
              <Image
              className=""
              src="/icon-envelope.svg"
              alt="Mail Icon"
              width={25}
              height={25}
              />
            </a>

            <a 
              href="https://www.instagram.com/insideeditnyc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
              className=""
              src="/icon-instagram.svg"
              alt="Instagram Icon"
              width={30}
              height={30}
              />
            </a>
          </div>
          
        </footer>
    )
}