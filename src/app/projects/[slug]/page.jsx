import { projectsData } from '../projectsData';
import NavBarSide from "@/components/NavBarSide";
import NavBarTop from "@/components/NavBarTop";

import ImageCarousel from "@/components/ImageCarousel";

// this will pre-generate all the paths at build time, e.g. /projects/rhinebeck, /projects/clinton-corners
export async function generateStaticParams() {
  return projectsData.map((proj) => ({
    slug: proj.slug,
  }));
}

export default async function IndividualProjectPage({ params }) {
  const { slug } = await params; // get value from URL
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return <p>Project not found</p>;

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
            {project.title}
        </h1>

        <h2 className="pb-6">
            {project.subheading}
        </h2>

        <p style={{ whiteSpace: "pre-line" }} className="font-geist">
          {project.description}
        </p>

        <div className="mt-8">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}