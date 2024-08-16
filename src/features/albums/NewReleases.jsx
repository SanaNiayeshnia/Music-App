import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import useNewReleases from "./useNewReleases";

function NewReleases({ all }) {
  const { isLoading, newReleases } = useNewReleases();
  console.log(newReleases);
  return (
    <div key={`${all}-${Math.random()}`}>
      <div className="flex items-center justify-between">
        <Title>New Releases</Title>
        {!all && <ShowAll to="/section/new-releases">Show all</ShowAll>}
      </div>
      <ListContainer isLoading={isLoading} all={all}>
        {newReleases?.map((release) => (
          <Item key={release.id} size="large" item={release} />
        ))}
      </ListContainer>
    </div>
  );
}

export default NewReleases;
