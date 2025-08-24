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
                    Subheading
                </h2>

                <div className="flex flex-col lg:flex-row pb-12 max-w-[100%]">
                    <div className="flex-1 font-geist pr-4 pb-4">
                        <p>
                            Placeholder
                            <br></br>
                            <br></br>
                            Placeholder
                        </p>
                    </div>
                    <div className="relative lg:w-[40%] h-[300px]">
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
                        client love
                    </h2>

                    <div className="flex gap-12 font-geist">
                        <div className="flex-1">
                            <p>
                                &quot;They turned our 'forever home' into a place that actually feels like us - comfortable, intentional, and full of surprises we never would've thought of.&quot;
                            </p>
                        </div>
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
  