import { cn } from "@/libs/utils";
import { Content } from "@prismicio/client";
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
      className={cn("min-h-screen flex items-center justify-center")}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.players.map((player, index) => (
        <div key={index}>
          <PrismicNextImage alt="" field={player.image} />
          <h3>{player.name}</h3>
          <PrismicRichText field={player.player_description} />
        </div>
      ))}
      ;
    </section>
  );
};
export default Players;
