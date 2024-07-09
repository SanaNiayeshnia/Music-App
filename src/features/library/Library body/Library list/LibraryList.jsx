import ListItem from "./ListItem";

function LibraryList() {
  return (
    <div className="scrollbar scroll flex flex-col gap-3 overflow-auto">
      <ListItem type="artist" />
      <ListItem type="artist" />
      <ListItem type="artist" />
      <ListItem type="artist" />
      <ListItem type="artist" />
      <ListItem type="artist" />
    </div>
  );
}

export default LibraryList;
