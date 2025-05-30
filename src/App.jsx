import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from './components/Loader';
import { FavoritesProvider } from './context/FavoritesContext';

const Home = lazy(() => import('./pages/Home'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Heart = lazy(() => import('./pages/Heart'));

export default function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favorites" element={<Heart />} />
          </Routes>
        </Suspense>
      </Router>
    </FavoritesProvider>
  );
}
