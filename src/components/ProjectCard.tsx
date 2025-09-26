import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    title: string;
    imgSrc: string;
    pageId: string;
  };


export default function ProjectCard( {title, imgSrc, pageId}: ProjectCardProps ) {
    return (
        <div className="font-geist pb-4">
             <div>
                <h3 className="font-bold pb-4">
                    {title}
                </h3>
            </div>

            <div className="overflow-hidden pr-4">
                <Link href={pageId}>
                    <Image 
                        className="transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
                        src={imgSrc}
                        alt="Project Image"
                        width={350}
                        height={150}
                    />
                </Link>
            </div>
        </div>
    )
}