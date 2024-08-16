import ListContainer from "../../ui/ListContainer";
import useRecentlyPlayed from "./useRecentlyPlayed";

function RecentlyPlayed({ all = false }) {
  const { isLoading, recentlyPlayedItems } = useRecentlyPlayed({ all });
  return (
    <div key={`${all}-${Math.random()}`}>
      <ListContainer
        title="Recently Played"
        showAllTo="/section/recently-played"
        all={all}
        className="overflow-hidden"
        items={recentlyPlayedItems}
        isLoading={isLoading}
      />
    </div>
  );
}

export default RecentlyPlayed;
