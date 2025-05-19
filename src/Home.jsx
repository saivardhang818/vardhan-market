import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const products = useSelector((state) => state.products);

  const interleaveProducts = (productObj) => {
    const categories = ['veg', 'nonVeg', 'milk', 'chocolate'];
    const arrays = categories.map(cat => productObj[cat] || []);
    const maxLength = Math.max(...arrays.map(arr => arr.length));
    const interleaved = [];

    for (let i = 0; i < maxLength; i++) {
      for (let j = 0; j < arrays.length; j++) {
        if (arrays[j][i]) interleaved.push(arrays[j][i]);
      }
    }
    return interleaved;
  };

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-text">
          <h1>Fresh. Local. Yours.</h1>
          <p>Get the best veggies, dairy, meat, and chocolates delivered to your doorstep.</p>
          <Link to="/Veg" className="hero-button">Shop Now</Link>
        </div>
        <img src="/vegimages/srcccccc.jpg" alt="Hero Banner" />
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <h2>Shop by Category</h2>
        <div className="category-cards">
          <Link to="/Veg" className="category-item">
            <img src="/vegimages/download1.jpeg" alt="Veg" />
            <span>Vegetables</span>
          </Link>
          <Link to="/NonVeg" className="category-item">
            <img src="/nonVegimages/images1.jpeg" alt="Non-Veg" />
            <span>Non-Veg</span>
          </Link>
          <Link to="/Milk" className="category-item">
            <img src="/milk/download2.jpeg" alt="Milk" />
            <span>Milk</span>
          </Link>
          <Link to="/Chocolate" className="category-item">
            <img src="/chocolate/chocolateeeeee1.jpeg" alt="Chocolate" />
            <span>Chocolates</span>
          </Link>
        </div>
      </section>

      {/* Scrolling Featured Products */}
      <section className="scrolling-products">
        <h2>Today's Picks</h2>
        <div className="product-scroll">
          {interleaveProducts(products).map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="info-features">
        <div className="info-block">
          <h3>🚚 Same-Day Delivery</h3>
          <p>Speedy, reliable delivery straight to your door.</p>
        </div>
        <div className="info-block">
          <h3>🔒 100% Secure Checkout</h3>
          <p>Encrypted payments with multiple options.</p>
        </div>
        <div className="info-block">
          <h3>🧺 Curated Products</h3>
          <p>Only the best and freshest items selected for you.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="customer-reviews">
        <h2>What Our Customers Say</h2>
        <div className="reviews">
          <blockquote>
            “Always fresh and well-packed! Highly recommend.”
            <footer>-----sandeep</footer>
          </blockquote>
          <blockquote>
            “Great prices and fantastic service.”
            <footer>-----prakash</footer>
          </blockquote>
          <blockquote>
            “The best place for daily essentials online.”
            <footer>-----venkanna babu</footer>
          </blockquote>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-signup">
        <h2>Don't Miss Our Updates</h2>
        <p>Join our newsletter for exclusive discounts and offers.</p>
        <div className="signup-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My-Market. Designed by Vardhan.....</p>
      </footer>
    </div>
  );
}

export default Home;
