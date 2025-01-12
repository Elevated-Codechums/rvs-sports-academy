"use client";

import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { motion } from "framer-motion";

/**
 * Props for `Program`.
 */
export type ProgramProps = SliceComponentProps<Content.ProgramSlice>;

/**
 * Component for "Program" Slices.
 */
const Program = ({ slice }: ProgramProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className={cn(
				"min-h-screen flex flex-wrap justify-center items-center"
			)}
		>
			{slice.primary.program_overview.map((program, index) => {
				return (
					<motion.div
						key={index}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						className={cn("flex flex-col items-center justify-center m-4 p-4 border rounded-lg w-1/3")}
					>
						<PrismicNextImage
							field={program.program_image}
							className={cn("w-full h-auto")}
						/>
						<h2 className={cn("text-2xl font-bold mt-4 text-center")}>
							{program.program_title}
						</h2>
						<PrismicRichText field={program.program_description} />
					</motion.div>
				)
			})}
		</section>
	);
};

export default Program;
