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
      <ListContainer
        title={`More By ${album?.artists[0]?.name}`}
        showAllTo="more-by-artist"
        all={all}
        isLoading={isLoadingAlbum || isLoadingDicography}
        items={filteredArtistsDiscography}
        discography
      />
    </div>
  );
}

export default MoreByArtist;
