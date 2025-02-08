import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `GalleryPage`.
 */
export type GalleryPageProps = SliceComponentProps<Content.GalleryPageSlice>;

/**
 * Component for "GalleryPage" Slices.
 */
const GalleryPage = ({ slice }: GalleryPageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for gallery_page (variation: {slice.variation})
      Slices
    </section>
  );
};

export default GalleryPage;
