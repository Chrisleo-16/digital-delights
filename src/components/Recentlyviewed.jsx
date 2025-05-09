import React, { useEffect, useState } from "react";

const RecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  // Load recently viewed products from localStorage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    setRecentlyViewed(storedProducts);
  }, []);

  return (
    <div className="recently-viewed-container">
      <h3>Recently Viewed</h3>
      <div className="product-grid">
        {recentlyViewed.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <p><b>Ksh {product.price}</b></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
