import ListContainer from "../../ui/ListContainer";
import useCategorysPlaylists from "../playlists/hooks/useCategorysPlaylists";
import useCategories from "./hooks/useCategories";

function MadeForYou() {
  const { isLoading: isLoadingCategories, categories } = useCategories();
  const { isLoading: isLoadingCategorysPlaylists, categorysPlaylists } =
    useCategorysPlaylists(categories?.at(0)?.id);

  return (
    <ListContainer
      title="Made For You"
      items={categorysPlaylists?.filter(
        (p) => !p.name.toLowerCase().includes("podcast"),
      )}
      isLoading={isLoadingCategories || isLoadingCategorysPlaylists}
      showAllTo={`category/${categories?.at(0)?.id}`}
    />
  );
}

export default MadeForYou;
