import { useState } from "react";
import FloatingPlayButton from "../../ui/FloatingPlayButton";
import Title from "../../ui/Title";

function TopResult() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-w-96">
      <Title>Top Result</Title>
      <div
        className="cursor-pointer space-y-3 rounded-md bg-blue-50 p-5 hover:bg-blue-100 dark:bg-glass-100 dark:hover:bg-glass-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="/test.png"
          alt=""
          className="h-28 w-28 rounded-md shadow-md"
        />
        <div>
          <Title className="my-0 text-3xl">Superache</Title>
          <div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Album •{" "}
            </span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Conan Gray
            </span>
          </div>
        </div>
        {<FloatingPlayButton isHovered={isHovered} />}
      </div>
    </div>
  );
}

export default TopResult;
