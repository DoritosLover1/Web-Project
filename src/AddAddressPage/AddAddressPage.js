import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../ScriptsFolder/AuthContext";
import Axios from "axios";

async function addUserAddress(addressData, token) {
  console.log("Adding new address:", addressData);
  console.log("Token:", token);
  
  try {
    const response = await Axios.post('http://localhost:5000/add-user-address', 
      {
        type: addressData.type || 'Home',
        first_name: addressData.firstName,
        last_name: addressData.lastName,
        country: addressData.country,
        company_name: addressData.companyName || null,
        street_address: addressData.streetAddress,
        city: addressData.city,
        state: addressData.state,
        phone: addressData.phone,
        postal_code: addressData.postalCode,
        delivery_instruction: addressData.deliveryInstruction || null
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log("Address added successfully:", response.data);
    return response.data;
    
  } catch(error) {
    console.error('Add address failed:', error.response?.data || error.message);
    throw error;
  }
}

export default function AddAddressPage() {
  const { user, isAuthenticated } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    companyName: '',
    streetAddress: '',
    aptSuite: '',
    city: '',
    state: '',
    phone: '',
    postalCode: '',
    deliveryInstruction: '',
    type: 'Home'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const requiredFields = ['firstName', 'lastName', 'country', 'streetAddress', 'city', 'state', 'phone', 'postalCode'];
    const emptyFields = requiredFields.filter(field => !formData[field].trim());
    
    if (emptyFields.length > 0) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      if (!isAuthenticated()) {
        setError('Please login to add address');
        setLoading(false);
        return;
      }

      const token = localStorage.getItem('authToken');

      await addUserAddress(formData, token);
      
      setSuccess('Address added successfully!');

      setFormData({
        firstName: '',
        lastName: '',
        country: '',
        companyName: '',
        streetAddress: '',
        aptSuite: '',
        city: '',
        state: '',
        phone: '',
        postalCode: '',
        deliveryInstruction: '',
        type: 'Home'
      });

      setTimeout(() => {
        setSuccess('');
      }, 2000);

    } catch (error) {
      console.error('Address addition failed:', error);
      setError(error.response?.data?.message || 'Failed to add address. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      country: '',
      companyName: '',
      streetAddress: '',
      aptSuite: '',
      city: '',
      state: '',
      phone: '',
      postalCode: '',
      deliveryInstruction: '',
      type: 'Home'
    });
    setError('');
    setSuccess('');
  };

  if (!user) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-vh-100 px-5">
        <div className="container-fluid py-3 px-4 bg-white">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 px-3">
              <li className="breadcrumb-item">
                <a href="#" className="text-muted text-decoration-none">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#" className="text-muted text-decoration-none">My Account</a>
              </li>
              <li className="breadcrumb-item active text-darkc" aria-current="page">Delivery Address</li>
            </ol>
          </nav>
        </div>
        
        <div className="d-flex py-4">
          <div className="row w-100">
            <div className="col-md-3">
              <div className="bg-white p-4 px-5">
                <div className="row">
                  <h5 className="text-dark fw-bold fs-2">
                    <div className="mb-3 border-start border-4 rounded-1 border-danger ps-2">
                      Hello {user?.first_name || 'User'}
                    </div>
                  </h5>
                </div>
                <p className="text-muted small mb-4">Welcome to your Account</p>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} to="#">
                      <i className="bi bi-bag px-2"></i> My orders
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} to="#">
                      <i className="bi bi-heart px-2"></i> Wishlist
                    </Link>
                  </li>
                  <li className="nav-item border-start border-3 border-danger bg-light">
                    <Link className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} to="#">
                      <i className="bi bi-person px-2"></i> My info
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} to="#">
                      <i className="bi bi-box-arrow-right px-2"></i> Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-9 col-md-8 col-sm-8">
              <div className="bg-white p-4">
                <h4 className="mb-4 fw-bold fs-2">My Info</h4>
                <h6 className="mb-4 fw-bold fs-4">Add Address</h6>
                
                {success && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <i className="bi bi-check-circle me-2"></i>
                    {success}
                  </div>
                )}
                
                {error && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="row mb-4 gap-0">
                    <div className="col-md-5 mx-2 mb-3">
                      <label className="form-label">First Name*</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="form-control bg-light border-0" 
                        placeholder="First Name"
                        required
                      />
                    </div>
                    
                    <div className="col-md-5 mx-2 mb-3">
                      <label className="form-label">Last Name*</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="form-control bg-light border-0" 
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    
                    <div className="col-md-5 mx-2 mb-3">
                      <label className="form-label">Country / Region*</label>
                      <input 
                        type="text" 
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="form-control bg-light border-0" 
                        placeholder="Country / Region"
                        required
                      />
                    </div>
                    
                    <div className="col-md-5 mx-2 mb-3">
                      <label className="form-label">Company Name</label>
                      <input 
                        type="text" 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="form-control bg-light border-0" 
                        placeholder="Company (optional)" 
                      />
                    </div>
                    
                    <div className="col-md-5 mx-2 mb-3">
                      <label className="form-label">Street Address*</label>
                      <input 
                        type="text" 
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        className="form-control bg-light border-0" 
                        placeholder="House number and street name"
                        required
                      />
                    </div>
                    
                    <div className="col-md-5 mx-2 mb-3">
                      <label className="form-label">Apt, suite, unit</label>
                      <input 
                        type="text" 
                        name="aptSuite"
                        value={formData.aptSuite}
                        onChange={handleInputChange}
                        className="form-control bg-light border-0" 
                        placeholder="apartment, suite, unit, etc. (optional)" 
                      />
                    </div>
                    
                    <div className="col-md-5 mx-2 mb-3">
                      <label className="form-label">City*</label>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="form-control bg-light border-0" 
                        placeholder="Town / City"
                        required
                      />
                    </div>
                    
                    <div className="col-md-5 mx-2 mb-3">
                      <label className="form-label">State*</label>
                      <input 
                        type="text" 
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="form-control bg-light border-0" 
                        placeholder="State"
                        required
                      />
                    </div>
                    
                    <div className="col-md-5 mx-2 mb-3">
                      <label className="form-label">Phone*</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-control bg-light border-0" 
                        placeholder="Phone"
                        required
                      />
                    </div>
                    
                    <div className="col-md-5 mx-2 mb-3">
                      <label className="form-label">Postal Code*</label>
                      <input 
                        type="text" 
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="form-control bg-light border-0" 
                        placeholder="Postal Code"
                        required
                      />
                    </div>
                    
                    <div className="col-md-11 mx-2 mb-3">
                      <label className="form-label">Delivery Instructions</label>
                      <textarea 
                        name="deliveryInstruction"
                        value={formData.deliveryInstruction}
                        onChange={handleInputChange}
                        className="form-control bg-light border-0" 
                        placeholder="Any special delivery instructions (optional)"
                        rows="3"
                      />
                    </div>
                    
                    <div className="d-flex gap-2 mx-2">
                      <button 
                        type="submit" 
                        className="btn btn-danger"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Saving...
                          </>
                        ) : (
                          'Save'
                        )}
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-light"
                        onClick={handleCancel}
                        disabled={loading}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}