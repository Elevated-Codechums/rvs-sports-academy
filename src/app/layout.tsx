import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { createClient } from "@/prismicio";
import { outfit, roboto, montserrat } from "@/libs/fonts";
import { cn } from "@/libs/utils";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Metadata, ResolvingMetadata } from "next";
import "./globals.css";


export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  try {
    const settings = await client.getSingle("settings");
    return {
      title: settings.data.site_title || "RVS Sports Academy",
      description: settings.data.meta_description,
      openGraph: {
        images: [settings.data.og_image.url || ""],
      },
    };
  } catch (error) {
    console.error("Error fetching settings:", error);
    return {
      title: "Default Title",
      description: "Default Description",
    };
  }
}




export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(outfit, roboto, montserrat, "antialiased")}>
        <Header />
				{children}
        <Footer />
			</body>
			<PrismicPreview repositoryName={repositoryName} />
		</html>
	);
}
