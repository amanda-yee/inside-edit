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

                <div className="gap-12 font-geist pb-6 lg:max-w-[90%]">
                    <div>
                        <p>
                            We don’t do cookie-cutter. We do custom. Every home has its own rhythm - we tune in, layer in texture, add soul, and make it sing. Whether it’s a sun-drenched loft, a brownstone with bones, or a weekend escape in the woods, our designs are built on real-life needs and unexpected moments of joy.
                            <br />
                            <br />
                            With a deep love for craftsmanship, color, and clever use of space, we turn the everyday into the extraordinary. We’ve built a great network of partners - proof of our collaborative spirit and our ‘let’s make it happen’ attitude.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 items-center gap-4">
                    
                    <a href="https://www.arteriorshome.com/" target="_blank" rel="noopener noreferrer">
                        <Image 
                        src="/collab-logos/arteriors.png"
                        alt="Arteriors Logo"
                        width={100}
                        height={100}
                        />
                    </a>

                    <a href="https://cushmandesign.com/" target="_blank" rel="noopener noreferrer">
                        <Image 
                        src="/collab-logos/cushman-design-group.png"
                        alt="Cushman Design Group Logo"
                        width={100}
                        height={100}
                        />
                    </a>

                    <a href="https://dedar.com/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/dedar.png"
                    alt="Dedar Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    <a href="https://www.dwr.com/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/design-within-reach.png"
                    alt="Design Within Reach Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    <a href="https://elitis.fr/en" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/elitis.png"
                    alt="Elitis Logo"
                    width={100}
                    height={100}
                    />
                    </a>
                    
                    <a href="https://www.hollyhunt.com/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/holly-hunt.png"
                    alt="Holly Hunt Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    <a href="https://hubbardtonforge.com/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/hubbardton-forge.jpg"
                    alt="Hubbardton Forge Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    <a href="https://www.kravet.com/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/kravet.png"
                    alt="kravet Logo"
                    width={100}
                    height={100}
                    />
                    </a>
                    
                    <a href="https://www.lutron.com/us/en" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/lutron.png"
                    alt="Lutron Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    <a href="https://www.maidenhome.com/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/maiden-home.jpg"
                    alt="Maiden Home Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    <a href="https://www.madegoods.com/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/madegoods.png"
                    alt="MadeGoods Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    {/* Placeholder - MaryAnn Thompson Architects */}

                    <a href="http://www.norwoodnyc.com/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/norwood.png"
                    alt="Norwood Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    <a href="https://www.palecek.com/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/palecek.png"
                    alt="Palecek Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    <a href="https://www.pierrefrey.com/en/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/pierre-frey.png"
                    alt="Pierre Frey Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    <a href="https://www.soane.co.uk/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/soane.png"
                    alt="Soane Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    <a href="https://tf.design/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/tina-frey.jpg"
                    alt="Tina Frey Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    <a href="https://verellen.biz/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/verellen.png"
                    alt="Verellen Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    <a href="https://www.visualcomfort.com/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/visual-comfort.png"
                    alt="Visual Comfort & Co Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                    <a href="https://www.4plus.design/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    src="/collab-logos/4plus-design.png"
                    alt="4Plus Design Logo"
                    width={100}
                    height={100}
                    />
                    </a>

                 </div>

            </div>
        </div>
    );
  }
  