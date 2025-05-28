import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 animate-pulse space-y-4 transition hover:shadow-xl">
      <div className="h-40 bg-gray-200 rounded-md" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
};

const ProductList = () => {
  const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");

  if (loading) {
    return (
      <div className="">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (error)
    return <div className="">{error}</div>;

  return (
    <div className="">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
