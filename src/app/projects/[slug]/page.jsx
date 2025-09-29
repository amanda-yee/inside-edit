import { projectsData } from '../projectsData';
import NavBarSide from "@/components/NavBarSide";
import NavBarTop from "@/components/NavBarTop";
import Image from 'next/image';
import GalleryClient from '@/components/GalleryClient';

// import ImageCarousel from "@/components/ImageCarousel";

// this will pre-generate all the paths at build time, e.g. /projects/hudson-valley, /projects/upstate-new-york
// [slug] is a dynamic segment, enabling this one page component to handle multiple routes
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

        {project.subheading2 && (
          <h2 className="pb-6">
          {project.subheading}
        </h2>
        )}

        <div className="lg:max-w-[90%]">
          <div className="pb-8">
            <p style={{ whiteSpace: "pre-line" }} className="font-geist">
              {project.description}
            </p>
          </div>


        <GalleryClient images={project.media} thumbnailCount={project.thumbnailCount} />

          {/* <div className="grid content-end grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {project.media.map((imageSrc, index) => (
              <div key={index} className="aspect-square relative">
                  <Image
                  className="object-cover" //crops instead of stretching
                  src={imageSrc} 
                  alt="Project Image"
                  fill
                  sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                  loading="lazy" 
                  />
              </div>
            ))}
          </div>   */}

          {/* <div className="mt-8">
            <ImageCarousel mediaArray={project.media}/>
          </div> */}
        </div>

      </div>
    </div>
  );
}