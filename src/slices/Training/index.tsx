import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Hero from "@/Components/Training/hero";
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
      <Hero slice={slice} index={0} slices={[]} context={null}/>
    </section>
  );
};

export default Training;
