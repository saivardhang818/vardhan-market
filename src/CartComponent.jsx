import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClearCart, OrderDetails, IncCart, DecCart, RemoveFromCart } from './store';
import './CartComponent.css';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti'; // Importing confetti

function CartComponent() {
  const cartObjects = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState('');
  const couponCodeRef = useRef();
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  const handleCouponApply = () => {
    const codeValue = couponCodeRef.current.value.trim().toUpperCase();
    setCouponCode(codeValue);

    switch (codeValue) {
      case 'VARDHAN10':
        setCouponDiscountPercentage(10);
        break;
      case 'VARDHAN20':
        setCouponDiscountPercentage(20);
        break;
      case 'VARDHAN30':
        setCouponDiscountPercentage(30);
        break;
      default:
        alert('❌ Invalid Coupon Code');
        setCouponDiscountPercentage(0);
    } 

    couponCodeRef.current.value = '';
  };

  const calculateAmounts = () => {
    const totalPrice = cartObjects.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = (discountPercentage / 100) * totalPrice;
    const afterDiscount = totalPrice - discountAmount;
    const couponDiscount = (couponDiscountPercentage / 100) * afterDiscount;
    const afterCoupon = afterDiscount - couponDiscount;
    const tax = (afterCoupon * 5) / 100;
    const finalAmount = afterCoupon + tax;
    return { totalPrice, discountAmount, couponDiscount, tax, finalAmount };
  };

  const { totalPrice, discountAmount, couponDiscount, tax, finalAmount } = calculateAmounts();

  const cartListItems = cartObjects.map((item, index) => (
    <li key={index} className="cart-item">
      <img className="cart-img" src={item.image} alt={item.name} />
      <span className="item-name">{item.name}</span>
      <span className="item-price">₹{item.price}</span>
      <div className="quantity-box">
        <button onClick={() => dispatch(DecCart(item))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(IncCart(item))}>+</button>
      </div>
      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
      <div className="item-actions">
        <button className="btn-remove" onClick={() => dispatch(RemoveFromCart(item))}>Remove</button>
      </div>
    </li>
  ));

  const handlePaymentSuccess = () => {
    const purchaseDateTime = new Date().toLocaleString();
    const orderId = 'ORD-' + new Date().getTime();

    const orderDetailsObject = {
      orderId,
      purchaseDateTime,
      items: [...cartObjects],
      finalAmount,
      tax: tax.toFixed(2),
      email: customerEmail
    };

    console.log('✅ Purchase completed:', orderDetailsObject);
    dispatch(ClearCart());
    dispatch(OrderDetails(orderDetailsObject));

    const templateParams = {
      order_id: orderId,
      purchase_datetime: purchaseDateTime,
      email: customerEmail,
      tax: tax.toFixed(2),
      final_amount: finalAmount.toFixed(2),
      item_details: cartObjects.map(item =>
        `• ${item.name} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toFixed(2)}`
      ).join('\n')
    };

    emailjs.send(
      'service_y8h2mow', // your EmailJS service ID
      'template_isk1m4m', // your EmailJS template ID
      templateParams,
      'GmSSB-asQ_CPM7yG3' // your EmailJS public key
    ).then((response) => {
      console.log('✅ Email sent!', response.status, response.text);
    }).catch((error) => {
      console.error('❌ Email failed:', error);
    });

    // 🎉 Trigger Confetti Blast Effect
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
    });

    setPaymentSuccessful(true);

    setTimeout(() => {
      navigate('/orders');
    }, 3000);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Cart Summary</h1>

      {cartObjects.length > 0 ? (
        <>
          <div className="cart-list">
            <div className="cart-header">
              <span>Image</span>
              <span>Product</span>
              <span>Price (₹)</span>
              <span>Quantity</span>
              <span>Total (₹)</span>
              <span>Actions</span>
            </div>
            {cartListItems}
          </div>

          <div className="summary-section">
            <h3>💰 Total Price: ₹{totalPrice.toFixed(2)}</h3>
            <div className="discount-buttons">
              <button onClick={() => setDiscountPercentage(10)}>🏷 10% Discount</button>
              <button onClick={() => setDiscountPercentage(20)}>🏷 20% Discount</button>
              <button onClick={() => setDiscountPercentage(30)}>🏷 30% Discount</button>
            </div>

            <h4>🎉 Discount: -₹{discountAmount.toFixed(2)}</h4>

            <div className="coupon-section">
              <input type="text" ref={couponCodeRef} placeholder="Enter Coupon Code" />
              <button onClick={handleCouponApply}>Apply Coupon</button>
            </div>

            <h4>🎟 Coupon ({couponCode}): -₹{couponDiscount.toFixed(2)}</h4>
            <h4>🧾 Tax (5%): +₹{tax.toFixed(2)}</h4>
            <h3>💵 Final Amount: ₹{finalAmount.toFixed(2)}</h3>

            <div className="email-section">
              <h4>📧 Enter your email to receive the order:</h4>
              <input
                type="email"
                placeholder="Enter email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </div>

            <div className="payment-method">
              <h3>💳 Select Payment Method:</h3>
              <button onClick={() => setPaymentMethod('qr')}>📱 QR Code</button>
              <button onClick={() => setPaymentMethod('card')}>💳 Card</button>
            </div>

            {paymentMethod === 'qr' && !paymentSuccessful && (
              <div className="qr-section">
                <h4>Scan QR to Pay ₹{finalAmount.toFixed(2)}</h4>
                <QRCode value={`upi://pay?pa=9494948586@ybl&pn=MyStore&am=${finalAmount.toFixed(2)}&cu=INR`} />
                <p>UPI ID: 9494948586@ybl</p>
                <button onClick={handlePaymentSuccess} className="confirm-payment-btn">
                  ✅ I’ve Paid
                </button>
              </div>
            )}

            {paymentMethod === 'card' && !paymentSuccessful && (
              <div className="card-section">
                <h4>Enter Card Details</h4>
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Cardholder Name" />
                <input type="text" placeholder="Expiry (MM/YY)" />
                <input type="text" placeholder="CVV" />
                <button onClick={handlePaymentSuccess} className="confirm-payment-btn">
                  ✅ I’ve Paid
                </button>
              </div>
            )}

            {paymentSuccessful && (
              <h2 className="thank-you-message">
                ✅ Payment Successful! Redirecting to orders page...
              </h2>
            )}
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h2>Your cart is empty! 🛒</h2>
        </div>
      )}
    </div>
  );
}

export default CartComponent;
