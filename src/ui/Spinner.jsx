import GramophoneDisc from "./GramophoneDisc";

function Spinner() {
  return (
    <div className="relative h-32 w-32">
      <GramophoneDisc className="left-0 animate-spin" />
    </div>
  );
}

export default Spinner;
