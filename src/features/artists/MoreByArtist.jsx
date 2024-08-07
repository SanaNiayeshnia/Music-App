import { useParams } from "react-router-dom";
import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import useAlbum from "../albums/useAlbum";
import useArtistsAlbums from "./useArtistsAlbums";

function MoreByArtist({ all }) {
  const { id } = useParams();
  console.log(id);
  const { isLoading: isLoadingAlbum, album } = useAlbum(id);
  const { isLoading: isLoadingArtist, artistsAlbums } = useArtistsAlbums(
    album?.artists[0]?.id,
  );
  const filteredArtistsAlbums = all
    ? artistsAlbums
    : artistsAlbums?.filter((item) => item?.id !== album?.id);

  return (
    <div key={`${all}-${Math.random()}`}>
      <div className="flex items-center justify-between">
        <Title>More By {album?.artists[0]?.name}</Title>
        {!all && filteredArtistsAlbums?.length > 6 && (
          <ShowAll to="more-by-artist">Show All</ShowAll>
        )}
      </div>
      <ListContainer all={all} isLoading={isLoadingAlbum || isLoadingArtist}>
        {filteredArtistsAlbums?.map((album) => (
          <Item key={album?.id} item={album} size="large" />
        ))}
      </ListContainer>
    </div>
  );
}

export default MoreByArtist;
