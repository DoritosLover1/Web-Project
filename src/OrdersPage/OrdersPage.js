import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth } from "../ScriptsFolder/AuthContext";
import Axios from "axios";

export default function OrderPage() {
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

  const handleOrderDetails = (orderNo) => {
    navigate(`/account/order-details/${orderNo}`);
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
          orderDate: "2 June 2025 2:40 PM",
          status: "Inprogress",
          deliveryDate: "8 June 2025",
          paymentMethod: "Cash on delivery",
          items: [
            {
              id: 1,
              title: "Black Printed T-shirt",
              quantity: 1,
              price: 25.0,
              image: "/path/to/image1.jpg"
            },
          ]
        },
        {
          orderNo: "#987654321",
          orderDate: "2 June 2025 2:40 PM",
          status: "Shipped",
          deliveryDate: "8 June 2025",
          paymentMethod: "Cash on delivery",
          items: [
            {
              id: 2,
              title: "Printed blue & white Cote",
              quantity: 1,
              price: 144.0,
              image: "/path/to/image2.jpg"
            },
          ]
        },
        {
          orderNo: "#555666777",
          orderDate: "2 June 2025 2:40 PM",
          status: "Inprogress",
          deliveryDate: "8 June 2025",
          paymentMethod: "Cash on delivery",
          items: [
            {
              id: 3,
              title: "Blue Shirt",
              quantity: 1,
              price: 93.0,
              image: "/path/to/image3.jpg"
            },
          ]
        },
      ]);
    } finally {
      setOrderLoading(false);
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
              My Orders
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
            <h4 className="mb-4 fw-bold fs-2">My Orders 📦</h4>
            
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
                          <small className="text-muted">Estimated Delivery Date: {order.deliveryDate}</small>
                        </div>
                        <div className="text-end">
                          <div className="text-muted mb-1">
                            <strong>Order Status:</strong> 
                            <span className={`badge ms-2 ${
                              order.status === 'Delivered' ? 'bg-success' : 
                              order.status === 'Shipped' ? 'bg-info' :
                              order.status === 'Inprogress' ? 'bg-warning' : 'bg-secondary'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                          <div className="text-muted small">
                            <strong>Payment Method:</strong> {order.paymentMethod}
                          </div>
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
                                        <span className="fw-bold">Qty:</span> {item.quantity}
                                      </p>
                                      <p className="mb-0 fw-bold text-muted small">
                                        <span className="fw-bold">Total:</span> ${item.price.toFixed(2)}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex gap-2">
                                    <button 
                                      className="btn btn-danger fw-bold px-3 py-2"
                                      onClick={() => handleOrderDetails(order.orderNo)}
                                      style={{fontSize: '13px'}}
                                    >
                                      View Detail
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