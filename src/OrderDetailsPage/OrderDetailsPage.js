import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth } from "../ScriptsFolder/AuthContext";
import Axios from "axios";

export default function OrderDetailsPage() {
  const navigate = useNavigate();
  const { userDetails } = useAuth();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderLoading, setOrderLoading] = useState(false);

  /*BUNLARIN FONKSİYONLARI YAPILACAK BACKEND İÇİN*/
  async function getUserOrders() {
    try {
      const response = await Axios.get('http://localhost:5000/get-user-orders');
      return response.data;
    } catch(error) {
      console.error('Failed to fetch orders:', error.response?.data || error.message);
      throw error;
    }
  }
  
  /*BUNLARIN FONKSİYONLARI YAPILACAK BACKEND İÇİN*/
  async function cancelOrderItem(orderId, itemId) {
    try {
      const response = await Axios.delete(`http://localhost:5000/cancel-order-item/${orderId}/${itemId}`);
      return response.data;
    } catch(error) {
      console.error('Failed to cancel order item:', error.response?.data || error.message);
      throw error;
    }
  }

  // Navigation handlers
  const handleHomePage = () => {
    navigate("/");
  }

  const handleQuit = async () => {
    localStorage.clear();
    navigate("/");
  }

  const handleWishList = async () => {
    navigate("/account/wishlist");
  }

  const handleContactDetails = async () => {
    navigate("/account/contact-details");
  }

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    if (!userDataString) {
      setLoading(false);
      return;
    }

    const userData = JSON.parse(userDataString);
    setUser(userData);
    setLoading(false);
    fetchOrders();
  }, [userDetails]);

  const fetchOrders = async () => {
    setOrderLoading(true);
    try {
      const orderData = await getUserOrders();
      setOrders(orderData.orders || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setOrders([
        {
          orderNo: "#123456789",
          orderDate: "2 June 2023 2:40 PM",
          status: "Inprogress",
          deliveryDate: "8 June 2023",
          paymentMethod: "Verified",
          total: 143.0,
          items: [
            {
              id: 1,
              title: "Printed white cote",
              quantity: 1,
              price: 29.0,
              color: "White",
              image: "/path/to/image1.jpg"
            },
            {
              id: 2,
              title: "Men Blue Shirt",
              quantity: 1,
              price: 29.0,
              color: "Blue",
              image: "/path/to/image2.jpg"
            }
          ]
        }
      ]);
    } finally {
      setOrderLoading(false);
    }
  };

  const handleCancelItem = async (orderId, itemId) => {
    if (!window.confirm('Are you sure you want to cancel this item?')) {
      return;
    }

    try {
      await cancelOrderItem(orderId, itemId);
      fetchOrders();
    } catch (error) {
      alert('Failed to cancel item: ' + (error.response?.data?.message || error.message));
    }
  };

  if (loading) {
    return (
      <div className="container py-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Looking for user data...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    setTimeout(() => navigate("/sign-in"), 0);
    return null;
  }

  return (
    <div className="container-fluid min-vh-100 px-3 px-md-5">
      <div className="bg-white py-3 px-3 px-md-4 mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#" className="text-muted text-decoration-none" onClick={handleHomePage}>
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-muted text-decoration-none">
                My Account
              </a>
            </li>
            <li className="breadcrumb-item active text-danger" aria-current="page">
              Order Details
            </li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="col-12 col-lg-3 mb-4">
          <div className="bg-white p-4 h-100">
            <div className="mb-4">
              <h5 className="text-dark fw-bold fs-4">
                <div className="border-start border-4 rounded-1 border-danger ps-2">
                  Hello {user.first_name || 'name'}
                </div>
              </h5>
              <p className="text-muted small mb-0">Welcome to your Account</p>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item border-start border-3 border-danger bg-light mb-2">
                <button className="btn nav-link d-flex align-items-center fw-bold text-muted w-100 text-start">
                  <i className="bi bi-bag px-2"></i> My orders
                </button>
              </li>
              <li className="nav-item mb-2">
                <button className="btn nav-link d-flex align-items-center fw-bold text-muted w-100 text-start" onClick={handleWishList}>
                  <i className="bi bi-heart px-2"></i> Wishlist
                </button>
              </li>
              <li className="nav-item mb-2">
                <button className="btn nav-link d-flex align-items-center fw-bold text-muted w-100 text-start" onClick={handleContactDetails}>
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
            <h4 className="mb-4 fw-bold fs-2">My Orders 🛍️</h4>
            
            {orderLoading ? (
              <div className="text-center py-4">
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading orders...</span>
                </div>
              </div>
            ) : (
              <>
                {orders.length === 0 ? (
                  <div className="text-center py-4 text-muted">
                    <p>No orders found.</p>
                  </div>
                ) : (
                  orders.map((order, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex justify-content-between align-items-center bg-light p-4 rounded mb-3">
                        <div className="fw-bold">
                          <strong>Order no:</strong> {order.orderNo}<br />
                          <small className="text-muted">Order Date: {order.orderDate}</small><br />
                          <small className="text-muted">Status: <span className={`badge ${
                            order.status === 'Delivered' ? 'bg-success' : 
                            order.status === 'Inprogress' ? 'bg-warning' : 'bg-secondary'
                          }`}>{order.status}</span></small>
                        </div>
                        <div className="text-end">
                          <div className="text-muted fw-bold mb-2">
                            <strong>Total:</strong> ${order.total.toFixed(2)}
                          </div>
                          {order.deliveryDate && (
                            <small className="text-muted">Delivery: {order.deliveryDate}</small>
                          )}
                        </div>
                      </div>

                      <div className="row">
                        {order.items.map((item) => (
                          <div key={item.id} className="col-12 mb-3">
                            <div className="card bg-light border-0">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center gap-3">
                                    <img 
                                      src={item.image} 
                                      alt={item.title} 
                                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                      className="rounded"
                                    />
                                    <div>
                                      <h6 className="fw-bold mb-1">{item.title}</h6>
                                      <p className="mb-0 text-muted small">
                                        <span className="fw-bold">Color:</span> {item.color} | 
                                        <span className="fw-bold"> Qty:</span> {item.quantity} | 
                                        <span className="fw-bold"> Price:</span> ${item.price.toFixed(2)}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex gap-2">
                                    <button 
                                      className="btn btn-outline-danger btn-sm"
                                      onClick={() => handleCancelItem(order.orderNo, item.id)}
                                      disabled={order.status === 'Delivered'}
                                    >
                                      {order.status === 'Delivered' ? 'Delivered' : 'Cancel'}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}