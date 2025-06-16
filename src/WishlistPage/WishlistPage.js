import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from "../ScriptsFolder/AuthContext";
import Axios from "axios";
import { FaHeart } from 'react-icons/fa';

export default function WishlistPage() {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  
  const [wishlist, setWishlist] = useState([]);
  const [wishlistLoading, setWishlistLoading] = useState(false);

  const handleQuit = async () => {
    localStorage.clear();
    navigate("/");
  };

  const handleMyInfo = async () => {
    navigate("/account/contact-details");
  };
  
  useEffect(() => {
    const fetchWishlist = async () => {
      if (authLoading) return;

      if (!isAuthenticated()) {
        console.log('User not authenticated, redirecting to sign-in');
        navigate("/sign-in");
        return;
      }

      if (!user) return;

      setWishlistLoading(true);
      try {
        const customerId = user?.id || user?.customerId;
        
        if (!customerId) {
          console.error('Customer ID bulunamadı');
          return;
        }

        const response = await Axios.get(`http://localhost:5000/wishlist/${customerId}`);
        
        if (response.data.success) {
          setWishlist(response.data.wishlistItems);
        } else {
          console.error('Wishlist alınamadı:', response.data.message);
        }
      } catch (error) {
        console.error('Wishlist fetch error:', error);
        if (error.response?.status === 401) {
          navigate("/sign-in");
        }
      } finally {
        setWishlistLoading(false);
      }
    };
    
    fetchWishlist();
  }, [user, isAuthenticated, authLoading, navigate]);

  const removeFromWishlist = async (itemId) => {
    if (!isAuthenticated() || !user) return;

    try {
      const customerId = user?.id || user?.customerId;
      const response = await Axios.delete(`http://localhost:5000/wishlist-remove/${customerId}/${itemId}`);
      
      if (response.data.success) {
        setWishlist(prev => prev.filter(item => item.id !== itemId));
      }
    } catch (error) {
      console.error('Wishlist item silinemedi:', error);
    }
  };

  if (authLoading) {
    return (
      <div className="container py-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated() || !user) {
    navigate("/sign-in");
  }

  return (
    <div className="container-fluid min-vh-100 px-3 px-md-5">
      <div className="bg-white py-3 px-3 px-md-4 mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#" className="text-muted text-decoration-none">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-muted text-decoration-none">My Account</a>
            </li>
            <li className="breadcrumb-item active text-danger" aria-current="page">Wishlist</li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="col-12 col-lg-3 mb-4">
          <div className="bg-white p-4 h-100">
            <div className="mb-4">
              <h5 className="text-dark fw-bold fs-4">
                <div className="border-start border-4 rounded-1 border-danger ps-2">
                  Hello {user.first_name || user.name}
                </div>
              </h5>
              <p className="text-muted small mb-0">Welcome to your Account</p>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <button className="btn nav-link d-flex align-items-center fw-bold text-muted w-100 text-start">
                  <i className="bi bi-bag px-2"></i> My orders
                </button>
              </li>
              <li className="nav-item border-start border-3 border-danger bg-light mb-2">
                <button className="btn nav-link d-flex align-items-center fw-bold text-muted w-100 text-start">
                  <i className="bi bi-heart px-2"></i> Wishlist
                </button>
              </li>
              <li className="nav-item mb-2">
                <button className="btn nav-link d-flex align-items-center fw-bold text-muted w-100 text-start" onClick={handleMyInfo}>
                  <i className="bi bi-person px-2"></i> My info
                </button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link d-flex align-items-center fw-bold text-muted w-100 text-start" onClick={handleQuit}>
                  <i className="bi bi-box-arrow-right px-2"></i> Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <div className="bg-white p-4">
            {wishlist.length !== 0 && (           
              <h4 className="mb-4 fw-bold fs-2">Wishlist 😍</h4>
            )}
            {wishlistLoading ? (
              <div className="text-center py-4">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p>Loading wishlist...</p>
              </div>
            ) : wishlist.length === 0 ? (
            <div className="d-flex justify-content-center">
              <div className="bg-white p-4">
                <div className="d-flex justify-content-center align-items-center w-100">
                    <div className="text-center p-4 border rounded bg-white shadow-sm">
                      <div className="mb-4">
                          <div className="d-inline-block bg-success bg-opacity-10 rounded-circle p-5">
                            <FaHeart className="text-success fs-1" />
                          </div>
                      </div>
                      <h4 className="mb-2 fs-3 fw-bold">Your wishlist is empty.</h4>
                      <p className="text-muted mb-4 small" style={{ maxWidth: '500px', margin: "auto" }}>
                      You don't have any products in the wishlist yet. You will find a lot of interesting products on our Shop page.
                      </p>
                      <button className="btn btn-danger fw-bold medium">Continue Shopping</button>
                    </div>
                </div>
              </div>
            </div>
            ) : (
              wishlist.map((product) => (
                <div key={product.id} className="d-flex justify-content-between align-items-center border-bottom py-3">
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <button 
                      className="btn btn-outline-secondary text-dark bg-transparent border-0 fs-4 fw-bold"
                      onClick={() => removeFromWishlist(product.id)}
                      title="Remove from wishlist"
                    >
                      ×
                    </button>
                    <img 
                      src={product.image || '/placeholder-image.jpg'} 
                      alt={product.name} 
                      style={{ width: "50px", height: "50px", objectFit: "cover" }} 
                    />
                    <div>
                      <h6 className="fw-bold">{product.name}</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <span className="fw-bold text-muted px-3">
                      ${typeof product.price === 'number' ? product.price.toFixed(2) : '0.00'}
                    </span>
                    <button className="btn btn-danger fw-bold" style={{fontSize: 13}}>
                      Add to cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}