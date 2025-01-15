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
//
import Link from "next/link";

// export default async function Navbar() {
//   const client = createClient();
//   const settings = await client.getSingle("settings");

//   return (
//     <nav className="bg-white text-black">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <PrismicNextImage
//               width={50}
//               height={50}
//               field={settings.data.site_logo}
//               alt=""
//             />
//           </div>
//           {/* Menu Items */}
//           <div className="hidden  md:flex space-x-8">
//             <PrismicNextLink
//               className="text-black border-l border-blacksmoke pl-4 hover:text-basketballOrange"
//               href="/about"
//             >
//               ABOUT
//             </PrismicNextLink>
//             <PrismicNextLink
//               className="text-black border-l border-blacksmoke pl-4 hover:text-basketballOrange"
//               href="/our-player"
//             >
//               OUR PLAYER
//             </PrismicNextLink>
//             <PrismicNextLink
//               className="text-black border-l border-blacksmoke pl-4 hover:text-basketballOrange"
//               href="/our-training"
//             >
//               OUR TRAINING
//             </PrismicNextLink>
//             <PrismicNextLink
//               className="text-black border-l border-blacksmoke pl-4 hover:text-basketballOrange"
//               href="/photo-gallery"
//             >
//               PHOTO GALLERY
//             </PrismicNextLink>
//             <PrismicNextLink
//               className="text-black border-l border-blacksmoke pl-4 hover:text-basketballOrange"
//               href="/contact-us"
//             >
//               CONTACT
//             </PrismicNextLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
