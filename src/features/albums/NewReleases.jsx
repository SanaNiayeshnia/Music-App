import ListContainer from "../../ui/ListContainer";
import useNewReleases from "./useNewReleases";

function NewReleases({ all }) {
  const { isLoading, newReleases } = useNewReleases();
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
