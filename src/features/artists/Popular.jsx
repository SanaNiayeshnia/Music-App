import { useState } from "react";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import Track from "../tracks/Track";
import useArtistsTopTracks from "./useArtistsTopTracks";

function Popular({ artistsTopTracks }) {
  const [isSeeMoreOpen, setIsSeeMoreOpen] = useState(false);
  return (
    <div>
      <Title>Popular</Title>
      <table className="w-full">
        <tbody>
          {[
            ...(isSeeMoreOpen
              ? artistsTopTracks
              : artistsTopTracks.slice(0, 5)),
          ].map((track, index) => (
            <Track
              key={track.id}
              index={index + 1}
              track={track}
              noArtist
              noAlbum
              extra="stream"
            />
          ))}
        </tbody>
      </table>
      <p
        onClick={() => setIsSeeMoreOpen((isSeeMoreOpen) => !isSeeMoreOpen)}
        className="mt-3 cursor-pointer px-3 text-sm font-semibold text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
      >
        {isSeeMoreOpen ? "See less" : "See more"}
      </p>
    </div>
  );
}

export default Popular;
