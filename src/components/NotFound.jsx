import React from 'react';
import Header from '../components/Header'; 
import './header.css'; 
const NotFound = () => (
  <>
    <Header />
    <div className="notfound-wrapper">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  </>
);

export default NotFound;
