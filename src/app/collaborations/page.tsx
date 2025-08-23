import NavBarSide from "@/components/NavBarSide";
import NavBarTop from "@/components/NavBarTop";
import Image from "next/image";

export default function CollaborationsPage() {
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
                    collaborations
                </h1>

                <h2 className="pb-6">
                    Your Space, Thoughtfully Reimagined
                </h2>

                <div className="gap-12 font-geist">
                    <div>
                        <p>
                            We don’t do cookie-cutter. We do custom. Every home has its own rhythm — we tune in, layer in texture, add soul, and make it sing. Whether it’s a sun-drenched loft, a brownstone with bones, or a weekend escape in the woods, our designs are built on real-life needs and unexpected moments of joy.
                            <br></br>
                            <br></br>
                            With a deep love for craftsmanship, color, and clever use of space, we turn the everyday into the extraordinary. We’ve built a great network of partners—proof of our collaborative spirit and our ‘let’s make it happen’ attitude.
                        </p>
                    </div>
                    <div>
                        <Image 
                        src="/collab-logos/arteriors.jpg"
                        alt="Arteriors Logo"
                        width={100}
                        height={100}
                        />

                        <Image 
                        src="/collab-logos/blu-dot.jpeg"
                        alt="Blu Dot Logo"
                        width={100}
                        height={100}
                        />

                        <Image 
                        src="/collab-logos/design-within-reach.png"
                        alt="Design Within Reach Logo"
                        width={100}
                        height={100}
                        />

                        <Image 
                        src="/collab-logos/holly-hunt.png"
                        alt="Holly Hunt Logo"
                        width={100}
                        height={100}
                        />

                        <Image 
                        src="/collab-logos/kravet.png"
                        alt="kravet Logo"
                        width={100}
                        height={100}
                        />

                        <Image 
                        src="/collab-logos/leftbank-art.jpeg"
                        alt="LeftBank Art Logo"
                        width={100}
                        height={100}
                        />

                        <Image 
                        src="/collab-logos/lulu-and-georgia.png"
                        alt="Lulu and Georgia Logo"
                        width={100}
                        height={100}
                        />

                        <Image 
                        src="/collab-logos/madegoods.png"
                        alt="MadeGoods Logo"
                        width={100}
                        height={100}
                        />

                        <Image 
                        src="/collab-logos/maiden-home.png"
                        alt="Maiden Home Logo"
                        width={100}
                        height={100}
                        />

                        <Image 
                        src="/collab-logos/verellen.png"
                        alt="Verellen Logo"
                        width={100}
                        height={100}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
  }
  