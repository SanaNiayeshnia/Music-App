import { useState } from "react";
import FloatingPlayButton from "../../ui/FloatingPlayButton";
import Title from "../../ui/Title";

function TopResult() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-w-96">
      <Title>Top Result</Title>
      <div
        className="group flex min-h-[232px] cursor-pointer flex-col justify-center gap-3 rounded-md bg-white/40 p-5 shadow hover:bg-white/50 dark:bg-black/40 dark:hover:bg-black/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="/test.png"
          alt=""
          className="h-28 w-28 rounded-md shadow-md"
        />
        <div className="relative">
          <p className="text-3xl font-bold text-black dark:text-white">
            Superache
          </p>
          <div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Album •{" "}
            </span>
            <span className="text-sm font-medium text-black dark:text-white">
              Conan Gray
            </span>
          </div>
          <FloatingPlayButton isHovered={isHovered} />
        </div>
      </div>
    </div>
  );
}

export default TopResult;
