import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonLoader() {
  return (
    <div className="p-4">
      <Skeleton height={330} />
      <Skeleton count={3}/>
    </div>
  );
}
