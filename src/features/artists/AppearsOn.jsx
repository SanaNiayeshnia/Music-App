import { useParams } from "react-router-dom";
import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import useArtistsAppearsOn from "./useArtistsAppearsOn";
import useArtist from "./useArtist";

function AppearsOn({ all }) {
  const { id } = useParams();
  const { isLoading: isLoadingAppearsOn, appearsOn } = useArtistsAppearsOn(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(id);
  console.log(appearsOn);

  return (
    <div key={`${all}-${Math.random()}`}>
      <div className="flex items-center justify-between">
        <Title>{all && artist?.name} Appears on</Title>
        {!all && appearsOn?.length > 6 && (
          <ShowAll to="appears-on">Show all</ShowAll>
        )}
      </div>
      <ListContainer
        all={all}
        isLoading={isLoadingArtist || isLoadingAppearsOn}
      >
        {appearsOn?.map((item) => (
          <Item key={item.id} item={item} size="large" />
        ))}
      </ListContainer>
    </div>
  );
}

export default AppearsOn;
