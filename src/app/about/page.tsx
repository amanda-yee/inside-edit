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

            <div className="flex-1 pb-6"> 
                <h1 className="text-[var(--primary)] font-bold pt-10 pb-6">
                    about us
                </h1>

                <h2 className="pb-6">
                    <b>Laura Heintz</b>
                    <br />
                    Owner and Principal Designer
                </h2>

                <div className="flex flex-col lg:flex-row pr-[2%] pb-12 max-w-[100%]">
                    <div className="lg:flex-[2] font-geist pr-12 pb-6">
                        <p>
                            Laura is a fun, dynamic interior designer bringing warmth and energy to homes in New York City and the Hudson Valley. With a philosophy rooted in warm minimalism, she designs spaces that feel inviting, personal, and never cookie-cutter. She listens closely to her clients, translating their stories and lifestyle into interiors that feel both effortless and uniquely their own.
                            <br /><br />
                            Growing up in a family of creative people, she was surrounded by artistry, invention, and the freedom to explore ideas, an upbringing that continues to fuel her adventurous approach to design. Her path began with a background in chemistry, where she developed a sharp eye for detail and balance, skills she now brings into every project. 
                            <br /><br />
                            Before launching Inside Edit, she honed her craft under a renowned NYC interior designer, gaining exposure to high-end projects and an appreciation for blending sophistication with everyday livability.
                            <br /><br />
                            Curious and always exploring, she travels widely and draws inspiration from design markets, architecture, and artisans wherever she goes. She thrives on new challenges, whether it’s reimagining a city apartment, restoring a Hudson Valley farmhouse, or sourcing unexpected materials and objects that add depth and character. Every project is a chance to create not just a beautiful space, but a true reflection of the people who live there.
                        </p>
                    </div>
                    <div className="flex justify-center items-start">
                        <Image
                        className="h-auto"
                        src="/laura-headshot.jpg"
                        alt="Laura Heintz - Headshot"
                        width={300}
                        height={400}
                        />
                    </div>
                </div>

                <div className="pb-6">
                    <h2 className="font-bold pb-6">
                        client love
                    </h2>

                    <div className="flex gap-12 font-geist">
                        <div className="flex-1">
                            <p>
                                &quot;They turned our &apos;forever home&apos; into a place that actually feels like us - comfortable, intentional, and full of surprises we never would&apos;ve thought of.&quot;
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pb-6">
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
  