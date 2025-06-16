import React, { useState } from 'react';
import { FaGoogle, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaDiscord } from 'react-icons/fa';
import picture from '../assets/backgrounds/background_contact_us.jpg';
import Axios from 'axios';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert('Lütfen geçerli bir email adresi giriniz.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      contact_name: formData.name,
      contact_subject: formData.subject,
      contact_message: formData.message,
      contact_email: formData.email
    };

    try {
      const response = await Axios.post('http://localhost:5000/contact-us', payload);

      if (response.data.success) {
        alert(response.data.message || 'Thank you for your message!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(response.data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to send message. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
<div className="container-fluid p-0">
  <div className="row g-0">
    
    <div className="col-md-6 col-12 contact-img-container d-flex align-items-center justify-content-center position-relative">
      <img
        src={picture}
        alt="Contact Background"
        className="w-100 h-100"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="contact-overlay">
        <h2 className="contact-overlay-title">Contact Information</h2>
        <p className="contact-overlay-subtitle">
          Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon"><FaPhone /></span>
            <span>(123) 456-789</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><FaEnvelope /></span>
            <span>CerrahVINLY@deneme.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><FaMapMarkerAlt /></span>
            <span>Istanbul University, Istanbul/Turkey</span>
          </div>
        </div>

        <div className="social-links">
          <a href="#" className="social-link"><FaTwitter /></a>
          <a href="#" className="social-link"><FaInstagram /></a>
          <a href="#" className="social-link"><FaDiscord /></a>
        </div>
      </div>
    </div>

    <div className="col-md-6 col-12 contact-form-container">
      <div className='px-3'>
        <h1 className="contact-title">Contact Us ☎️</h1>
        <p className="contact-subtitle">Any question or remarks? Just write us a message!</p>

        <form onSubmit={handleSubmit} className="w-100" noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="demo@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control message-textarea"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-danger fw-bold contact-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>

        <div className="mt-4 p-3 text-danger bg-danger bg-opacity-10 border border-danger rounded">
            <p className="mb-0 fst-italic">We'll get back to you within 24 hours.</p>
        </div>
      </div>
    </div>

  </div>
</div>
  );
}