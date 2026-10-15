import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';
import './Low.css';

const PrivacyPolicy = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [openId, setOpenId] = useState('scope');

    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    const leftColumnItems = [
        {
            id: 'scope',
            title: "SCOPE AND UPDATES OF THIS USER PRIVACY",
            content: "This policy covers the collection and processing of personal data through website services and mobile applications, effective starting January 1st, 2021."
        },
        { id: 'controller', title: "CONTROLLER", content: "Details concerning the designated data controller and administrative responsibilities." },
        { id: 'collect', title: "WHAT PERSONAL DATA WE COLLECT AND PROCESS", content: "Information outlining the specific kinds of personally identifiable data gathered during user interaction." },
        { id: 'non-personal', title: "YOUR NON-PERSONAL INFORMATION", content: "Details on technical or anonymous data collected automatically for analytics and service optimization." },
        { id: 'use-info', title: "USE OF INFORMATION", content: "Explains the primary business and operational purposes for utilizing collected data." },
        { id: 'law-enforcement', title: "INFORMATION TO LAW ENFORCEMENT AUTHORITIES, REGULATORS AND OTHER", content: "Conditions under which user details may be shared to comply with lawful regulatory requests." },
        { id: 'cookies', title: "USE OF COOKIES", content: "Overview of tracking elements, cookies, and user preference controls." }
    ];

    const rightColumnItems = [
        { id: 'rights', title: "YOUR RIGHTS TO CONTROL YOUR PERSONAL INFORMATION", content: "Outlines user rights to review, update, or request removal of personal records." },
        { id: 'withdraw', title: "WITHDRAW CONSENT/OPT-OUT", content: "Instructions on how to revoke permissions previously granted for data processing." },
        { id: 'security', title: "SECURITY", content: "Security procedures and administrative frameworks deployed to prevent unauthorized access." },
        { id: 'links', title: "OTHER WEBSITES LINKS", content: "Disclaimers regarding external or third-party web links present across the platform." },
        { id: 'forums', title: "PUBLIC FORUMS", content: "Policies governing data shared openly in public message boards or review sections." },
        { id: 'terms-change', title: "CHANGE IN TERMS OF PRIVACY POLICY", content: "Procedures for communicating updates or structural amendments to the policy." },
        { id: 'contact', title: "CONTACT US", content: "Channels for raising data privacy questions or contacting customer support." }
    ];

    const relatedPolicies = [
        { title: "Coupon Usage", icon: "🎫" },
        { title: "Extended Warranty", icon: "📄" },
        { title: "Fair Usage", icon: "📦" },
        { title: "Installment Plan", icon: "📅" },
        { title: "Open Parcel", icon: "📦" },
        { title: "Price Beating", icon: "🏷️" },
        { title: "Refund Policy", icon: "🏠" },
        { title: "Return Policy", icon: "🔄" },
        { title: "Shipping Policy", icon: "🚚" },
        { title: "Warranty Policy", icon: "🛡️" }
    ];

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

        <div className="privacy-page">
            <div className="privacy-container">
                <h1 className="privacy-main-title">Privacy Policy</h1>
                
                <p className="privacy-intro-text">
                    This document summarizes our practices regarding personal information handling and individual rights. 
                    We are dedicated to safeguarding user data collected through our website and mobile applications. 
                    Policy updates take effect immediately upon publication.
                </p>

                <div className="privacy-grid">
                    <div className="privacy-column">
                        {leftColumnItems.map((item) => {
                            const isOpen = openId === item.id;
                            return (
                                <div className="privacy-item" key={item.id}>
                                    <button className="privacy-btn" onClick={() => toggleAccordion(item.id)}>
                                        <span className="privacy-icon">{isOpen ? '−' : '+'}</span>
                                        <span className="privacy-btn-text">{item.title}</span>
                                    </button>
                                    {isOpen && <div className="privacy-content">{item.content}</div>}
                                </div>
                            );
                        })}
                    </div>

                    <div className="privacy-column">
                        {rightColumnItems.map((item) => {
                            const isOpen = openId === item.id;
                            return (
                                <div className="privacy-item" key={item.id}>
                                    <button className="privacy-btn" onClick={() => toggleAccordion(item.id)}>
                                        <span className="privacy-icon">{isOpen ? '−' : '+'}</span>
                                        <span className="privacy-btn-text">{item.title}</span>
                                    </button>
                                    {isOpen && <div className="privacy-content">{item.content}</div>}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="related-section">
                <div className="related-container">
                    <h3 className="related-title">Related Policies and Procedures</h3>
                    <div className="policies-grid">
                        {relatedPolicies.map((policy, index) => (
                            <div className="policy-card" key={index}>
                                <div className="policy-icon-box">{policy.icon}</div>
                                <span className="policy-card-title">{policy.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default PrivacyPolicy;