import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import './header.css';

const ProductCard = ({ product }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-image" />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
      </Link>
      <div className="flex justify-between mt-2">
        <button className="buy-button">Buy</button>
        <button onClick={() => toggleFavorite(product)} className="heart-button">
          {isFav ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default memo(ProductCard);
