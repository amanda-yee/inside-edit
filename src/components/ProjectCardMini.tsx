import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

type ProjectCardMiniProps = {
    title: string;
    imgSrc: string;
    projectId: string;
  };


export default function ProjectCardMini( {title, imgSrc, projectId}: ProjectCardMiniProps ) {
    return (
        // justify-end makes card sit flush at bottom of the grid row (accounts for long titles)       
        <div className="flex flex-col justify-end pb-10 px-2">
            <h2 className="font-bold text-center">
                {title}
            </h2>
            
            <div className="aspect-square relative">
                <Link href={`/projects/${projectId}`} aria-label={`View details for ${title}`} className="cursor-pointer block">
                <Image
                className="object-cover" //crops instead of stretching
                src={imgSrc}
                alt="Project Image"
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                />
                priority
                </Link>
            </div>
        </div>
    )
}