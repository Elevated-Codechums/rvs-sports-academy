import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FreeTrial`.
 */
export type FreeTrialProps = SliceComponentProps<Content.FreeTrialSlice>;

/**
 * Component for "FreeTrial" Slices.
 */
const FreeTrial = ({ slice }: FreeTrialProps): JSX.Element => {
	return (
		<section
			className={cn(
				"h-full w-full flex items-start p-10 justify-between",
				"max-sm:p-5 max-sm:flex-col"
			)}
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			{slice.primary.title.map((title, index) => (
				<div
					key={index}
					className={cn(
						"flex flex-col items-center justify-between gap-36 w-full h-full p-10 rounded",
						"max-sm:p-5 max-sm:gap-8"
					)}
				>
					<div
						className={cn(
							"flex flex-row items-start justify-between gap-72 w-full h-full p-10 rounded",
							"max-sm:flex-col max-sm:gap-4 max-sm:p-5"
						)}
					>
						<div>
							<h1>{title.sub_heading}</h1>
							<h1
								className={cn(
									"text-5xl font-bold font-montserrat text-black"
								)}
							>	
								{title.heading}
							</h1>
						</div>

						<PrismicNextLink field={title.link}>
							<button
								className={cn(
									"text-white text-xl font-bold uppercase font-oswald rounded-lg w-40 h-12 bg-basketballOrange"
								)}
							>
								{title.link_label}
							</button>
						</PrismicNextLink>
					</div>
					<div className={cn("w-full", "max-sm:w-full")}>
						<PrismicNextImage
							className={cn("w-[750%] h-[500%]", "max-sm:w-full max-sm:h-auto")}
							field={slice.primary.image}
							alt=""
						/>
					</div>
				</div>
			))}
		</section>
	);
};

export default FreeTrial;
