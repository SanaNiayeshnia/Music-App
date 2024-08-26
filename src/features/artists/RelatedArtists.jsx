import { useNavigate, useParams } from "react-router-dom";
import useRelatedArtists from "./hooks/useRelatedArtists";
import ListContainer from "../../ui/ListContainer";
import useArtist from "./hooks/useArtist";
import { useEffect } from "react";
import { setPageTitle } from "../../GlobalSlice";
import { useDispatch } from "react-redux";

function RelatedArtists({ all = false }) {
  const { id } = useParams();
  const { isLoading: isLoadingRelatedArtists, relatedArtists } =
    useRelatedArtists(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts

    if (all) {
      dispatch(setPageTitle(`${artist?.name}'s Fans Also Like`));
    }
    return () => {
      dispatch(setPageTitle(""));
    };
  }, [all, artist, dispatch]);

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
