function GramophoneDisc({ image, title, className }) {
  return (
    <div
      className={`${className} grid h-full w-full place-items-center rounded-full bg-black shadow-[3px_3px_5px_0_#262626]`}
    >
      <div className="grid h-5/6 w-5/6 place-items-center rounded-full border-r border-white/50">
        <div className="grid h-5/6 w-5/6 place-items-center rounded-full border-r border-white/60">
          <div className="h-5/6 w-5/6 rounded-full border-r border-white/50">
            <img
              src={image}
              alt={title}
              className="absolute left-1/2 top-1/2 h-2/5 w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow"
            />
            <div className="absolute left-1/2 top-1/2 h-[10%] w-[10%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GramophoneDisc;
