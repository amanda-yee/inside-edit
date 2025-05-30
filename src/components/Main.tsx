import NavBar from "./NavBar"
import ProjectCard from "./ProjectCard"

export default function Main() {
    return (
        <div className="flex pr-6">
            <div>
                <NavBar />
            </div>
            
            {/* flex-1 makes second child grow and fill all remaining horitzontal space */}
            <div className="flex-1"> 
                <h1 className="text-[var(--primary)] font-bold text-6xl text-center py-30">
                    Full service design and styling studio, based in New York.
                </h1>

                <div className="pb-20">
                    <h2 className="font-bold text-4xl pb-6">
                        selected projects
                    </h2>

                    <div className="flex justify-between">
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

                    <div className="flex">
                        <div className="font-geist w-1/3">
                            <h3 className="font-bold text-xl py-4">
                                Design
                            </h3>
                            <ul className="text-lg list-disc list-inside">
                                <li>service service</li>
                                <li>service service</li>
                                <li>service service</li>
                                <li>service service</li>
                            </ul>
                        </div>

                        <div className="font-geist w-1/3">
                            <h3 className="font-bold text-xl py-4">
                                Specifications
                            </h3>
                            <ul className="text-lg list-disc list-inside">
                                <li>service service</li>
                                <li>service service</li>
                                <li>service service</li>
                                <li>service service</li>
                            </ul>
                        </div>

                        <div className="font-geist w-1/3">
                            <h3 className="font-bold text-xl py-4">
                                Product Management
                            </h3>
                            <ul className="text-lg list-disc list-inside">
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