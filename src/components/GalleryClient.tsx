"use client";

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

type GalleryClientProps = {
    images: any[];
    thumbnailCount: number;
  };



export default function GalleryClient( {images, thumbnailCount = 3}: GalleryClientProps ) {

    return (
        <Gallery>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                {images.map((img, i) => (
                    <div key={i} className={`w-full aspect-square overflow-hidden ${ 
                                            i >= thumbnailCount ? "hidden" : ""
                                            }`} // only render thumbnail image if within count (hide extra images visually)
                    >
                        <Item
                            // key={i}
                            original={img.src}
                            thumbnail={img.src}
                            width={img.width}
                            height={img.height}
                        >
                            {({ ref, open }) => (
                            <img
                                ref={ref}
                                onClick={open} // opens fullscreen
                                src={img.src}
                                alt={`Project Image ${i + 1}`}
                                className="cursor-pointer w-full h-full object-cover" // object-cover to fill entire box
                            />
                            )}
                        </Item>
                    </div>
                ))}    
            </div>
        </Gallery>
    )
}