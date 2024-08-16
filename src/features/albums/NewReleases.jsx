import ListContainer from "../../ui/ListContainer";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import useNewReleases from "./useNewReleases";

function NewReleases({ all }) {
  const { isLoading, newReleases } = useNewReleases();
  return (
    <div key={`${all}-${Math.random()}`}>
      <div className="flex items-center justify-between">
        <Title>New Releases</Title>
        {!all && <ShowAll to="/section/new-releases">Show all</ShowAll>}
      </div>
      <ListContainer isLoading={isLoading} all={all} items={newReleases} />
    </div>
  );
}

export default NewReleases;
