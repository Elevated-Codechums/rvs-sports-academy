import { PrismicNextImage } from "@prismicio/next";
import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Banner Slice.
 */
const Banner = ({ slice }: BannerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn(
        "relative text-white  flex flex-col  text-center overflow-hidden"
      )}
    >
      <div className="absolute inset-0 z-0">
        <PrismicNextImage
          style={{ objectFit: "cover" }}
          field={slice.primary.background_image}
          fill
          alt=""
        />
      </div>
      <div className="relative w-full z-10 bg-black bg-opacity-50 p-6"
            // style={{ backgroundImage: `url(${slice.primary.background_image.url})` }}
            >
        <h1 className="text-5xl font-bold uppercase mb-4">ABOUT US</h1>
        <div className="flex flex-col items-center">

        <p className="text-lg  text-center max-w-2xl">
          Vestibulum quis imperdiet diam, eu faucibus leo. Class aptent tacit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          congue, felis ac eleifend tempus.
        </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
