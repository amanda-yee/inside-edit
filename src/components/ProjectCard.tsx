import Image from "next/image";

type ProjectCardProps = {
    title: string;
    description: string;
    imgSrc: string;
  };


export default function ProjectCard( {title, description, imgSrc}: ProjectCardProps ) {
    return (
        <div className="font-geist w-1/3">
            <Image 
                className="rounded-xl"
                src={imgSrc}
                alt="Project Image"
                width={350}
                height={150}
            />

            <h3 className="font-bold text-xl py-4">
                {title}
            </h3>

            <p className="text-lg">
                {description}
            </p>
        </div>
    )
}