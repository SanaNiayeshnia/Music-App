import { useParams } from "react-router-dom";
import Filters from "../../ui/Filters";
import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import useArtistsDiscography from "./useArtistsDiscography";
import { useEffect, useState } from "react";
import useArtist from "./useArtist";
import NothingFound from "../../ui/NothingFound";

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
      <div className="flex items-center justify-between">
        <Title>{all && artist?.name + "'s"} Discography</Title>
        {!all && artistsDiscography?.length > 6 && (
          <ShowAll to="discography">Show all</ShowAll>
        )}
      </div>
      <div className="space-y-3">
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

        {artistsDiscography?.length === 0 && <NothingFound />}
        <ListContainer
          all={all}
          isLoading={isLoadingArtist || isLoadingDiscography}
        >
          {filteredArtistsDiscography?.map((item) => (
            <Item key={item.id} item={item} size="large" discography />
          ))}
        </ListContainer>
      </div>
    </div>
  );
}

export default Discography;
