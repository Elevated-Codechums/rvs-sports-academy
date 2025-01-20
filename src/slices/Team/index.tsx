import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { div } from "framer-motion/client";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps): JSX.Element => {
	return (
		<section
			className={cn(
				"min-h-screen flex flex-col items-start justify-center"
			)}
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div>
				{slice.primary.coach1.map((coach, index) => (
					<div
						className={cn(
							"flex flex-col items-center justify-center w-full h-full p-10 rounded"
						)}
						key={index}
					>
						<div className={cn("")}>
							<PrismicNextImage
								alt=""
								className={cn(
									"w-[350px] rounded-[50%] p-10 h-1/2"
								)}
								field={coach.image}
							/>
							<h1>{coach.title}</h1>
							<h1>{coach.heading}</h1>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Team;
