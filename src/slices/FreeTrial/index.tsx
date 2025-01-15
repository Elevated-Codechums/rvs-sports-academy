import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { div } from "framer-motion/client";

/**
 * Props for `FreeTrial`.
 */
export type FreeTrialProps = SliceComponentProps<Content.FreeTrialSlice>;

/**
 * Component for "FreeTrial" Slices.
 */
const FreeTrial = ({ slice }: FreeTrialProps): JSX.Element => {
  return (
    <section
      className={cn("h-full w-full flex items-start p-10 justify-between")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.title.map((title, index) => (
        <div
          className={cn(
            "flex flex-col items-center justify-between gap-36  w-full h-full p-10 rounded")}
        >
          <div className={cn("flex flex-row items-start justify-between gap-72 w-full h-full p-10 rounded")}>
            <div>
            <h1>{title.sub_heading}</h1>
            <h1
              key={index}
              className={cn("text-5xl font-bold  font-montserrat text-black ")}
            >
              {title.heading}
            </h1>
            </div>
            
          
          <PrismicNextLink field={title.link}>
            <button
              className={cn(
                "text-white text-[30px]  rounded-lg w-60 h-16 bg-basketballOrange ")}
            >
              {title.link_label}
            </button>
          </PrismicNextLink>
          </div>
          <div>
            <PrismicNextImage
            className={cn("w-[750%] h-[500%]")}
              field={slice.primary.image}
              
              alt=""
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default FreeTrial;
