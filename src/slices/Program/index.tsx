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
      className={cn("min-h-screen flex items-center justify-center")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-1/2 h-full">
        <PrismicNextImage alt="" field={slice.primary.image} />
      </div>
      <div>
      <div>
        <h1 className={cn("text-black text-1xl uppercase font-bold")}>
          {slice.primary.sub_heading}
        </h1>
        <h1 className={cn("text-black text-2xl uppercase font-bold")}>
          {slice.primary.heading}
        </h1>
        <PrismicRichText field={slice.primary.description} />
      </div>
      
        <div>
          {slice.primary.basketball_card.map((card, index) => (
            <div className={cn("flex flex-row items-center justify-center h-1/2")} key={index}>
              <PrismicNextImage className={cn("h-1/2 w-20")} alt="" field={card.basketball_card_image} />
              <div className={cn("flex flex-col ")}>
              <h3 className={cn("font-bold text-md")}>{card.basketball_card_heading}</h3>
              <div className={cn("text-sm")}>
              <PrismicRichText  field={card.basketball_card_description} />
              </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {slice.primary.community_card.map((card, index) => (
            <div className={cn("flex flex-row items-center justify-center")} key={index}>
              <PrismicNextImage className={cn("h-1/2 w-20")} alt="" field={card.community_card_image} />
              <div className={cn("flex flex-col")}>
              <h3 className={cn("font-bold text-md")}>{card.community_card_heading}</h3>
              <div className={cn("text-sm")}>
              <PrismicRichText field={card.community_card_description} />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
