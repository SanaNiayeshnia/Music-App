import { useNavigate, useParams } from "react-router-dom";
import ListContainer from "../../ui/ListContainer";
import useArtistsAppearsOn from "./useArtistsAppearsOn";
import useArtist from "./useArtist";
import { useEffect } from "react";
import { setSectionPageTitle } from "../../GlobalSlice";
import { useDispatch } from "react-redux";

function AppearsOn({ all }) {
  const { id } = useParams();
  const { isLoading: isLoadingAppearsOn, appearsOn } = useArtistsAppearsOn(id);
  const { isLoading: isLoadingArtist, artist } = useArtist(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const title = (
    <>
      <span
        className="cursor-pointer hover:underline"
        onClick={() => navigate(`/artist/${artist?.id}`)}
      >
        {all ? artist?.name : ""}
      </span>{" "}
      Appears On
    </>
  );

  useEffect(() => {
    if (all) {
      dispatch(setSectionPageTitle(`${artist?.name} Appears On`));
    }

    return () => {
      dispatch(setSectionPageTitle(""));
    };
  }, [all, artist, dispatch]);

  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        title={title}
        showAllTo="appears-on"
        all={all}
        isLoading={isLoadingArtist || isLoadingAppearsOn}
        items={appearsOn}
      />
    </div>
  );
}

export default AppearsOn;
