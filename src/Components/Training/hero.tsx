import { PrismicNextImage } from "@prismicio/next";
import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { oswald, roboto ,montserrat } from "@/libs/fonts";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TrainingProps = SliceComponentProps<Content.TrainingSlice>;

const Hero = ({ slice }: TrainingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center  bg-gray-50 justify-center gap-4 px-4 py-8 sm:px-8"
    >
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl uppercase font-oswald sm:text-3xl md:text-6xl font-bold mb-4 text-center">
          {slice.primary.heading}
        </h1>
        <div className="mb-6 font-montserrat text-center">
          <PrismicRichText field={slice.primary.description} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-10 gap-10">
          {slice.primary.plans.map((plan, index) => (
            <div
              key={index}
              className="border-[0.5px] border-deepBlue bg-white p-4 w-full justify-center rounded-lg flex flex-col items-center"
            >
              <div className="w-full   h-48 relative mb-4">
              <PrismicNextImage
                field={plan.image}
                alt=""
                className="object-cover w-full h-full rounded"
              />
              </div>
              <h2 className="text-xl font-semibold text-orange-500 hover:cursor-pointer font-roboto hover:text-deepBlue mb-2">{plan.title}</h2>
              <h1 className="text-lg  font-bold text-black mb-2">
              {plan.price}
              </h1>
              <div className="text-center text-black">
              <PrismicRichText field={plan.description} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;