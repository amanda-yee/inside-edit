import Image from "next/image";
import NavLinks from "./NavLinks";
import ArrowDown from "./icons/ArrowDown.svg"

export default function Hero() {
    return (
    <main className="relative w-screen h-screen">
        <Image
          className="z-0"
          src="/hero-image.jpg"
          alt="Hero Image"
          layout="fill" // fill parent container
          objectFit="cover" // fills the area and crops if needed
          priority // tells next.js to load image asap
        />

        {/* Different displays based on screen size */}
        <div className="block md:hidden absolute z-10 flex flex-col top-[30%] items-center w-full">
            <Image
              src="/logo-white.png"
              alt="Inside Edit Logo"
              width={250}
              height={50}
              priority
            />
        </div>
        
        <div className="hidden md:block absolute z-10 flex flex-col top-[30%] ml-10 gap-6 text-[#000000]">
            <Image
              src="/logo-black.png"
              alt="Inside Edit Logo"
              width={250}
              height={50}
              priority
            />
            <NavLinks />
        </div>
  

        <div className="absolute z-10 bottom-5 left-1/2 transform -translate-x-1/2"> 
          <a href="#main">
            <ArrowDown className="h-10 text-[#ffffff] hover:text-[#b6b5af]" />
          </a>
        </div>
      </main>
    )
}