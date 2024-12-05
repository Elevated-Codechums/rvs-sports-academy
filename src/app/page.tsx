import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { cn } from "@/libs/utils";

export default async function Page() {
	const client = createClient();
	const page = await client.getSingle("homepage");

	// return (
	// 	<div className={cn("min-h-screen flex items-center justify-center")}>
	// 		It works!
	// 	</div>
	// );

	return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();
	const page = await client.getSingle("homepage");
  const settings = await client.getSingle("settings");

	return {
		title: page.data.meta_title + " | " + settings.data.site_title  || "RVS Sports Academy",
		description: page.data.meta_description,
	};
}
