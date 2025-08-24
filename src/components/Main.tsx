import NavBarSide from "./NavBarSide"
import NavBarTop from "./NavBarTop"
import ProjectCard from "./ProjectCard"

export default function Main() {
    return (
        <div className="flex flex-col lg:flex-row px-4">
            
            <div className="sticky top-0 py-2 bg-[var(--background)] block lg:hidden">
                <NavBarTop />
            </div>
            
            <div className="hidden lg:block">
                <NavBarSide />
            </div>
            
            {/* flex-1 makes second child grow and fill all remaining horitzontal space */}
            <div className="flex-1"> 
                <h1 className="text-[var(--primary)] font-bold text-center py-[5%]">
                    Creative Interiors, Designed for Living
                </h1>

                <h3 className="text-center pb-[5%] max-w-[1000px] mx-auto">
                    Where color meets composition, and function never takes a back seat. We create spaces that feel as good as they look — tailored, spirited, and unmistakably yours.
                </h3>

                <div className="pb-[5%]">
                    <h2 className="font-bold pb-[2%]">
                        selected projects
                    </h2>

                    <div className="flex flex-col lg:flex-row justify-between">
                        <ProjectCard 
                        title="Rhinebeck"
                        description="Some description of the project or maybe no description at all."
                        imgSrc="/rhinebeck/main.jpg"
                        pageId="projects/#nyc"
                        />

                        <ProjectCard 
                        title="Upper East Side"
                        description="Some description of project or maybe no description at all."
                        imgSrc="/upper-east-side/main.jpg"
                        pageId="projects/#upstate"
                        />

                        <ProjectCard 
                        title="Clinton Corners"
                        description="Some description of project or maybe no description at all."
                        imgSrc="/clinton-corners/main.jpg"
                        pageId="projects/#montauk"
                        />
                    </div>
                </div>

                <div className="pb-[5%]">
                    <h2 className="font-bold pb-[2%]">
                        what we do
                    </h2>

                    <div className="font-geist flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                
                            <ul className="sm:text-lg list-disc list-inside">
                                <li>Full-Service Interior Design</li>
                                <li>Furniture & Finish Selection</li>
                                
                            </ul>
                        </div>

                        <div className="md:w-1/3">
                
                            <ul className="sm:text-lg list-disc list-inside">
                               
                                <li>Space Planning & Layout Optimization</li>
                                <li>Custom Millwork & Built-ins</li>
                            </ul>
                        </div>

                        <div className="md:w-1/3">
                            <ul className="sm:text-lg list-disc list-inside">
                                <li>Renovation & Construction Collaboration</li>
                                <li>Art & Styling</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="pb-[5%]">
                    <h2 className="font-bold pb-[2%]">
                        our approach
                    </h2>

                    <div className="font-geist">
                        <p className="sm:text-lg">
                            Design That Works (Hard) and Wows
                        </p>
                        <ul className="sm:text-lg list-disc list-inside">
                            <li>Function first: Every square inch earns its keep — but never feels utilitarian</li>
                            <li>Details that matter: We obsess over seams, scale, and sight lines so you don’t have to</li>
                            <li>Style with substance: Your home should reflect you — not a trend cycle</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}