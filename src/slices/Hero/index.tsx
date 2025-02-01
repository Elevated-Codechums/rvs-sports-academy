import { PrismicNextImage } from "@prismicio/next";
import { Button } from "@/Components/Utils/Button";
import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn("relative flex flex-col items-center justify-center min-h-screen overflow-hidden")}
    >
      {/* PrismicNextImage for Background Image */}
      {slice.primary.hero_image.url && (
        <PrismicNextImage
          field={slice.primary.hero_image}
          alt=""
          fill
          className="absolute inset-0 w-full h-full object-cover object-center z-[-1]"
        />
      )}

      <div
        className={cn(
          "relative flex flex-col items-center justify-center gap-5 w-full h-full p-4 md:p-10 rounded"
        )}
      >
        <h1
          className={cn(
            "text-4xl sm:text-6xl md:text-8xl w-full md:w-1/2 ml-0 md:ml-[-480px] font-bold font-montserrat text-white"
          )}
        >
          {slice.primary.title}
        </h1>

        <PrismicNextLink field={slice.primary.link}>
          <Button
            className={cn(
              "text-white text-xl sm:text-2xl md:text-[30px] rounded-lg ml-0 md:ml-[-480px] w-40 sm:w-48 md:w-60 h-12 sm:h-14 md:h-16 bg-basketballOrange"
            )}
          >
            {slice.primary.link_label}
          </Button>
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default Hero;
