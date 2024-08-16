import { useParams } from "react-router-dom";
import useRelatedArtists from "./useRelatedArtists";
import ListContainer from "../../ui/ListContainer";
import Item from "../../ui/Item";
import Title from "../../ui/Title";
import ShowAll from "../../ui/ShowAll";
import useArtist from "./useArtist";
import NothingFound from "../../ui/NothingFound";

function RelatedArtists({ all = false }) {
  const { id } = useParams();
  const { isLoading: isLoadingRelatedArtists, relatedArtists } =
    useRelatedArtists(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(id);
  return (
    <div key={`${all}-${Math.random()}`}>
      {relatedArtists?.length === 0 && <NothingFound />}
      <ListContainer
        title={`${all ? artist?.name + "'s" : ""} Fans also like`}
        showAllTo="fans-also-like"
        all={all}
        isLoading={isLoadingArtist || isLoadingRelatedArtists}
        items={relatedArtists}
      />
    </div>
  );
}

export default RelatedArtists;
