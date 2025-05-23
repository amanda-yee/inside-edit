import Image from "next/image"

export default function UnderConstruction() {
    return (
        // <p>hi</p>
        <div className="flex flex-col justify-center items-center pt-10">
            <Image
                className="pt-10"
                src="/logo-black.png"
                alt="Inside Edit Logo"
                width={300}
                height={150}
            />
            <div>
                <h1 className="text-2xl pt-10 text-center">
                    Website is currently under construction
                </h1>
            </div>
            <div>
                <h2 className="text-2xl pt-10 text-center">
                    Contact us here:
                </h2>
            </div>
            <div className="flex items-center gap-2 pt-2">
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
        </div>
    )
}