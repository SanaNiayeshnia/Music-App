import { useParams } from "react-router-dom";
import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import useAlbum from "../albums/useAlbum";
import useArtistsDiscography from "./useArtistsDiscography";
import NothingFound from "../../ui/NothingFound";

function MoreByArtist({ all }) {
  const { id } = useParams();
  const { isLoading: isLoadingAlbum, album } = useAlbum(id);
  const { isLoading: isLoadingDicography, artistsDiscography } =
    useArtistsDiscography(album?.artists[0]?.id);
  const filteredArtistsDiscography = all
    ? artistsDiscography
    : artistsDiscography?.filter((item) => item?.id !== album?.id);

  return (
    <div key={`${all}-${Math.random()}`}>
      <div className="flex items-center justify-between">
        <Title>More By {album?.artists[0]?.name}</Title>
        {!all && filteredArtistsDiscography?.length > 6 && (
          <ShowAll to="more-by-artist">Show All</ShowAll>
        )}
      </div>
      {filteredArtistsDiscography?.length === 0 && <NothingFound />}
      <ListContainer
        all={all}
        isLoading={isLoadingAlbum || isLoadingDicography}
        items={filteredArtistsDiscography}
        discography
      />
    </div>
  );
}

export default MoreByArtist;
