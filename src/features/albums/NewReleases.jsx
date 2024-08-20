import { useEffect } from "react";
import ListContainer from "../../ui/ListContainer";
import useNewReleases from "./useNewReleases";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../GlobalSlice";

function NewReleases({ all }) {
  const { isLoading, newReleases } = useNewReleases();
  const dispatch = useDispatch();

  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts

    dispatch(setPageTitle("New Releases"));
    return () => {
      dispatch(setPageTitle(""));
    };
  }, [dispatch]);

  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        title="New Releases"
        showAllTo="/section/new-releases"
        isLoading={isLoading}
        all={all}
        items={newReleases}
      />
    </div>
  );
}

export default NewReleases;
