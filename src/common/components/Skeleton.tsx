// components/SkeletonCard.js
import React from "react";

const Skeleton = () => {
  return (
    <div className="animate-pulse w-full">
      <div className="h-64 bg-gray-300 dark:bg-gray-800 rounded-md"></div>
      <div className="space-y-4 mt-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-800  rounded w-3/4"></div>
      </div>
    </div>
  );
};

export default Skeleton;
