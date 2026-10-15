import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import './Low.css';

const ContactUs = () => {

     const [isOpen, setIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Contact Form Submitted:', formData);
        setSubmitted(true);
    };

    return (

        <>  
        <nav className="navbar">
                <div className="left-section">
                    <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>

                    <Link to="/" className="logo">
                        ProductsOye
                    </Link>
                </div>

                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Search for products..." 
                        className="search-input"
                    />
                    <span className="mic-icon">🎤</span>
                </div>

                <div className="right-section">
                    <Link to="/login" className="login-btn">
                        Log in 
                    </Link>
                    <Link to="/cart" className="Cart-btn">
                        Cart
                    </Link>
                </div>
                {isOpen && (
                    <div className="dropdown-menu">
                        <Link to="/" className="dropdown-link" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/cart" className="dropdown-link" onClick={() => setIsOpen(false)}>Cart</Link>
                        <Link to="/checkout" className="dropdown-link" onClick={() => setIsOpen(false)}>Checkout</Link>
                        <Link to="/contactUs" className="dropdown-link" onClick={() => setIsOpen(false)}>ContactUs</Link>
                        <Link to="/privacypolicy" className="dropdown-link" onClick={() => setIsOpen(false)}>PrivacyPolicy</Link>
                        <Link to="/login" className="dropdown-link" onClick={() => setIsOpen(false)}>login</Link>
                    </div>
                )}
            </nav>


        <div className="contact-page">

            <div className="contact-header">
                <h2>Contact Us</h2>
                <p>We would love to hear from you. Please fill out the form below with your inquiries or feedback.</p>
            </div>

            <div className="contact-container">
                {/* Contact Information Side */}
                <div className="contact-info">
                    <h3>Get In Touch</h3>
                    <p>Whether you have a question about your order, returns, or anything else, our team is ready to answer all your questions.</p>
                    
                    <div className="info-item">
                        <span className="info-icon">📍</span>
                        <div>
                            <h4>Location</h4>
                            <p>Lahore, Pakistan</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">📧</span>
                        <div>
                            <h4>Email Us</h4>
                            <p>support@priceoye.pk</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">🕒</span>
                        <div>
                            <h4>Working Hours</h4>
                            <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Side */}
                <div className="contact-form-wrapper">
                    {submitted ? (
                        <div className="success-message">
                            <h3>Thank You!</h3>
                            <p>Your message has been sent successfully. We will get back to you soon.</p>
                            <button 
                                className="submit-btn" 
                                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    value={formData.subject} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="What is this about?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
         </>
    );
};

export default ContactUs;