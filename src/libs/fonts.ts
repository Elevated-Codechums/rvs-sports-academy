import { Outfit, Roboto, Montserrat,Oswald } from "next/font/google";

const outfit_init = Outfit({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Include bold weights for headings
    variable: "--font-outfit",
});

const oswald_init = Oswald({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Include bold weights for headings
    variable: "--font-oswald",
});

const roboto_init = Roboto({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Regular and bold weights for body text
    variable: "--font-roboto",
});

const montserrat_init = Montserrat({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700"], // Regular and bold for emphasis
    variable: "--font-montserrat",
});

export const outfit = outfit_init.variable;
export const roboto = roboto_init.variable;
export const montserrat = montserrat_init.variable;
export const oswald = oswald_init.variable;