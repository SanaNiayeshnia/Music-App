import { useNavigate, useParams } from "react-router-dom";
import ListContainer from "../../ui/ListContainer";
import useArtistsAppearsOn from "./hooks/useArtistsAppearsOn";
import useArtist from "./hooks/useArtist";
import { useEffect } from "react";
import { setPageTitle } from "../../GlobalSlice";
import { useDispatch } from "react-redux";

function AppearsOn({ all }) {
  const { id } = useParams();
  const {
    isLoading: isLoadingAppearsOn,
    appearsOn,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useArtistsAppearsOn(id);
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
    //set page title when component mount and remove it when the component unmounts

    if (all) {
      dispatch(setPageTitle(`${artist?.name} Appears On`));
    }
    return () => {
      dispatch(setPageTitle(""));
    };
  }, [all, artist, dispatch]);

  return (
    <ListContainer
      title={title}
      showAllTo="appears-on"
      all={all}
      isLoading={isLoadingArtist || isLoadingAppearsOn}
      items={appearsOn}
      isFetching={isFetching}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}

export default AppearsOn;
