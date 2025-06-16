import React, { useEffect, useState } from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import './Cart.css';
import './EmptyCart.css';
import picture from "../assets/backgrounds/background_emptycart.png";
import Axios from 'axios';
import { useAuth } from '../ScriptsFolder/AuthContext';
import { useNavigate } from 'react-router-dom';

const EmptyCart = ({ onContinueShopping }) => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-grow-1 body-of-emptycart-wrapper'>
      <div className='text-center image-container'>
        <img src={picture} alt="Error Icon" />
        <h1>Your cart is empty and sad</h1>
        <p style={{ color: "#807D7E" }}>Add something to make it happy!</p>
        <button
          type='button'
          className='btn btn-danger my-2 continue-btn'
          style={{ fontSize: 20 }}
          onClick={onContinueShopping}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  const { user, loading: authLoading } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState({ subtotal: 0, shipping: 0, grandTotal: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/sign-in');
    }
  }, [authLoading, user, navigate]);

  const fetchCart = async () => {
    try {
      const response = await Axios.get(`http://localhost:5000/cart/${user.id}`);
      if (response.data.success) {
        setCartItems(response.data.cartItems);
        setSummary(response.data.summary);
      }
    } catch (error) {
      console.error('Cart fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchCart();
    }
  }, [user]);

  const updateCartItem = async (productId, quantity) => {
    try {
      await Axios.put('http://localhost:5000/cart/update', {
        customerId: user.id,
        productId,
        quantity
      });
      fetchCart();
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    updateCartItem(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    updateCartItem(productId, 0);
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  const applyCoupon = () => {
    console.log('Applying coupon:', couponCode);
  };

  if (loading || authLoading) return <div>Loading...</div>;

  if (cartItems.length === 0) {
    return <EmptyCart onContinueShopping={handleContinueShopping} />;
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <nav className="breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-separator">›</span>
          <span style={{ color: '#3C4242', fontWeight: 'bold' }}>Add To Cart</span>
        </nav>
      </div>

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
                onClick={() => handleUpdateQuantity(item.id, item.product_quantity - 1)}
              >
                <Minus size={16} />
              </button>
              <span className="quantity-value">{item.product_quantity}</span>
              <button
                className="quantity-btn"
                onClick={() => handleUpdateQuantity(item.id, item.product_quantity + 1)}
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="item-shipping">
              {summary.shipping === 0 ? (
                <span className="free-shipping">FREE</span>
              ) : (
                <span className="paid-shipping">${summary.shipping.toFixed(2)}</span>
              )}
            </div>

            <div className="item-subtotal">
              ${(item.item_total).toFixed(2)}
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
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>

        <div className="order-summary">
          <div className="summary-row">
            <span className="summary-label">Sub Total</span>
            <span className="summary-value">${summary.subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Shipping</span>
            <span className="summary-value">${summary.shipping.toFixed(2)}</span>
          </div>
          <div className="summary-row grand-total-row">
            <span className="summary-label grand-total-label">Grand Total</span>
            <span className="summary-value grand-total-value">${summary.grandTotal.toFixed(2)}</span>
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
