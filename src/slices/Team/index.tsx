import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
      className={cn("min-h-screen flex flex-col items-center justify-center")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-center mb-8">
        <h1 className="text-gray-600 pt-12 font-oswald uppercase text-8xl pb-5 font-semibold">
          {slice.primary.heading}
        </h1>
      </div>
      <div className="flex flex-wrap gap-x-24 gap-y-12 justify-center">
        {slice.primary.coaches.map((coach, index) => (
          <div
            key={index}
            className={cn(
              "text-center",
              index % 2 === 0
                ? "pl-10 pt-14 pr-6 sm:pl-0 sm:pr-0"
                : "pr-10 pl-6 sm:pl-0 sm:pr-0"
            )}
          >
            <div className="md:w-56 md:h-56 md:rounded-full rounded-md w-60 h-60 overflow-hidden">
              <PrismicNextImage
                className="object-cover w-full h-full"
                field={coach.image}
                alt=""
              />
            </div>
            <h2 className="mt-4 text-2xl text-deepBlue font-roboto font-bold uppercase">
              {coach.name}
            </h2>
            <div className="text-xl mt-2 uppercase font-semibold text-orange-500">
              <PrismicRichText field={coach.designation} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
