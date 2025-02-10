import { PrismicNextImage } from "@prismicio/next";
import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { oswald, montserrat } from "@/libs/fonts";
/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "Team" Section.
 */
const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn("bg-gray-50  ")}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center pb-20 pt-20 uppercase text-black font-bold">
          The best of professionals
        </h1>
      </div>
      <div className="flex flex-col md:flex md:flex-row justify-center  items-center gap-11">
        {slice.primary.trainer.map((team, index) => (
          <div
            key={index}
            className="flex flex-col items-center md tracking-tighter gap-11 pt-7 justify-center"
          >
            <div className="">
              <div className="flex flex-col   justify-center">
                <PrismicNextImage
                  className="w-60 h-96 bg-gray-100 "
                  field={team.trainer_image}
                  alt=""
                />
                <h1 className="text-xl uppercase font-oswald text-black  font-bold">
                  {team.trainer_name}
                </h1>
                <p className="text-orange-500 font-bold pb-20 font-roboto uppercase">
                  {team.trainer_title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
