import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Program`.
 */
export type ProgramProps = SliceComponentProps<Content.ProgramSlice>;

/**
 * Component for "Program" Slices.
 */
const Program = ({ slice }: ProgramProps): JSX.Element => {
  return (
    <section
      className={cn("min-h-screen flex flex-col items-center justify-center p-4 sm:p-6")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Main Image Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Large Image - Always Full Size */}
        <div className="relative">
          <PrismicNextImage 
            field={slice.primary.image} 
            alt="" 
            width={700} 
            height={500} 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Overlapping Small Image - Smaller on Small Devices */}
        <div className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2 sm:translate-x-6 sm:translate-y-6 border-2 sm:border-4 border-white rounded-lg shadow-lg">
          <PrismicNextImage 
            field={slice.primary.smallimage} 
            alt="" 
            width={250} 
            height={200} 
            className="rounded-lg w-[40%] sm:w-auto max-w-[120px] sm:max-w-full h-auto"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center sm:text-left mt-6 sm:mt-10 max-w-3xl">
        <h1 className={cn("text-black text-sm sm:text-lg uppercase font-bold")}>
          {slice.primary.sub_heading}
        </h1>
        <h1 className={cn("text-black text-lg sm:text-2xl p-2 sm:p-3 uppercase font-bold")}>
          {slice.primary.heading}
        </h1>
        <div className={cn("text-black text-xs sm:text-md p-2 sm:p-4")}>
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col items-center justify-center sm:justify-between w-full max-w-4xl gap-3 sm:gap-4 mt-6">
        {slice.primary.basketball_card.map((card, index) => (
          <div className="flex flex-row items-center w-full sm:w-[48%] gap-2 sm:gap-3" key={index}>
            <PrismicNextImage 
              className={cn("h-auto w-12 sm:w-20")}
              alt=""
              field={card.basketball_card_image} 
            />
            <div className="flex  justify-center flex-col">
              <h3 className={cn("font-bold   text-sm sm:text-lg")}>
                {card.basketball_card_heading}
              </h3>
              <div className={cn("text-xs sm:text-md")}>
                <PrismicRichText field={card.basketball_card_description} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Community Cards Section */}
      <div className="flex flex-col justify-center items-center sm:justify-between w-full max-w-4xl gap-3 sm:gap-4 mt-6">
        {slice.primary.community_card.map((card, index) => (
          <div className="flex flex-row items-center  w-full sm:w-[48%] gap-2 sm:gap-3" key={index}>
            <PrismicNextImage 
              className={cn("h-auto w-12 sm:w-20")}
              alt=""
              field={card.community_card_image} 
            />
            <div className="flex flex-col">
              <h3 className={cn("font-bold text-sm sm:text-lg")}>
                {card.community_card_heading}
              </h3>
              <div className={cn("text-xs sm:text-md")}>
                <PrismicRichText field={card.community_card_description} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
