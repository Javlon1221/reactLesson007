export const SkeletonCard = () => {
  return (
    <div className="border rounded-2xl shadow p-4 animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
};
