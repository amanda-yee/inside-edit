import Image from "next/image";

type ProjectCardProps = {
    title: string;
    description: string;
    imgSrc: string;
  };


export default function ProjectCard( {title, description, imgSrc}: ProjectCardProps ) {
    return (
        <div className="font-geist w-1/3">
            <div className="overflow-hidden">
                <Image 
                    className="transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
                    src={imgSrc}
                    alt="Project Image"
                    width={350}
                    height={150}
                />
            </div>
            
            <h3 className="font-bold text-xl py-4">
                {title}
            </h3>

            <p className="text-lg">
                {description}
            </p>
        </div>
    )
}