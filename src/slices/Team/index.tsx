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
      <div className="">
        <h1 className="text-sky-700 pl-8 uppercase  text-5xl font-semibold">
          {slice.primary.heading}
        </h1>
        <div className="flex flex-row gap-10 items-center justify-center w-full h-full">
          {slice.primary.coach1.map((coach, index) => (
            <div className={cn()} key={index}>
              <div className={cn("")}>
                <PrismicNextImage
                  alt=""
                  className={cn(
                    "w-[350px] p-10 rounded-[50%]  border-b-1  h-1/2"
                  )}
                  field={coach.image}
                />
                <h1 className="text-3xl text-sky-900 font-semibold pl-20">
                  {coach.title}
                </h1>
                <h1 className="text-2xl text-orange-500 pl-24">
                  {coach.heading}
                </h1>
              </div>
            </div>
          ))}
          {slice.primary.coach2.map((coach, index) => (
            <div className={cn("")}>
              <PrismicNextImage
                alt=""
                className={cn("w-[350px]  rounded-[50%]  border-b-1  h-1/2")}
                field={coach.image}
              />
              <h1 className="text-3xl text-sky-900 font-semibold pl-20">
                {coach.title}
              </h1>
              <h1 className="text-2xl text-orange-500 pl-28">
                {coach.heading}
              </h1>
            </div>
          ))}
          {slice.primary.coach3.map((coach, index) => (
            
            <div className={cn("")}>
              <PrismicNextImage
                alt=""
                className={cn("w-[270px]  rounded-[100%]   border-b-1  h-1/4")}
                field={coach.image}
              />
              <h1 className="text-3xl text-sky-900 font-semibold pl-10">
                {coach.title}
              </h1>
              <h1 className="text-2xl text-orange-500 pl-20">
                {coach.heading}
              </h1>
            </div>
          ))}
          {slice.primary.coach4.map((coach, index) => (
            
            <div className={cn("")}>
              <PrismicNextImage
                alt=""
                className={cn("w-[250px]  rounded-[100%]  border-b-1  h-1/4")}
                field={coach.image}
              />
              <h1 className="text-3xl text-sky-900 font-semibold pl-10">
                {coach.title}
              </h1>
              <h1 className="text-2xl text-orange-500 pl-20">
                {coach.heading}
              </h1>
            </div>
          ))}
        </div>
          
      </div>
    </section>
  );
};

export default Team;
