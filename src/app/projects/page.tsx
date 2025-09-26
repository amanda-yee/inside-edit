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

                <div className="grid content-end grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProjectCardMini 
                        title="Hudson Valley"
                        imgSrc="/hudson-valley/photo1.webp"
                        projectId="hudson-valley"
                    />

                    <ProjectCardMini 
                        title="Upstate Barn"
                        imgSrc="/upstate-barn/photo1.webp"
                        projectId="upstate-barn"
                    />

                    <ProjectCardMini 
                        title="Upstate NY"
                        imgSrc="/upstate-new-york/photo1.webp"
                        projectId="upstate-new-york"
                    />

                    <ProjectCardMini 
                        title="5th Avenue"
                        imgSrc="/5th-avenue/photo1.webp"
                        projectId="5th-avenue"
                    />

                    <ProjectCardMini 
                        title="West Village"
                        imgSrc="/west-village/photo1.webp"
                        projectId="west-village"
                    />

                    <ProjectCardMini 
                        title="Upper East Side"
                        imgSrc="/ues/photo1.webp"
                        projectId="ues"
                    />

                    {/* <ProjectCardMini 
                        title="Upper West Side Townhouse"
                        imgSrc="/hero-image.png"
                        projectId="uws-townhouse"
                    />

                    <ProjectCardMini 
                        title="Upper West Side Apartment"
                        imgSrc="/hero-image.png"
                        projectId="uws-apartment"
                    />
                    
                    <ProjectCardMini 
                        title="Vermont"
                        imgSrc="/hero-image.png"
                        projectId="vermont"
                    /> */}
                    
                </div>
            </div>
        </div>
    );
  }
  