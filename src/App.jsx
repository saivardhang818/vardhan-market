import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import Milk from './Milk';
import Chocolate from './Chocolate';
import Signing from './Signing';
import Orders from './Orders';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import CartComponent from './CartComponent';
import Signup from './Signup';


function App() {
  const cart = useSelector(state => state.cart);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { to: '/veg', label: 'Veg' },
    { to: '/nonveg', label: 'NonVeg' },
    { to: '/milk', label: 'Milk' },
    { to: '/chocolate', label: 'Chocolate' },
    { to: '/signing', label: 'Sign In' },
    { to: '/cart', label: `Cart`, showCount: true },
    { to: '/orders', label: 'Orders' },
    { to: '/aboutus', label: 'About Us' },
    { to: '/contactus', label: 'Contact Us' },
    { to: '/Signup', label: 'SignUp' },
  ];

  return (
    <BrowserRouter>
      <nav style={{
        backgroundColor: '#131921', color: 'white', padding: '12px 20px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', position: 'sticky', top: 0, zIndex: 1000
      }}>
        <Link to="/home" style={{ fontSize: 24, color: '#ff9900', textDecoration: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <FaShoppingCart style={{ marginRight: 8 }} />
          My-Market
        </Link>

        <div style={{ fontSize: 24, color: 'white', cursor: 'pointer' }} onClick={() => setMenuOpen(!menuOpen)}>
          {isMobile ? (menuOpen ? <FaTimes /> : <FaBars />) : null}
        </div>

        <div style={{
          display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          width: isMobile ? '100%' : 'auto',
          backgroundColor: isMobile ? '#232f3e' : 'transparent',
          padding: isMobile ? '10px 0' : 0,
          gap: isMobile ? 0 : '14px',
          textAlign: isMobile ? 'center' : 'left',
        }}>
          {links.map(({ to, label, showCount }) => (
            <Link
              key={to}
              to={to}
              onClick={() => isMobile && setMenuOpen(false)}
              style={{
                padding: '10px 16px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: 15
              }}
            >
              {label}
              {showCount && <span style={{
                backgroundColor: '#ff4d4d',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: 13,
                marginLeft: 6
              }}>{cartCount}</span>}
            </Link>
          ))}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/chocolate" element={<Chocolate />} />
        <Route path="/signing" element={<Signing />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
         <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
