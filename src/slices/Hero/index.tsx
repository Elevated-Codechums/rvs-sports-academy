import { Button, AnimatedButton } from "@/Components/Utils/Button";
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
      className={cn(
        "flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      )}
      style={{ backgroundImage: `url(${slice.primary.hero_image.url})` }}
    >
      <div
        className={cn(
          "relative flex flex-col items-center justify-center gap-5 w-full h-full p-10 rounded"
        )}
      >
        <h1
          className={cn(
            "text-8xl w-1/2 ml-[-480px] font-bold font-montserrat text-white"
          )}
        >
          {slice.primary.title}
        </h1>
        {/* <p className={cn("text-lg text-center font-roboto font-[500] w-[50%] text-white")}>
        {slice.primary.paragraph}
      </p> */}
        <PrismicNextLink field={slice.primary.link}>
          <Button
            className={cn(
              "text-white text-[30px]  rounded-lg ml-[-480px] w-60 h-16 bg-basketballOrange "
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
