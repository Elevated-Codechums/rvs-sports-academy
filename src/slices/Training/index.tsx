import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Training`.
 */
export type TrainingProps = SliceComponentProps<Content.TrainingSlice>;

/**
 * Component for "Training" Slices.
 */
const Training = ({ slice }: TrainingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for training (variation: {slice.variation}) Slices
    </section>
  );
};

export default Training;
