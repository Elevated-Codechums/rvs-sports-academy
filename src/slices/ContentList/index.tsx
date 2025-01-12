import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContentList`.
 */
export type ContentListProps = SliceComponentProps<Content.ContentListSlice>;

/**
 * Component for "ContentList" Slices.
 */
const ContentList = ({ slice }: ContentListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for content_list (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ContentList;
