import Image from "next/image";
import NavLinks from "./NavLinks";
import ArrowDown from "./icons/ArrowDown.svg"

export default function Hero() {
    return (
    <main className="relative w-screen h-screen">
        <Image
          className="z-0 object-cover object-[center_20%] md:object-[center_10%]"
          src="/hero-image.jpg"
          alt="Hero Image"
          layout="fill" // fill parent container
          sizes="100vw"
          priority // tells next.js to load image asap
        />

        {/* Different displays based on screen size */}
        <div className="block md:hidden absolute z-10 flex flex-col top-8 items-center w-full">
            <Image
              src="/logo-black.png"
              alt="Inside Edit Logo"
              width={250}
              height={50}
              priority
            />
        </div>

        <div className="hidden md:flex flex-row absolute z-10 top-8 items-center justify-center w-full gap-8 text-[#000000]">
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
          <a href="#main" className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors">
            <ArrowDown className="h-6" />
          </a>
        </div>
      </main>
    )
}