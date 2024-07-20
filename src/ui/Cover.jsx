import { useSelector } from "react-redux";

function Cover({ src, alt }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);

  return (
    <div
      className={`relative h-36 w-36 xl:h-40 xl:w-40 ${isPlayingTrackbarOpen ? "md:h-32 md:w-32 lg:h-36 lg:w-36" : "lg:h-40 lg:w-40"}`}
    >
      <img
        src="/header.png"
        alt={alt}
        className={`absolute inset-0 z-20 h-full w-full rounded shadow-[5px_3px_8px_0_#262626]`}
      />
      <div className="absolute left-20 top-0 z-10 grid h-full w-full place-items-center p-1">
        <div
          className={`grid h-full w-full place-items-center rounded-full bg-black shadow-[3px_3px_5px_0_#262626]`}
        >
          <div className="grid h-5/6 w-5/6 place-items-center rounded-full border-r border-white/50">
            <div className="grid h-5/6 w-5/6 place-items-center rounded-full border-r border-white/60">
              <div className="h-5/6 w-5/6 rounded-full border-r border-white/50">
                <img
                  src="/header.png"
                  alt={alt}
                  className="absolute left-1/2 top-1/2 h-2/5 w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow"
                />
                <div className="absolute left-1/2 top-1/2 h-[10%] w-[10%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
