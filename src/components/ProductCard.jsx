import { memo } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">${product.price}</p>
      <button className="buy-button">Buy</button>
    </Link>
  );
};

export default memo(ProductCard);
