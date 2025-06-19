import NavBarSide from "./NavBarSide"
import NavBarTop from "./NavBarTop"
import ProjectCard from "./ProjectCard"

export default function Main() {
    return (
        <div className="flex flex-col lg:flex-row px-6">
            
            <div className="block lg:hidden">
                <NavBarTop />
            </div>
            
            <div className="hidden lg:block">
                <NavBarSide />
            </div>
            
            {/* flex-1 makes second child grow and fill all remaining horitzontal space */}
            <div className="flex-1"> 
                <h1 className="text-[var(--primary)] font-bold text-4xl md:text-6xl text-center py-[10%]">
                    Full service design and styling studio, based in New York.
                </h1>

                <div className="pb-[5%]">
                    <h2 className="font-bold text-4xl pb-6">
                        selected projects
                    </h2>

                    <div className="flex flex-col lg:flex-row justify-between">
                        <ProjectCard 
                        title="New York City"
                        description="Some description of the project or maybe no description at all."
                        imgSrc="/project-image-1.png"
                        pageId="projects/#nyc"
                        />

                        <ProjectCard 
                        title="Montauk"
                        description="Some description of project or maybe no description at all."
                        imgSrc="/project-image-2.png"
                        pageId="projects/#montauk"
                        />

                        <ProjectCard 
                        title="Upstate New York"
                        description="Some description of project or maybe no description at all."
                        imgSrc="/project-image-3.png"
                        pageId="projects/#upstate"
                        />
                    </div>
                </div>

                <div className="pb-10">
                    <h2 className="font-bold text-4xl pb-6">
                        services
                    </h2>

                    <div className="font-geist flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                            <h3 className="font-bold text-lg sm:text-xl py-4">
                                Design
                            </h3>
                            <ul className="sm:text-lg list-disc list-inside">
                                <li>service service</li>
                                <li>service service</li>
                                <li>service service</li>
                                <li>service service</li>
                            </ul>
                        </div>

                        <div className="md:w-1/3">
                            <h3 className="font-bold text-lg sm:text-xl py-4">
                                Specifications
                            </h3>
                            <ul className="sm:text-lg list-disc list-inside">
                                <li>service service</li>
                                <li>service service</li>
                                <li>service service</li>
                                <li>service service</li>
                            </ul>
                        </div>

                        <div className="md:w-1/3">
                            <h3 className="font-bold text-lg sm:text-xl py-4">
                                Product Management
                            </h3>
                            <ul className="sm:text-lg list-disc list-inside">
                                <li>service service</li>
                                <li>service service</li>
                                <li>service service</li>
                                <li>service service</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}