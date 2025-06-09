import React, { useState } from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import './Cart.css';
import { 
  updateQuantity, 
  removeItem, 
  calculateSub, 
  calculateTotalShipping, 
  calculateGrandTotal 
} from './cartUtils.js';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Blue Flower Print Crop Top',
      artist: 'Yellow',
      format: 'M',
      price: 29.00,
      quantity: 1,
      shipping: 'FREE',
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Levender Hoodie',
      artist: 'Levender',
      format: 'XXL',
      price: 119.00,
      quantity: 2,
      shipping: 'FREE',
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Black Sweatshirt',
      artist: 'Black',
      format: 'XXL',
      price: 123.00,
      quantity: 2,
      shipping: 5.00,
      image: '/api/placeholder/80/80'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(items => updateQuantity(items, id, newQuantity));
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => removeItem(items, id));
  };

  const subtotal = calculateSub(cartItems);
  const totalShipping = calculateTotalShipping(cartItems);
  const grandTotal = calculateGrandTotal(subtotal, totalShipping);

  const applyCoupon = () => {
    console.log('Applying coupon:', couponCode);
    // Coupon logic would go here
  };

  return (
    <div className="cart-container">
      {/* Header */}
      <div className="cart-header">
        <nav className="breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-separator">›</span>
          <span style={{ color: '#3C4242', fontWeight: 'bold' }}>Add To Cart</span>

        </nav>
        <p className="cart-instructions">
          Please fill in the fields below and click place order to complete your purchase!
        </p>
        <p className="login-prompt">
          Already registered? <a href="#" className="login-link">Please login here</a>
        </p>
      </div>

      {/* Cart Table */}
      <div className="cart-table-container">
        <div className="table-header">
          <div className="header-cell product-header">PRODUCT DETAILS</div>
          <div className="header-cell price-header">PRICE</div>
          <div className="header-cell quantity-header">QUANTITY</div>
          <div className="header-cell shipping-header">SHIPPING</div>
          <div className="header-cell subtotal-header">SUBTOTAL</div>
          <div className="header-cell action-header">ACTION</div>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="product-details">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-artist">Artist: {item.artist}</p>
                <p className="product-format">Format: {item.format}</p>
              </div>
            </div>
            
            <div className="item-price">
              ${item.price.toFixed(2)}
            </div>
            
            <div className="quantity-controls">
              <button 
                className="quantity-btn"
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
              >
                <Minus size={16} />
              </button>
              <span className="quantity-value">{item.quantity}</span>
              <button 
                className="quantity-btn"
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
            
            <div className="item-shipping">
              {item.shipping === 'FREE' ? (
                <span className="free-shipping">FREE</span>
              ) : (
                <span className="paid-shipping">${item.shipping.toFixed(2)}</span>
              )}
            </div>
            
            <div className="item-subtotal">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            
            <div className="item-action">
              <button 
                className="remove-btn"
                onClick={() => handleRemoveItem(item.id)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="cart-bottom">
        <div className="discount-section">
          <h3 className="discount-title">Discount Codes</h3>
          <p className="discount-subtitle">Enter your coupon code if you have one</p>
          <div className="coupon-input-container">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="coupon-input"
              placeholder="Enter coupon code"
            />
            <button className="apply-coupon-btn" onClick={applyCoupon}>
              Apply Coupon
            </button>
          </div>
          <button className="continue-shopping-btn">
            Continue Shopping
          </button>
        </div>

        <div className="order-summary">
          <div className="summary-row">
            <span className="summary-label">Sub Total</span>
            <span className="summary-value">${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Shipping</span>
            <span className="summary-value">${totalShipping.toFixed(2)}</span>
          </div>
          <div className="summary-row grand-total-row">
            <span className="summary-label grand-total-label">Grand Total</span>
            <span className="summary-value grand-total-value">${grandTotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
