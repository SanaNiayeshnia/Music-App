import Item from "../../ui/Item";
import ListContainer from "../../ui/ListContainer";
import Title from "../../ui/Title";
import useMainContext from "../../ui/layout/useMainContext";

function ResultList({ title, items, all, setCurrentFilterArray }) {
  const { scrollMainToTop } = useMainContext();

  function handleShowAll() {
    setCurrentFilterArray([items[0]?.type]);
    scrollMainToTop();
  }

  return (
    <div key={all} className={items.length === 0 ? "hidden" : ""}>
      <div className="flex items-center justify-between">
        <Title>{title}</Title>
        {!all && items?.length > 6 && (
          <p
            className="mt-5 cursor-pointer text-sm font-semibold text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
            onClick={handleShowAll}
          >
            Show all
          </p>
        )}
      </div>

      <ListContainer all={all}>
        {items?.map((item) => (
          <Item key={item.id} item={item} size="large" />
        ))}
      </ListContainer>
    </div>
  );
}

export default ResultList;
