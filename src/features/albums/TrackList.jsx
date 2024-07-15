import Track from "../tracks/Track";

function TrackList() {
  return (
    <div className="dark:divide-y-300 divide-y divide-blue-100 dark:divide-glass-200">
      <p className="space-x-2 px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300">
        <span>#</span> <span>Title</span>
      </p>
      <div className="pt-3">
        <Track noCover />
        <Track noCover />
        <Track noCover />
        <Track noCover />
        <Track noCover />
        <Track noCover />
        <Track noCover />
        <Track noCover />
        <Track noCover />
      </div>
    </div>
  );
}

export default TrackList;
