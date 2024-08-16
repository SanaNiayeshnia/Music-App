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
      <div className="flex items-center justify-between">
        <Title>{all && artist?.name + "'s"} Fans also like</Title>
        {!all && relatedArtists?.length > 6 && (
          <ShowAll to="fans-also-like">Show all</ShowAll>
        )}
      </div>
      {relatedArtists?.length === 0 && <NothingFound />}
      <ListContainer
        all={all}
        isLoading={isLoadingArtist || isLoadingRelatedArtists}
        items={relatedArtists}
      />
    </div>
  );
}

export default RelatedArtists;
