import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const title = (
    <>
      {" "}
      <span
        className="cursor-pointer hover:underline"
        onClick={() => navigate(`/artist/${artist?.id}`)}
      >
        {all ? artist?.name : ""}
      </span>
      {all ? "'s" : ""} Fans Also Like
    </>
  );
  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        title={title}
        showAllTo="fans-also-like"
        all={all}
        isLoading={isLoadingArtist || isLoadingRelatedArtists}
        items={relatedArtists}
      />
    </div>
  );
}

export default RelatedArtists;
