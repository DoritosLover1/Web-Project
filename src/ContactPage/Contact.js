import React, { useState } from 'react';
import './Contact.css';
import { FaGoogle, FaTwitter, FaEye, FaEyeSlash, FaPhone, FaEnvelope ,FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

import picture from '../assets/backgrounds/joseph-joestar-moveset-concept-v0-abehwg567hea1.png';

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
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1000);
    };
    
    return(
        <div>
            <div className='container-fluid p-0'>
                <div className='row g-0'>
                    <div className='col-md-6'>
                        <div className='contact-img-container'>
                            <img
                                src={picture} 
                                alt="Contact Background" 
                                className='img-fluid w-100 h-100'
                            />
                            <div className='contact-overlay'>
                                <div className='contact-info'>
                                    <h2 className='contact-overlay-title'>Contact Information</h2>
                                    <p className='contact-overlay-subtitle'>
                                        Questions, comments, or suggestions? 
                                        Simply fill in the form and we'll be in touch shortly.
                                    </p>
                                    
                                    <div className='contact-details'>
                                        <div className='contact-item'>
                                            <FaPhone className='contact-icon' />
                                            <span>+1012 3456 789</span>
                                        </div>
                                        
                                        <div className='contact-item'>
                                            <FaEnvelope className='contact-icon' />
                                            <span>demo@gmail.com</span>
                                        </div>
                                        
                                        <div className='contact-item'>
                                            <FaMapMarkerAlt className='contact-icon' />
                                            <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='contact-form-container p-4'>
                            <h1 className="contact-title">Contact Us</h1>
                            <p className="contact-subtitle">Any question or remarks? Just write us a message!</p>
                            
                            <form onSubmit={handleSubmit}>
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
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="contact-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit'}
                                </button>
                            </form>
                            
                            <div className="contact-note">
                                <p>We'll get back to you within 24 hours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

