import { useEffect } from "react";
import ListContainer from "../../ui/ListContainer";
import useNewReleases from "./hooks/useNewReleases";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../GlobalSlice";

function NewReleases({ all }) {
  const { isLoading, newReleases } = useNewReleases();
  const dispatch = useDispatch();

  useEffect(() => {
    //set page title when component mount and remove it when the component unmounts
    if (all) {
      dispatch(setPageTitle("New Releases"));
      return () => {
        dispatch(setPageTitle(""));
      };
    }
  }, [dispatch, all]);

  return (
    <ListContainer
      title="New Releases"
      showAllTo="/section/new-releases"
      isLoading={isLoading}
      all={all}
      items={newReleases}
    />
  );
}

export default NewReleases;
