import { useNavigate, useParams } from "react-router-dom";
import ListContainer from "../../ui/ListContainer";
import useAlbum from "../albums/useAlbum";
import useArtistsDiscography from "./useArtistsDiscography";

function MoreByArtist({ all }) {
  const { id } = useParams();
  const { isLoading: isLoadingAlbum, album } = useAlbum(id);
  const { isLoading: isLoadingDicography, artistsDiscography } =
    useArtistsDiscography(album?.artists[0]?.id);
  const filteredArtistsDiscography = all
    ? artistsDiscography
    : artistsDiscography?.filter((item) => item?.id !== album?.id);
  const navigate = useNavigate();

  const title = (
    <>
      More By
      <span
        className="cursor-pointer hover:underline"
        onClick={() => navigate(`/artist/${album?.artists[0]?.id}`)}
      >
        {" "}
        {album?.artists[0]?.name}
      </span>
    </>
  );

  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        title={title}
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
