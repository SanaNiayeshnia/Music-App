import { useNavigate, useParams } from "react-router-dom";
import ListContainer from "../../ui/ListContainer";
import useAlbum from "../albums/hooks/useAlbum";
import useArtistsDiscography from "./hooks/useArtistsDiscography";
import { useEffect } from "react";
import { setPageTitle } from "../../GlobalSlice";
import { useDispatch } from "react-redux";

function MoreByArtist({ all }) {
  const { id } = useParams();
  const { isLoading: isLoadingAlbum, album } = useAlbum(id);
  const {
    isLoading: isLoadingDicography,
    artistsDiscography,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useArtistsDiscography(album?.artists[0]?.id);
  const filteredArtistsDiscography = all
    ? artistsDiscography
    : artistsDiscography?.filter((item) => item?.id !== album?.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts

    if (all) {
      dispatch(setPageTitle(`More By ${album?.artists[0]?.name}`));
    }
    return () => {
      dispatch(setPageTitle(""));
    };
  }, [all, album, dispatch]);

  return (
    <ListContainer
      title={title}
      showAllTo="more-by-artist"
      all={all}
      isLoading={isLoadingAlbum || isLoadingDicography}
      items={filteredArtistsDiscography}
      discography
      fetchNextPage={fetchNextPage}
      isFetching={isFetching}
      hasNextPage={hasNextPage}
    />
  );
}

export default MoreByArtist;
