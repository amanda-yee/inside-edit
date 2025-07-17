import NavBarSide from "@/components/NavBarSide";
import NavBarTop from "@/components/NavBarTop";
import Image from "next/image"
import Phone from "@/components/icons/Phone.svg"
import Envelope from "@/components/icons/Envelope.svg"

export default function AboutPage() {
    return (
        <div className="flex flex-col lg:flex-row px-4">
            <div className="sticky top-0 py-2 z-50 bg-[var(--background)] block lg:hidden">
                <NavBarTop />
            </div>
            
            <div className="hidden lg:block">
                <NavBarSide />
            </div>

            <div className="flex-1"> 
                <h1 className="text-[var(--primary)] font-bold pt-10 pb-6">
                    about us
                </h1>

                <h2 className="pb-6">
                    Subheading Subheading
                </h2>

                <div className="flex flex-col lg:flex-row pb-12 max-w-[100%]">
                    <div className="flex-1 font-geist pr-4 pb-4">
                        <p>
                            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                            <br></br>
                            <br></br>
                            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                        </p>
                    </div>
                    <div className="relative lg:w-[30%] h-[300px]">
                        <Image 
                        src="/project-image-1.png"
                        alt="Inside Edit Logo"
                        fill
                        className="object-contain"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="font-bold pb-6">
                        get in touch
                    </h2>
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
  