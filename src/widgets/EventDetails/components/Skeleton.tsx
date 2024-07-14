import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoader() {
  return (
    <div className="flex relative z-0 gap-8 flex-col lg:flex-row md:flex-row">
      <div className="flex w-full md:w-[30vw] lg:w-[30vw]">
        <div className="animate-pulse w-full">
          <div className="h-[47vh] bg-gray-300 dark:bg-gray-800 rounded-md"></div>
          <div className="space-y-4 mt-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-800  rounded w-3/4"></div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="animate-pulse w-full">
          <div className="h-[47vh] bg-gray-300 dark:bg-gray-800 rounded-md"></div>
          <div className="space-y-4 mt-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-800  rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
