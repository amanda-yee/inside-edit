import Image from "next/image";

export default function Hero() {
    return (
    <main className="relative w-screen h-screen">
        <Image
          className="z-0"
          src="/hero-image.png"
          alt="Hero Image"
          layout="fill" // fill parent container
          objectFit="cover" // fills the area and crops if needed
          priority // tells next.js to load image asap
        />

        <div className="absolute z-10 flex flex-col ml-10 top-[30%] gap-6">
          <Image
            className=""
            src="/logo-white2.png"
            alt="Inside Edit Logo"
            width={250}
            height={50}
          />

          <ul className="text-[#ffffff]">
            <li>
              <a
              className="hover:underline"
              href="https://www.insideedit.com"
              target="_blank"
              rel="noopener noreferrer"
              >
                projects
              </a>
            </li>
            <li>
              <a
              className="hover:underline"
              href="https://www.insideedit.com"
              target="_blank"
              rel="noopener noreferrer"
              >
                collaborations
              </a>
            </li>
            <li>
              <a
              className="hover:underline"
              href="https://www.insideedit.com"
              target="_blank"
              rel="noopener noreferrer"
              >
                about
              </a>
            </li>
          </ul>
        </div>

        <div className="absolute z-10 bottom-5 left-1/2 transform -translate-x-1/2"> 
          <Image
            className=""
            src="/arrow-down.svg"
            alt="Down Arrow"
            width={40}
            height={25}
          />

        </div>

      </main>
    )
}