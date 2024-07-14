import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoader() {
  return (
    <div className="flex flex-col md:flex-row gap-0 relative z-0">
      <div className="md:w-1/3">
        <Skeleton width={400} height={370} className="z-0" />
        <Skeleton width={400} height={40} className="z-0" />
      </div>
      <div className="flex-1">
        <Skeleton height={38} width={"100%"} count={9} className="mt-2" />
      </div>
    </div>
  );
}
