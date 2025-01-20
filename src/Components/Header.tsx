import { cn } from "@/libs/utils";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Button, LinkButton } from "@/Components/Utils/Button";

export default async function Header() {
	const client = createClient();

	const settings = await client.getSingle("settings");

	return (
		<header
			className={cn(
				"sticky top-0 left-0 z-50 h-[80px] w-full flex items-center justify-between px-40 bg-background text-black border-2 border-b-deepBlue"
			)}
		>
			<div className={cn("text-3xl font-montserrat font-bold")}>
				<PrismicNextLink
					href="/"
					className={cn("flex items-center justify-between gap-2")}
				>
					<PrismicNextImage
						width={50}
						height={50}
						field={settings.data.site_logo}
						alt=""
					/>
					{settings.data.site_title}
				</PrismicNextLink>
			</div>
			<div
				className={cn(
					"flex items-center justify-between gap-5 font-roboto font-[500]"
				)}
			>
				{settings.data.navigations.map(
					(nav, index) => (
						<PrismicNextLink
							className={cn("")}
							key={index}
							field={nav.link}
						>
							<LinkButton color="basketballOrangeDark" size="small">
								{nav.link_label}
							</LinkButton>
						</PrismicNextLink>
					),
					[]
				)}
			</div>
			<div>
				<Button color="basketballOrange" size="small">
					<PrismicNextLink field={settings.data.cta_link}>
						{settings.data.cta_text}
					</PrismicNextLink>
				</Button>
			</div>
		</header>
	);
}


