import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { div } from "framer-motion/client";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <section
      className={cn("min-h-screen flex flex-col items-start justify-center")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={cn(
          "flex flex-row items-start justify-center  gap-9 w-full h-full p-10"
        )}
      >
        {slice.primary.sub_title.map((sub_title, index) => (
          <div
            className={cn(
              "flex flex-col items-start justify-center  ml-[200px] mt-[-40px]  w-[4a00px] h-full p-10 rounded"
            )}
            key={index}
          >
            <div className={cn("flex flex-row justify-start items-center")}>
              <PrismicNextImage alt="" field={sub_title.image} />
              <h1>
              {sub_title.title}
            </h1>
            </div>
            <h1
              className={cn(
                "text-4xl font-bold w-64 font-montserrat"
              )}
            >
              {sub_title.heading}
            </h1>
          </div>
        ))}

        {/* Paragraph */}
        <div>
          {slice.primary.paragraph.map((paragraph, index) => (
            <div className={cn(" text-sm ")} key={index}> 
              <h1 className={cn("font-bold")}>{paragraph.heading}</h1>
              <PrismicRichText  field={paragraph.description} /> 
              <PrismicNextLink field={paragraph.link}>
                <button
                  className={cn(
                    "text-white text-sm  rounded-xl   w-36 h-10 bg-basketballOrange "
                  )}
                >
                  {paragraph.link_label}
                </button>

              </PrismicNextLink>
        </div>
          ))}
        </div>

        {/* Image */}
        <div>
          {slice.primary.image.map((image, index) => (
            <div className={cn("w-3/4  h-full")} key={index}>
              <PrismicNextImage alt="" field={image.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
