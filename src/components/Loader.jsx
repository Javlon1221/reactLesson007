// src/components/Loader.jsx
export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-xl font-bold text-blue-600">Yuklanmoqda...</span>
      </div>
    </div>
  );
};
