import { cn } from "@/libs/utils";
import { GalleryPageProps } from "@/slices/GalleryPage";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Key } from "lucide-react";


export type Gallery = SliceComponentProps<Content.GalleryPageSlice>;

const Gallery = ({ slice }: GalleryPageProps): JSX.Element => {
    return(
        <>
        <section 
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className={cn(" flex flex-row items-center justify-center max-w-6xl mx-auto px-6 md:px-0")}
        >
        <div >
            {slice.primary.images.map((item, index) =>(
                <PrismicNextImage
                key={index}
                field={item.image}
                width={200}
                height={200}
                alt=""
                className="mx-auto md:mx-0 "
                />
            ))}
        </div>
        </section>
        </>
    )}
    export default Gallery;