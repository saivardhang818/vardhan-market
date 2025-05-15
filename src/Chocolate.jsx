import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Chocolate.css';
import { AddToCart } from './store';

// Price range filter options
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: '₹1 to ₹50', min: 1, max: 50 },
  { label: '₹51 to ₹100', min: 51, max: 100 },
  { label: '₹101 to ₹200', min: 101, max: 200 },
  { label: '₹201 and above', min: 201, max: Infinity }
];

function Chocolate() {
  const dispatch = useDispatch();

  // Get chocolate products from Redux store
  const chocolateProducts = useSelector(state => state.products.chocolate);

  // Pagination and price filtering state
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRange, setSelectedRange] = useState(priceRanges[0]);
  const productsPerPage = 6;

  // Apply price range filter
  const filteredProducts = chocolateProducts.filter(product =>
    product.price >= selectedRange.min && product.price <= selectedRange.max
  );

  // Pagination calculations
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle price range change
  const handleRangeChange = (e) => {
    const selected = priceRanges.find(range => range.label === e.target.value);
    setSelectedRange(selected);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  return (
    <div className="chocolate-container">
      <h1 style={{ textAlign: 'center' }}>This is Chocolate Products</h1>

      {/* Price Range Filter */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <label htmlFor="price-range" style={{ marginRight: '10px' }}>Filter by Price:</label>
        <select id="price-range" onChange={handleRangeChange}>
          {priceRanges.map((range, idx) => (
            <option key={idx} value={range.label}>{range.label}</option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <ol className="chocolate-list">
        {currentProducts.map((product, index) => (
          <li key={index} className="chocolate-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => dispatch(AddToCart(product))}>Add to Cart</button>
          </li>
        ))}
      </ol>

      {/* Pagination */}
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

export default Chocolate;
