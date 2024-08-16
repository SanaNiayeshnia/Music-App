import { useParams } from "react-router-dom";
import Filters from "../../ui/Filters";
import ListContainer from "../../ui/ListContainer";
import useArtistsDiscography from "./useArtistsDiscography";
import { useEffect, useState } from "react";
import useArtist from "./useArtist";

function Discography({ all }) {
  const { id } = useParams();
  const { isLoading: isLoadingDiscography, artistsDiscography } =
    useArtistsDiscography(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(id);
  const [currentFilterArray, setCurrentFilterArray] = useState([]);
  const [filteredArtistsDiscography, setFilteredArtistsDiscography] = useState(
    [],
  );

  useEffect(() => {
    if (artistsDiscography) {
      setFilteredArtistsDiscography(
        artistsDiscography.filter((item) =>
          currentFilterArray.includes(item.album_type),
        ),
      );
      if (currentFilterArray.length === 0)
        setFilteredArtistsDiscography(artistsDiscography);
    }
  }, [currentFilterArray, artistsDiscography]);

  function addRemoveFilter(newFilter) {
    if (currentFilterArray.includes(newFilter)) {
      //remove filter if it already exists in the current filter array
      setCurrentFilterArray((currentFilterArray) =>
        currentFilterArray.filter((filter) => filter !== newFilter),
      );
    } else {
      //add filter
      setCurrentFilterArray((currentFilterArray) => [
        ...currentFilterArray,
        newFilter,
      ]);
    }
  }

  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        title={`${all ? artist?.name + "'s" : ""} Discography`}
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
              currentFilterArray={currentFilterArray}
            />
          )}
      </ListContainer>
    </div>
  );
}

export default Discography;
