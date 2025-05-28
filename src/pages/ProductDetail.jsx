import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Loader } from '../components/Loader';
import "./page.css";
import Header from '../components/Header';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <Loader />;

  return (
    <>
    <Header/>
    <div className="detail-wrapper">
      <button className="back-button" onClick={() => navigate(-1)}>← Orqaga</button>

      <div className="detail-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="detail-info">
        <h1 className="detail-title">{product.title}</h1>
        <p className="detail-price">${product.price}</p>

        {product.rating && (
          <p className="detail-rating">
            ⭐ {product.rating.rate} / 5 ({product.rating.count} ta ovoz)
          </p>
        )}

        <p className="detail-description">{product.description}</p>
      </div>
    </div>
    </>
  );
}
