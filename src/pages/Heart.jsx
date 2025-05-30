import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

export default function Heart() {
  const { favorites } = useFavorites();

  return (
    <>
      <Header />
      <div className="product-container">
        {favorites.length === 0 ? (
          <h2>Hech qanday saqlangan mahsulot yo'q.</h2>
        ) : (
          favorites.map((product) => (
            <div className="card-wrapper" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}
