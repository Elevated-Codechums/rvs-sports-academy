import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Testimonial`.
 */
interface AboutSliceDefaultPrimary {
  testimonial_text: any;
  name: string;
  position: string;
  image: any;
}

export type TestimonialProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "Testimonial" Slice.
 */
const Testimonial = ({ slice }: TestimonialProps): JSX.Element => {
  return (
    <section
      className={cn("py-16 bg-white flex flex-col items-center justify-between max-w-6xl mx-auto px-6 md:px-0")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <h1 className="text-3xl md:text-7xl uppercase font-bold mt-12 text-black text-center">
          Testimonials
        </h1>
        <br />
      </div>
      
      <div className="w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
        <div className="flex flex-col items-center ">
        <PrismicNextImage
          field={slice.primary.newsletter_image}
          width={200}
          height={200}
          alt=""
          className="mx-auto bg-gray-50 md:mx-0"
        />
        <h1 className="font-oswald text-xl font-semibold">{slice.primary.newsletter_heading}</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-rose-600 text-2xl md:text-5xl italic uppercase">
            {slice.primary.newsletter_title}
          </h1>
          <div className="text-base md:text-3xl">
            <PrismicRichText field={slice.primary.newsletterdiscription} />
          </div>
          <h1 className="text-rose-600 text-2xl md:text-5xl italic uppercase md:pt-20">
            {slice.primary.newsletter_title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
