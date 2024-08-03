import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import ShowAll from "../../ui/ShowAll";
import Title from "../../ui/Title";
import useRecentlyPlayed from "./useRecentlyPlayed";

function RecentlyPlayed() {
  const { isLoading, recentlyPlayedItems } = useRecentlyPlayed();
  return (
    <div>
      <div className="flex items-center justify-between">
        <Title>Recently Played</Title>
        <ShowAll>Show all</ShowAll>
      </div>
      <ListContainer className="overflow-hidden">
        {isLoading
          ? Array.from({ length: 6 }).map((item, index) => (
              <Item key={index} item={item} isLoading={true} size="large" />
            ))
          : recentlyPlayedItems?.map((item) => (
              <Item key={item.id} item={item} size="large" />
            ))}
      </ListContainer>
    </div>
  );
}

export default RecentlyPlayed;
