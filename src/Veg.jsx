import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Veg.css';
import { AddToCart } from './store';

const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: '₹1 to ₹50', min: 1, max: 50 },
  { label: '₹51 to ₹100', min: 51, max: 100 },
  { label: '₹101 to ₹200', min: 101, max: 200 },
  { label: '₹201 and above', min: 201, max: Infinity }
];

function Veg() {
  const dispatch = useDispatch();
  const vegProducts = useSelector(state => state.products.veg);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRange, setSelectedRange] = useState(priceRanges[0]);

  const productsPerPage = 6;

  // Filter based on selected price range
  const filteredProducts = vegProducts.filter(product =>
    product.price >= selectedRange.min && product.price <= selectedRange.max
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleRangeChange = (e) => {
    const range = priceRanges.find(r => r.label === e.target.value);
    setSelectedRange(range);
    setCurrentPage(1); // Reset to first page when range changes
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Veg Products</h1>

      {/* Price Range Filter */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <label htmlFor="price-range" style={{ marginRight: '10px' }}>Filter by Price:</label>
        <select id="price-range" onChange={handleRangeChange}>
          {priceRanges.map((range, idx) => (
            <option key={idx} value={range.label}>{range.label}</option>
          ))}
        </select>
      </div>

      <ol className="veg-list">
        {currentProducts.map((product, index) => (
          <li key={index} className="veg-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => dispatch(AddToCart(product))}>Add to Cart</button>
          </li>
        ))}
      </ol>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active-page' : ''}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Veg;
