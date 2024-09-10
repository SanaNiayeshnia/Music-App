import { useNavigate, useParams } from "react-router-dom";
import ListContainer from "../../ui/ListContainer";
import useArtistsDiscography from "./hooks/useArtistsDiscography";
import { useEffect, useState } from "react";
import useArtist from "./hooks/useArtist";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../GlobalSlice";
import DiscographyFilters from "./DiscographyFilters";

function Discography({ all }) {
  const { id } = useParams();
  const {
    isLoading: isLoadingDiscography,
    artistsDiscography,
    fetchNextPage,
    isFetching,
    hasNextPage,
  } = useArtistsDiscography(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(id);
  const [currentFilter, setCurrentFilter] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const title = (
    <>
      <span
        className="cursor-pointer hover:underline"
        onClick={() => navigate(`/artist/${artist?.id}`)}
      >
        {all ? artist?.name : ""}
      </span>
      {all ? "'s" : ""} Discography
    </>
  );

  //filter artist's discography based on current filter
  const filteredArtistsDiscography = currentFilter
    ? artistsDiscography?.filter((item) => item.album_type === currentFilter)
    : artistsDiscography;

  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts
    if (all) {
      dispatch(setPageTitle(`${artist?.name}'s Discography`));
    }

    return () => {
      dispatch(setPageTitle(""));
    };
  }, [all, artist, dispatch]);

  return (
    <ListContainer
      title={title}
      showAllTo="discography"
      all={all}
      isLoading={isLoadingArtist || isLoadingDiscography}
      items={filteredArtistsDiscography}
      discography
      fetchNextPage={fetchNextPage}
      isFetching={isFetching}
      hasNextPage={hasNextPage}
    >
      {
        //add filters component when nothing's loading
        !isLoadingArtist &&
          !isLoadingDiscography &&
          artistsDiscography?.length > 0 && (
            <DiscographyFilters
              setCurrentFilter={setCurrentFilter}
              currentFilter={currentFilter}
            />
          )
      }
    </ListContainer>
  );
}

export default Discography;
