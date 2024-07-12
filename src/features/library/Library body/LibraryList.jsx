import useScrollbar from "../../../hooks/useScrollbar";
import Item from "../../../ui/Item";

function LibraryList() {
  const ref = useScrollbar();
  return (
    <div
      className="scrollbar hide-scroll space-y-3 overflow-scroll px-2"
      ref={ref}
    >
      <Item type="artist" title="Halsey" subtitle="Artist" size="small" />
      <Item type="artist" title="Halsey" subtitle="Artist" size="small" />
      <Item type="artist" title="Halsey" subtitle="Artist" size="small" />
      <Item type="artist" title="Halsey" subtitle="Artist" size="small" />
      <Item type="artist" title="Halsey" subtitle="Artist" size="small" />
      <Item type="artist" title="Halsey" subtitle="Artist" size="small" />
    </div>
  );
}

export default LibraryList;
