import { useState } from "react";
import Track from "./Track";

function TrackListV2({ tracks, max = 5, noArtist = true, noAlbum = true }) {
  const [isSeeMoreOpen, setIsSeeMoreOpen] = useState(false);

  return (
    <div>
      <table className="w-full">
        <tbody>
          {[...(isSeeMoreOpen ? tracks : tracks.slice(0, max))].map(
            (track, index) => (
              <Track
                key={track.id}
                index={index + 1}
                track={track}
                noArtist={noArtist}
                noAlbum={noAlbum}
              />
            ),
          )}
        </tbody>
      </table>
      {tracks?.length > max && (
        <p
          onClick={() => setIsSeeMoreOpen((isSeeMoreOpen) => !isSeeMoreOpen)}
          className="mt-3 cursor-pointer px-3 text-sm font-semibold text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
          {isSeeMoreOpen ? "See less" : "See more"}
        </p>
      )}
    </div>
  );
}

export default TrackListV2;
