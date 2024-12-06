import { cn } from "@/libs/utils";

import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {Button} from "./Utils/Button";

export default async function Footer() {
	const client = createClient();

	const settings = await client.getSingle("settings");

	return (
		<footer
			className={cn(
				"px-40 flex flex-col items-center justify-between w-full bg-black text-white py-10 gap-10"
			)}
		>
			<div className={cn("w-full flex items-center justify-between")}>
				<div className={cn("flex flex-col items-start justify-center")}>
					<PrismicNextLink
						href="/"
						className={cn(
							"flex flex-col items-start justify-start gap-2"
						)}
					>
						<PrismicNextImage
							width={100}
							height={100}
							field={settings.data.site_logo}
							alt={""}
						/>
						<span className="text-4xl font-bold font-montserrat">
							{settings.data.site_title}
						</span>
						<span className={cn("font-outfit")}>
							{settings.data.site_slogan}
						</span>
					</PrismicNextLink>
				</div>
				<div className="flex flex-col items-start justify-start gap-5">
					<div className="flex flex-col items-start justify-start gap-2">
						<h5
							className={cn("text-2xl font-montserrat font-bold")}
						>
							Quick Links
						</h5>
						<div
							className={cn("w-[50%] h-1 rounded-lg bg-white")}
						></div>
					</div>
					<ul
						className={cn(
							"grid grid-cols-2 gap-5 font-roboto font-[500]"
						)}
					>
						{settings.data.navigations.map(
							(nav, index) => (
								<li>
									<PrismicNextLink
										className={cn("")}
										key={index}
										field={nav.link}
									>
										{nav.link_label}
									</PrismicNextLink>
								</li>
							),
							[]
						)}
					</ul>
				</div>
			</div>
			<div
				className={cn(
					"w-full font-outfit flex flex-col items-start justify-start gap-5"
				)}
			>
				<div className={cn("w-full h-1 rounded-lg bg-white")}></div>
				<div className="flex items-center justify-between w-full">
					<div>
						<p>
							&copy; {new Date().getFullYear()}{" "}
							{settings.data.site_title}
						</p>
						<p>Made with ❤️ by Elevated CodeChums</p>
					</div>
					<div className="flex flex-col items-start justify-between gap-5">
						<div className={cn("flex items-start justify-start flex-col gap-1")}>
							<h5
								className={cn(
									"text-xl font-montserrat font-bold"
								)}
							>
								Contact Us
							</h5>
							<div
								className={cn(
									"w-[30%] h-1 rounded-lg bg-white"
								)}
							></div>
						</div>
						<div className={cn("flex items-center justify-normal gap-3")}>
							<PrismicNextLink
								field={settings.data.contact_email}
							>
								<Button color="outline_secondary" size="small">
									{settings.data.contact_email_label}
								</Button>
							</PrismicNextLink>
							<PrismicNextLink
								field={settings.data.contact_number}
							>
								<Button
									color="outline_secondary"
									size="small"
									className={cn("")}
								>
									{settings.data.contact_number_label}
								</Button>
							</PrismicNextLink>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
