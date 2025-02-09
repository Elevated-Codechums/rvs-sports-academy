import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Program`.
 */
export type ProgramProps = SliceComponentProps<Content.ProgramSlice>;

/**
 * Component for "Program" Slice.
 */
const Program = ({ slice }: ProgramProps): JSX.Element => {
  return (
    <section
      className={cn("bg-[#FDF1E9] py-10 px-6")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-full">
          {/* Large Main Image */}
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <PrismicNextImage
              field={slice.primary.image}
              alt=""
              fill
              className="object-cover w-full h-full"
            />
          </div>

          {/* Overlapping Small Image */}
          <div className="absolute bottom-[-20px] left-[30px] md:bottom-[-40px] md:left-[50px] w-[40%] md:w-[30%] border-4 border-white rounded-lg shadow-xl overflow-hidden">
            <PrismicNextImage
              field={slice.primary.smallimage}
              alt=""
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text & Cards Section */}
        <div>
          {/* Heading Section */}
          <h3 className="text-[#FF6B00] uppercase text-sm font-bold tracking-wide flex items-center gap-2">
            <span className="text-xl">🏀</span> {slice.primary.sub_heading}
          </h3>
          <h2 className="text-black text-3xl font-bold mt-2 leading-snug">
            {slice.primary.heading}
          </h2>
          <div className="text-gray-600 text-md mt-3">
            <PrismicRichText field={slice.primary.description} />
          </div>

          {/* Program Cards */}
          <div className="mt-6 space-y-4">
            {slice.primary.basketball_card.map((card, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md border-l-4 border-[#FF6B00]"
              >
                {/* Icon */}
                <div className="p-2 bg-[#FF6B00] rounded-md flex items-center justify-center">
                  <PrismicNextImage
                    field={card.basketball_card_image}
                    alt=""
                    className="w-28 h-10 object-contain"
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h4 className="font-semibold text-lg">{card.basketball_card_heading}</h4>
                  <div className="text-sm text-gray-600">
                    <PrismicRichText field={card.basketball_card_description} />
                  </div>
                </div>
              </div>
            ))}

{slice.primary.community_card.map((card, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md border-l-4 border-[#FF6B00]"
              >
                {/* Icon */}
                <div className="p-2 bg-[#FF6B00] rounded-md flex items-center justify-center">
                  <PrismicNextImage
                    field={card.community_card_image}
                    alt=""
                    className="w-28 h-10 object-contain"
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h4 className="font-semibold text-lg">{card.community_card_heading}</h4>
                  <div className="text-sm text-gray-600">
                    <PrismicRichText field={card.community_card_description} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
