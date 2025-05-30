import Image from "next/image"
import NavBar from "@/components/NavBar";

export default function ProjectsPage() {
    return (
        <div className="flex pr-6 mr-10">
            <div>
                <NavBar />
            </div>

            <div className="flex-1"> 
                <h1 className="text-[var(--primary)] font-bold text-6xl pt-10 pb-6">
                    projects
                </h1>

                <div id="nyc" className="font-geist pb-10">
                    <h2 className="font-bold text-3xl py-6">
                        New York City
                    </h2>
                    <div className="flex gap-12">
                        <div className="w-[80%] pb-4">
                            <p>
                                Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                            </p>
                        </div>
                    </div>
                    <Image
                    className=""
                    src="/hero-image.png"
                    alt="Hero Image"
                    width={500}
                    height={0}
                    />
                </div>

                <div id="montauk" className="font-geist pb-10">
                    <h2 className="font-bold text-3xl py-6">
                        Montauk
                    </h2>
                    <div className="flex gap-12">
                        <div className="w-[80%] pb-4">
                            <p>
                                Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                            </p>
                        </div>
                    </div>
                    <Image
                    className=""
                    src="/hero-image.png"
                    alt="Hero Image"
                    width={500}
                    height={0}
                    />
                </div>

                <div id="upstate" className="font-geist pb-10">
                    <h2 className="font-bold text-3xl py-6">
                        Upstate New York
                    </h2>
                    <div className="flex gap-12">
                        <div className="w-[80%] pb-4">
                            <p>
                                Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                            </p>
                        </div>
                    </div>
                    <Image
                    className=""
                    src="/hero-image.png"
                    alt="Hero Image"
                    width={500}
                    height={0}
                    />
                </div>

            </div>
        </div>
    );
  }
  