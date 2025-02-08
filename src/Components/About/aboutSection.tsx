import { PrismicNextImage } from "@prismicio/next";
import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type AboutProps = SliceComponentProps<Content.AboutSlice>;

const AboutSection = ({ slice }: AboutProps): JSX.Element => {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className={cn("relative bg-[#FCEEE7] py-12 px-6 flex flex-col md:flex-row items-center justify-between rounded-lg")}
      >
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="absolute inset-0 -z-10 hidden md:block">
            <PrismicNextImage 
              field={slice.primary.background_image} 
              fill 
              style={{ objectFit: "cover" }}
              alt="" 
              className="rounded-lg"
            />
          </div>
          <div className="border-[10px] border-[#FF8C42] rounded-lg p-2 inline-block">
            <PrismicNextImage 
              field={slice.primary.background_image} 
              alt="" 
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
          <p className="text-red-500 text-orange-600 font-semibold uppercase text-sm md:text-4xl font-bold md:font-bold ">About Us</p>
          <h1 className="text-3xl  md:text-4xl font-bold mb-4">{slice.primary.heading}</h1>
          
          <div className="text-gray-700 mb-4 text-sm md:text-base">
            <PrismicRichText field={slice.primary.description} />
            
            </div>
          <a href="#" className="flex justify-center md:justify-start items-center text-red-500 font-semibold text-sm md:text-base">
            ● Read More
          </a>
        </div>
      </section>
    );
};

export default AboutSection;
