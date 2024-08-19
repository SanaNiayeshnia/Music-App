import { useNavigate, useParams } from "react-router-dom";
import Filters from "../../ui/Filters";
import ListContainer from "../../ui/ListContainer";
import useArtistsDiscography from "./useArtistsDiscography";
import { useEffect, useState } from "react";
import useArtist from "./useArtist";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../GlobalSlice";

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

  useEffect(() => {
    if (artistsDiscography) {
      setFilteredArtistsDiscography(
        artistsDiscography.filter((item) => currentFilter === item.album_type),
      );
      if (currentFilter === "")
        setFilteredArtistsDiscography(artistsDiscography);
    }
  }, [currentFilter, artistsDiscography]);

  useEffect(() => {
    if (all) {
      dispatch(setPageTitle(`${artist?.name}'s Discography`));
    }

    return () => {
      dispatch(setPageTitle(""));
    };
  }, [all, artist, dispatch]);

  function addRemoveFilter(newFilter) {
    if (currentFilter === newFilter) {
      //remove filter if it already chosen as the current filter
      setCurrentFilter("");
    } else {
      //add filter
      setCurrentFilter(newFilter);
    }
  }

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
        {!isLoadingArtist &&
          !isLoadingDiscography &&
          artistsDiscography?.length > 0 && (
            <Filters
              options={[
                { title: "Albums", value: "album" },
                { title: "Singles", value: "single" },
              ]}
              handler={addRemoveFilter}
              currentFilter={currentFilter}
            />
          )}
      </ListContainer>
    </div>
  );
}

export default Discography;
