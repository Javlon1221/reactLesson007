import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { SkeletonCard } from '../components/SkeletonCard';
import { useFetch } from '../hooks/useFetch';
import "./page.css";

export default function Home() {
  const { data: products, loading } = useFetch('https://fakestoreapi.com/products');

  if (loading) {
    return (
      <div className="product-container">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="card-wrapper" key={index}>
            <SkeletonCard />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
    <Header/>
    <div className="product-container">
      {products.map((product) => (
        <div className="card-wrapper" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
}
