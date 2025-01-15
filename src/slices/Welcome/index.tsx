import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Welcome`.
 */
export type WelcomeProps = SliceComponentProps<Content.WelcomeSlice>;
/**
 * Component for "Welcome" Slices.
 */
const Welcome = ({ slice }: WelcomeProps): JSX.Element => {
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
        <h3 className="text-basketballOrange text-sm font-montserrat tracking-widest uppercase">{slice.primary.sub_heading}</h3>
        <h1 className="text-blacksmoke text-4xl uppercase font-oswald  font-[500] pb-8">{slice.primary.heading}</h1>
        <PrismicRichText field={slice.primary.description} />
      </div>
    </section>
  );
};

export default Welcome;
