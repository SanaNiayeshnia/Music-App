import { useParams } from "react-router-dom";
import useRelatedArtists from "./useRelatedArtists";
import ListContainer from "../../ui/ListContainer";
import Item from "../../ui/Item";
import Title from "../../ui/Title";
import ShowAll from "../../ui/ShowAll";
import useArtist from "./useArtist";

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
      <ListContainer
        all={all}
        isLoading={isLoadingArtist || isLoadingRelatedArtists}
      >
        {relatedArtists?.map((item) => (
          <Item key={item.id} item={item} size="large" />
        ))}
      </ListContainer>
    </div>
  );
}

export default RelatedArtists;
