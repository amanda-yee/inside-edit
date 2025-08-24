import NavBarSide from "@/components/NavBarSide";
import NavBarTop from "@/components/NavBarTop";
import ProjectCardMini from "@/components/ProjectCardMini";

export default function ProjectsPage() {
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
                    projects
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProjectCardMini 
                        title="Rhinebeck"
                        imgSrc="/rhinebeck/main.jpg"
                        projectId="rhinebeck"
                    />

                    <ProjectCardMini 
                        title="Clinton Corners"
                        imgSrc="/clinton-corners/main.jpg"
                        projectId="clinton-corners"
                    />

                    <ProjectCardMini 
                        title="5th Avenue"
                        imgSrc="/hero-image.png"
                        projectId="5th-avenue"
                    />

                    <ProjectCardMini 
                        title="West Village"
                        imgSrc="/hero-image.png"
                        projectId="west-village"
                    />

                    <ProjectCardMini 
                        title="Upper East Side"
                        imgSrc="/hero-image.png"
                        projectId="ues"
                    />

                    <ProjectCardMini 
                        title="Vermont"
                        imgSrc="/hero-image.png"
                        projectId="vermont"
                    />

                    <ProjectCardMini 
                        title="Upper West Side Townhouse"
                        imgSrc="/hero-image.png"
                        projectId="uws-townhouse"
                    />

                    <ProjectCardMini 
                        title="Upper West Side Apartment"
                        imgSrc="/hero-image.png"
                        projectId="uws-apartment"
                    />

                    
                </div>
            </div>
        </div>
    );
  }
  