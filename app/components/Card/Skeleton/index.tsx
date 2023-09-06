import Skeleton from 'react-loading-skeleton'

const SkeletonCard = ({...props}) => {
  return (
    <div className="skeleton-card">
      <Skeleton count={6} {...props} />
    </div>
  );
};

export default SkeletonCard;
