import { cn } from "@/libs/utils";
import { GalleryPageProps } from "@/slices/GalleryPage";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

export type Gallery = SliceComponentProps<Content.GalleryPageSlice>;

const Gallery = ({ slice }: GalleryPageProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            className={cn("max-w-6xl mx-auto px-6 md:px-0 py-8")}
        >
            <div className="text-center mb-8">
                <h1 className="text-6xl font-roboto-condensed uppercase font-bold">
                    {slice.primary.heading}
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {slice.primary.image.map((image, index) => (
                    <div key={index} className="relative w-full aspect-[2.5/3]">
                        <PrismicNextImage
                            field={image.image}
                            alt=""
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
