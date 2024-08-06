import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import useRecentlyPlayed from "./useRecentlyPlayed";

function RecentlyPlayed({ all = false }) {
  const { isLoading, recentlyPlayedItems } = useRecentlyPlayed({ all });
  return (
    <div key={`${all}-${Math.random()}`}>
      <div className="flex items-center justify-between">
        <Title>Recently Played</Title>
        {!all && <ShowAll to="/section/recently-played">Show all</ShowAll>}
      </div>
      <ListContainer
        all={all}
        className="overflow-hidden"
        isLoading={isLoading}
      >
        {recentlyPlayedItems?.map((item) => (
          <Item key={item.id} item={item} size="large" />
        ))}
      </ListContainer>
    </div>
  );
}

export default RecentlyPlayed;
