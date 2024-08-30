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
  const { isLoading: isLoadingDiscography, artistsDiscography } =
    useArtistsDiscography(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(id);
  const [currentFilter, setCurrentFilter] = useState("");
  const [filteredArtistsDiscography, setFilteredArtistsDiscography] = useState(
    [],
  );
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

  useEffect(() => {
    //filter artist's discography based on current filter
    if (artistsDiscography) {
      setFilteredArtistsDiscography(
        artistsDiscography.filter((item) => currentFilter === item.album_type),
      );
      //set filtered artist's discography to the original artist's discography if current filter was empty
      if (currentFilter === "")
        setFilteredArtistsDiscography(artistsDiscography);
    }
  }, [currentFilter, artistsDiscography]);

  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts
    if (all) {
      dispatch(setPageTitle([""]));
    }

    return () => {
      dispatch(setPageTitle(""));
    };
  }, [all, artist, dispatch]);

  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        title={title}
        showAllTo="discography"
        all={all}
        isLoading={isLoadingArtist || isLoadingDiscography}
        items={filteredArtistsDiscography}
        discography
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
    </div>
  );
}

export default Discography;
