import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Blog`.
 */
export type BlogProps = SliceComponentProps<Content.BlogSlice>;

/**
 * Component for "Blog" Slices.
 */
const Blog = ({ slice }: BlogProps): JSX.Element => {
  return (
    <section
      className={cn("min-h-screen py-8")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-deepBlue">
          {slice.primary.heading}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {slice.primary.blog.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <PrismicNextImage
              className="w-full h-48 object-cover"
              field={blog.image}
              alt=""
            />
            <div className="p-4">
              <PrismicNextLink field={blog.heading}  className="text-lg hover:cursor font-bold text-deepBlue mb-1"/>
              
            </div>
            <div className="text-orange-500 pb-4">
              <PrismicRichText field={blog.description} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
