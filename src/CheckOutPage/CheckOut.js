import React, { useState } from 'react';
import './CheckOut.css';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    companyName: '',
    streetAddress: '',
    aptSuite: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
    sameAsBilling: true,
    differentShipping: false,
    shippingMethod: 'monday',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    securityCode: '',
    nameOnCard: '',
    cashOnDelivery: false,
    paypal: false,
    saveInfo: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleShippingChange = (option) => {
    setFormData(prev => ({
      ...prev,
      sameAsBilling: option === 'same',
      differentShipping: option === 'different'
    }));
  };

  const handleSubmit = () => {
    // Form validation
    const requiredFields = ['firstName', 'lastName', 'country', 'streetAddress', 'city', 'state', 'postalCode', 'phone'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      alert(`Lütfen şu alanları doldurun: ${missingFields.join(', ')}`);
      return;
    }

    if (formData.paymentMethod === 'card') {
      const cardFields = ['cardNumber', 'expiryDate', 'securityCode', 'nameOnCard'];
      const missingCardFields = cardFields.filter(field => !formData[field]);
      
      if (missingCardFields.length > 0) {
        alert(`Lütfen kart bilgilerini doldurun: ${missingCardFields.join(', ')}`);
        return;
      }
    }

    console.log('Form submitted:', formData);
    alert('Sipariş başarıyla oluşturuldu!');
  };

  return (
    <div className="min-vh-100 px-5">
      {/* Breadcrumb */}
      <div className="container-fluid py-3 px-4 bg-white">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 px-3">
            <li className="breadcrumb-item">
              <a href="#" className="text-muted text-decoration-none">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-muted text-decoration-none">My Account</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Check Out</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="d-flex py-4">
        <div className="row w-100">
          {/* Sidebar - User Account Menu */}
          <div className="col-md-3">
            <div className="bg-white p-4 px-5">
              <div className="row">
                <h5 className="text-dark fw-bold fs-2">
                  <div className="mb-3 border-start border-4 rounded-1 border-danger ps-2">
                    Hello Jhanvi
                  </div>
                </h5>
              </div>
              <p className="text-muted small mb-4">Welcome to your Account</p>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} href="#">
                    <i className="bi bi-bag px-2"></i> My orders
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} href="#">
                    <i className="bi bi-heart px-2"></i> Wishlist
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} href="#">
                    <i className="bi bi-person px-2"></i> My info
                  </a>
                </li>
                <li className="nav-item border-start border-3 border-danger bg-light">
                  <a className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} href="#">
                    <i className="bi bi-credit-card px-2"></i> Check Out
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link d-flex align-items-center fw-bold" style={{ color: "gray" }} href="#">
                    <i className="bi bi-box-arrow-right px-2"></i> Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Checkout Form */}
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="bg-white p-4">
              <h2 className="fw-bold mb-4 fs-3">Check Out</h2>
              
              <div className="checkout-form">
                {/* Billing Details */}
                <div className="form-section mb-4">
                  <h3 className="section-title fs-5 fw-bold mb-3">Billing Details</h3>
                  
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">First Name*</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First name"
                        className="form-control"
                        required
                      />
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Last Name*</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last name"
                        className="form-control"
                        required
                      />
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Country / Region*</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="form-select"
                        required
                      >
                        <option value="">Select country</option>
                        <option value="turkey">Turkey</option>
                        <option value="usa">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="germany">Germany</option>
                        <option value="france">France</option>
                        <option value="italy">Italy</option>
                        <option value="spain">Spain</option>
                      </select>
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Company name"
                        className="form-control"
                      />
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Street Address*</label>
                      <input
                        type="text"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        placeholder="House number and street name"
                        className="form-control"
                        required
                      />
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Apt, suite, unit</label>
                      <input
                        type="text"
                        name="aptSuite"
                        value={formData.aptSuite}
                        onChange={handleInputChange}
                        placeholder="apartment, suite, unit, etc. (optional)"
                        className="form-control"
                      />
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label fw-bold">City*</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Town / City"
                        className="form-control"
                        required
                      />
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label fw-bold">State*</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="form-select"
                        required
                      >
                        <option value="">Select state</option>
                        <option value="istanbul">Istanbul</option>
                        <option value="ankara">Ankara</option>
                        <option value="izmir">Izmir</option>
                        <option value="antalya">Antalya</option>
                        <option value="bursa">Bursa</option>
                        <option value="adana">Adana</option>
                      </select>
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Postal Code*</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="Postal Code"
                        className="form-control"
                        required
                      />
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Phone*</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-check mt-3">
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleInputChange}
                      className="form-check-input"
                      id="saveInfo"
                    />
                    <label className="form-check-label" htmlFor="saveInfo">
                      Save this information for a faster checkout
                    </label>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="form-section mb-4">
                  <h3 className="section-title fs-5 fw-bold mb-3">Shipping Address</h3>
                  <p className="text-muted small mb-3">
                    Select the address that matches your card or payment method.
                  </p>
                  
                  <div className="row">
                    <div className="col-12">
                      <div className="form-check mb-2">
                        <input
                          type="radio"
                          name="shippingOption"
                          value="same"
                          checked={formData.sameAsBilling}
                          onChange={() => handleShippingChange('same')}
                          className="form-check-input"
                          id="sameAddress"
                        />
                        <label className="form-check-label" htmlFor="sameAddress">
                          Same as Billing address
                        </label>
                      </div>
                      
                      <div className="form-check">
                        <input
                          type="radio"
                          name="shippingOption"
                          value="different"
                          checked={formData.differentShipping}
                          onChange={() => handleShippingChange('different')}
                          className="form-check-input"
                          id="differentAddress"
                        />
                        <label className="form-check-label" htmlFor="differentAddress">
                          Use a different shipping address
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="form-section mb-4">
                  <h3 className="section-title fs-5 fw-bold mb-3">Shipping Method</h3>
                  
                  <div className="card">
                    <div className="card-body">
                      <div className="form-check">
                        <input
                          type="radio"
                          name="shippingMethod"
                          value="monday"
                          checked={formData.shippingMethod === 'monday'}
                          onChange={handleInputChange}
                          className="form-check-input"
                          id="mondayDelivery"
                        />
                        <label className="form-check-label" htmlFor="mondayDelivery">
                          Arrives by Monday, June 7
                        </label>
                      </div>
                      
                      <hr className="my-3" />
                      
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">Delivery Charges</span>
                        <span className="fw-bold">$2.00</span>
                      </div>
                      <p className="text-muted small mt-1 mb-0">Additional fees may apply</p>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="form-section mb-4">
                  <h3 className="section-title fs-5 fw-bold mb-3">Payment Method</h3>
                  <p className="text-muted small mb-3">
                    All transactions are secure and encrypted.
                  </p>
                  
                  {/* Credit Card */}
                  <div className="card mb-3">
                    <div className="card-header">
                      <div className="form-check d-flex justify-content-between align-items-center">
                        <div>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={formData.paymentMethod === 'card'}
                            onChange={handleInputChange}
                            className="form-check-input me-2"
                            id="creditCard"
                          />
                          <label className="form-check-label fw-bold" htmlFor="creditCard">
                            Credit Card
                          </label>
                        </div>
                        <div className="d-flex gap-2">
                          <span className="badge bg-primary">VISA</span>
                          <span className="badge bg-warning">MC</span>
                          <span className="badge bg-info">AMEX</span>
                          <span className="badge bg-success">DISC</span>
                        </div>
                      </div>
                    </div>
                    
                    {formData.paymentMethod === 'card' && (
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-md-6">
                            <input
                              type="text"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              placeholder="Card number"
                              className="form-control"
                              maxLength="19"
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              placeholder="Expiration date (MM/YY)"
                              className="form-control"
                              maxLength="5"
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              name="securityCode"
                              value={formData.securityCode}
                              onChange={handleInputChange}
                              placeholder="Security code"
                              className="form-control"
                              maxLength="4"
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              name="nameOnCard"
                              value={formData.nameOnCard}
                              onChange={handleInputChange}
                              placeholder="Name on Card"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Cash on Delivery */}
                  <div className="card mb-3">
                    <div className="card-header">
                      <div className="form-check d-flex justify-content-between align-items-center">
                        <div>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cash"
                            checked={formData.paymentMethod === 'cash'}
                            onChange={handleInputChange}
                            className="form-check-input me-2"
                            id="cashOnDelivery"
                          />
                          <label className="form-check-label fw-bold" htmlFor="cashOnDelivery">
                            Cash on delivery
                          </label>
                        </div>
                        <small className="text-muted">Pay with cash upon delivery.</small>
                      </div>
                    </div>
                  </div>

                  {/* PayPal */}
                  <div className="card">
                    <div className="card-header">
                      <div className="form-check">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="paypal"
                          checked={formData.paymentMethod === 'paypal'}
                          onChange={handleInputChange}
                          className="form-check-input me-2"
                          id="paypal"
                        />
                        <label className="form-check-label fw-bold" htmlFor="paypal">
                          PayPal
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-danger btn-lg fw-bold"
                    style={{ fontSize: '18px' }}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;