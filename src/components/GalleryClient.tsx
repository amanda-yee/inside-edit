"use client";

import Image from 'next/image';

//https://www.npmjs.com/package/react-photoswipe-gallery
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

type MediaImage = {
  src: string;
  width: number;
  height: number;
};

type GalleryClientProps = {
    images: MediaImage[];
    thumbnailCount: number;
  };

export default function GalleryClient( {images, thumbnailCount = 3}: GalleryClientProps ) {

    return (
        <Gallery>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                {images.map((img, i) => (
                    <Item
                        key={i}
                        original={img.src}
                        thumbnail={img.src}
                        width={img.width}
                        height={img.height}
                    >
                        {({ ref, open }) => (
                            <div
                                ref={ref}
                                onClick={open}
                                className={`relative w-full aspect-square overflow-hidden cursor-pointer ${i >= thumbnailCount ? "hidden" : ""}`}
                            >
                                <Image
                                    src={img.src}
                                    alt={`Project Image ${i + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </Item>
                ))}    
            </div>
        </Gallery>
    )
}