import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { div } from "framer-motion/client";

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <section
      className={cn("min-h-screen bg-cover  bg-center")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={cn(
          "flex flex-col justify-center items-center w-full h-full"
        )}
      >
        <div
          className={cn(
            "flex flex-row items-center justify-center  w-full h-full p-10 rounded"
          )}
        >
          <div>
            <PrismicNextImage
              className={cn("w-[1300px] p-10 h-full")}
              field={slice.primary.image}
            />
          </div>
          <div>
            {slice.primary.gallery_text.map((text, index) => (
              <div className={cn("h-1/2 w-3/4")}>
                <PrismicNextImage field={text.image} />
              </div>
            ))}
          </div>
        </div>
        <div>
          {slice.primary.gallery_image.map((image, index) => (
            <div className={cn("flex flex-row justify-center")} key={index}>
              <PrismicNextImage
                className={cn("w-[350px] p-10 h-1/2")}
                field={image.image}
              />
              <PrismicNextImage
                className={cn("w-[350px] p-10 h-1/2")}
                field={image.image2}
              />
              <PrismicNextImage
                className={cn("w-[350px] p-10 h-1/2")}
                field={image.image3}
              />
            </div>
          ))}
        </div>
        <div>
          {slice.primary.gallery_description.map((description, index) => (
            <div className={cn("flex flex-row  justify-evenly")} key={index}>
              <div className={cn("w-1/3")}>
                <PrismicNextImage field={description.image} />
              </div>
              <div className={cn("w-[25%] gap-y-20 h-1/2 mt-60 ")}>
                <PrismicNextImage field={description.image2} />
                <PrismicRichText field={description.image_description} />
                <h1 className={cn("mt-8 tracking-widest text-3xl text-blacksmoke font-bold")}>{description.name}</h1>
                <h1 className={cn("mt-4 tracking-widest text-xl text-basketballOrange font-bold")}>{description.position}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
