import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Gallery from "@/Components/Gallery";

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
      <Gallery slice={slice} index={0} slices={[]} context={null} />
    </section>
  );
};

export default GalleryPage;
