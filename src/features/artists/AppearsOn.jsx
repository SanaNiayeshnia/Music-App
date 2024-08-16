import { useParams } from "react-router-dom";
import ListContainer from "../../ui/ListContainer";
import useArtistsAppearsOn from "./useArtistsAppearsOn";
import useArtist from "./useArtist";

function AppearsOn({ all }) {
  const { id } = useParams();
  const { isLoading: isLoadingAppearsOn, appearsOn } = useArtistsAppearsOn(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(id);

  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        title={`${all ? artist?.name : ""} Appears on`}
        showAllTo="appears-on"
        all={all}
        isLoading={isLoadingArtist || isLoadingAppearsOn}
        items={appearsOn}
      />
    </div>
  );
}

export default AppearsOn;
