import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
import { oswald } from "@/libs/fonts";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Players`.
 */
export type PlayersProps = SliceComponentProps<Content.PlayersSlice>;

/**
 * Component for "Players" Slices.
 */
const Players = ({ slice }: PlayersProps): JSX.Element => {
  return (
    <section
      className={cn("min-h-screen flex flex-col items-center  p-10 justify-center px-4 sm:px-8")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Responsive Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl uppercase pt-20 font-bold text-center">
        {slice.primary.heading}
      </h1>

      {/* Description Section */}
      <div className="flex flex-col p-6 sm:p-10 items-center justify-center text-center">
        <PrismicRichText field={slice.primary.description} />
      </div>

      {/* Players Grid - Responsive Layout */}
      <div className="grid gap-6 sm:gap-9 items-center bg-gray-100 p-6 sm:p-11 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {slice.primary.players.map((player, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center gap-4">
            <PrismicNextImage width={250} height={400} alt="" field={player.image} />
            <h2 className="text-lg font-oswald tracking-tighter font-semibold">{player.name}</h2>
            <PrismicRichText field={player.player_description} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Players;
