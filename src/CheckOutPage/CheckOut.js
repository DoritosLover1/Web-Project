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
    <div className="checkout-container">
      <div className="checkout-wrapper">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <div className="breadcrumb-content">
            <span>Home</span>
            <span>/</span>
            <span>My Account</span>
            <span>/</span>
            <span className="active">Check Out</span>
          </div>
        </nav>

        {/* Main Heading */}
        <h1 className="main-heading">Check Out</h1>

        <div className="checkout-form">
          {/* Billing Details */}
          <div className="form-section">
            <h2 className="section-title">Billing Details</h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  Country / Region*
                </label>
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
              
              <div className="form-group">
                <label className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Company name"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  Street Address*
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  placeholder="House number and street name"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  Apt, suite, unit
                </label>
                <input
                  type="text"
                  name="aptSuite"
                  value={formData.aptSuite}
                  onChange={handleInputChange}
                  placeholder="apartment, suite, unit, etc. (optional)"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  City*
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Town / City"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  State*
                </label>
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
              
              <div className="form-group">
                <label className="form-label">
                  Postal Code*
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="Postal Code"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  Phone*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleInputChange}
                  className="checkbox-input"
                />
                <span className="checkbox-text">
                  Save this information for a faster checkout
                </span>
              </label>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="form-section">
            <h2 className="section-title">Shipping Address</h2>
            <p className="section-description">
              Select the address that matches your card or payment method.
            </p>
            
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="shippingOption"
                  value="same"
                  checked={formData.sameAsBilling}
                  onChange={() => handleShippingChange('same')}
                  className="radio-input"
                />
                <span className="radio-text">Same as Billing address</span>
              </label>
              
              <label className="radio-option">
                <input
                  type="radio"
                  name="shippingOption"
                  value="different"
                  checked={formData.differentShipping}
                  onChange={() => handleShippingChange('different')}
                  className="radio-input"
                />
                <span className="radio-text">Use a different shipping address</span>
              </label>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="form-section">
            <h2 className="section-title">Shipping Method</h2>
            
            <div className="shipping-options">
              <label className="shipping-option">
                <div className="shipping-content">
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="monday"
                    checked={formData.shippingMethod === 'monday'}
                    onChange={handleInputChange}
                    className="radio-input"
                  />
                  <span className="shipping-text">Arrives by Monday, June 7</span>
                </div>
              </label>
              
              <div className="delivery-charges">
                <div className="charges-row">
                  <span className="charges-label">Delivery Charges</span>
                  <span className="charges-amount">$2.00</span>
                </div>
                <p className="charges-note">Additional fees may apply</p>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="form-section">
            <h2 className="section-title">Payment Method</h2>
            <p className="section-description">
              All transactions are secure and encrypted.
            </p>
            
            <div className="payment-options">
              {/* Credit Card */}
              <div className="payment-option">
                <label className="payment-header">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                    className="radio-input"
                  />
                  <span className="payment-text">Credit Card</span>
                  <div className="card-icons">
                    <div className="card-icon visa">VISA</div>
                    <div className="card-icon mastercard">MC</div>
                    <div className="card-icon amex">AMEX</div>
                    <div className="card-icon discover">DISC</div>
                  </div>
                </label>
                
                {formData.paymentMethod === 'card' && (
                  <div className="card-details">
                    <div className="card-grid">
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="Card number"
                        className="form-input"
                        maxLength="19"
                      />
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="Expiration date (MM/YY)"
                        className="form-input"
                        maxLength="5"
                      />
                      <input
                        type="text"
                        name="securityCode"
                        value={formData.securityCode}
                        onChange={handleInputChange}
                        placeholder="Security code"
                        className="form-input"
                        maxLength="4"
                      />
                      <input
                        type="text"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                        placeholder="Name on Card"
                        className="form-input"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Cash on Delivery */}
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === 'cash'}
                  onChange={handleInputChange}
                  className="radio-input"
                />
                <span className="payment-text">Cash on delivery</span>
                <span className="payment-description">Pay with cash upon delivery.</span>
              </label>

              {/* PayPal */}
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleInputChange}
                  className="radio-input"
                />
                <span className="payment-text">PayPal</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="submit-button"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;