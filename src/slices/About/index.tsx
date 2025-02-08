import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Banner from "@/Components/About/aboutBanner";
import AboutSection from "@/Components/About/aboutSection";
import Team from "@/Components/About/aboutTeam";
import Testimonial from "@/Components/About/aboutTestimonial";



/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={cn(" ")}
    >
      <Banner slice={slice} index={0} slices={[]} context={null} />
      <AboutSection slice={slice} index={1} slices={[]} context={null} />
      <Team slice={slice} index={2} slices={[]} context={null} />
      <Testimonial slice={slice} index={3} slices={[]} context={null} />
    
    </section>
  );
};

export default About;
