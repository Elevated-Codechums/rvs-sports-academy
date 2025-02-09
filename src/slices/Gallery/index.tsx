import {cn} from "@/libs/utils";
import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next";


/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({slice}: GalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn(" ")}
    >
      {/* Add your code here */}
      <div>
        <h1>{(slice.primary as any).heading}</h1>
      </div>
    </section>
  );
}

export default Gallery;