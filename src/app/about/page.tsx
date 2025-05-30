import NavBar from "@/components/NavBar";
import Image from "next/image"
import Phone from "@/components/icons/Phone.svg"
import Envelope from "@/components/icons/Envelope.svg"

export default function AboutPage() {
    return (
        <div className="flex pr-6 mr-10">
            <div>
                <NavBar />
            </div>

            <div className="flex-1"> 
                <h1 className="text-[var(--primary)] font-bold text-6xl pt-10 pb-6">
                    about us
                </h1>

                <h2 className="text-3xl pb-6">
                    Subheading Subheading Subheading Subheading
                </h2>

                <div className="flex gap-12 pb-6">
                    <div className="flex-1 font-geist">
                        <p>
                            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                            <br></br>
                            <br></br>
                            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                        </p>
                    </div>

                    <Image
                    src="/project-image-1.png"
                    alt="Inside Edit Logo"
                    width={350}
                    height={150}
                    />
                </div>

                <div>
                    <h3 className="font-bold text-4xl pb-6">
                        get in touch
                    </h3>
                    <div className="flex gap-4 pb-4">
                        <Envelope className="w-6 h-6" />
                        <a href="mailto:lheintz@insideedit.com" className="hover:font-bold"> lheintz@insideedit.com </a>
                    </div>

                    <div className="flex gap-4">
                        <Phone className="w-6 h-6" />
                        <a href="tel:+13472625440" className="hover:font-bold"> (347) 262 5440 </a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  