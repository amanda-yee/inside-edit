import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    title: string;
    description: string;
    imgSrc: string;
    pageId: string;
  };


export default function ProjectCard( {title, description, imgSrc, pageId}: ProjectCardProps ) {
    return (
        <div className="font-geist flex pb-4 lg:flex-col lg:w-1/3 ">
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

            <div>
                <h3 className="font-bold py-4">
                    {title}
                </h3>

                <p className="sm:text-lg">
                    {description}
                </p>
            </div>
        </div>
    )
}