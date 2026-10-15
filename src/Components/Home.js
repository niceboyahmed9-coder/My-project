import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Low.css';

const womenImages = [
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1790539460016-2c5a7a4e16be?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1577660002965-04865592fc60?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1588271968087-4c51abe05afc?auto=format&fit=crop&w=600&q=80',
    'https://images.pexels.com/photos/5478513/pexels-photo-5478513.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.unsplash.com/photo-1637437757614-6491c8e915b5?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1535982368253-05d640fe0755?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1659261448687-6d01466e06e4?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1641290748359-1d944fc8359a?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1765870974078-6d38fc3d30dc?auto=format&fit=crop&w=600&q=80'
];

const menImages = [
    'https://images.pexels.com/photos/9558723/pexels-photo-9558723.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/31480550/pexels-photo-31480550.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/30710244/pexels-photo-30710244.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/31959214/pexels-photo-31959214.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/11100293/pexels-photo-11100293.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/14241847/pexels-photo-14241847.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80',
    'https://images.pexels.com/photos/28758137/pexels-photo-28758137.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/15299295/pexels-photo-15299295.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    'https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/13872590/pexels-photo-13872590.jpeg?auto=compress&cs=tinysrgb&w=600'
];

const electronicsImages = [
    'https://images.pexels.com/photos/3921827/pexels-photo-3921827.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80',
    'https://images.pexels.com/photos/30758128/pexels-photo-30758128.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5382359/pexels-photo-5382359.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7172701/pexels-photo-7172701.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=600&q=80',
    'https://images.pexels.com/photos/25809251/pexels-photo-25809251.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/30708285/pexels-photo-30708285.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/30169978/pexels-photo-30169978.jpeg?auto=compress&cs=tinysrgb&w=600'
];

const womenProducts = [
    { title: 'Floral Summer Dress', description: 'A breezy floral dress designed for warm-weather comfort and effortless style.', price: 1499 },
    { title: 'Elegant Satin Blouse', description: 'A silky satin blouse with a graceful fit for office days and evening events.', price: 1299 },
    { title: 'Classic Denim Jacket', description: 'A lightweight denim jacket that pairs perfectly with dresses, jeans, and casual outfits.', price: 1699 },
    { title: 'Soft Knit Sweater', description: 'A cozy knit sweater with a flattering fit for everyday layering.', price: 1399 },
    { title: 'Pleated Midi Skirt', description: 'A feminine pleated skirt that brings movement and elegance to your look.', price: 1599 },
    { title: 'Women’s Running Sneakers', description: 'Comfort-first sneakers for active days with a sporty streetwear feel.', price: 1899 },
    { title: 'Luxury Handbag', description: 'A chic handbag with premium finishing for work, travel, and daily use.', price: 2199 },
    { title: 'Lightweight Scarf', description: 'A soft scarf that adds a polished accent to any casual or formal outfit.', price: 899 },
    { title: 'Office Chic Heels', description: 'Elegant heels for confident workdays and special evening occasions.', price: 2299 },
    { title: 'Cotton Casual T-Shirt', description: 'A breathable cotton tee designed for comfort and everyday easy styling.', price: 799 },
    { title: 'Statement Jewelry Set', description: 'A bold jewelry set that adds a refined touch to your daily wardrobe.', price: 1499 },
    { title: 'Evening Party Dress', description: 'A sleek party dress crafted for shine, movement, and standout evenings.', price: 2499 }
].map((item, index) => ({
    id: 1000 + index + 1,
    ...item,
    image: womenImages[index],
    category: 'women clothing'
}));

const menProducts = [
    { title: 'Classic Cotton Shirt', description: 'A clean cotton shirt made for easy comfort and a smart everyday look.', price: 1199 },
    { title: 'Formal Business Suit', description: 'A refined business suit that delivers a sharp, professional silhouette.', price: 4599 },
    { title: 'Casual Denim Jeans', description: 'Reliable denim jeans with a structured fit and relaxed everyday comfort.', price: 1699 },
    { title: 'Premium Leather Belt', description: 'A premium leather belt built to complete both formal and casual outfits.', price: 999 },
    { title: 'Slim Fit Polo', description: 'A modern polo shirt with a slim cut for a polished casual style.', price: 1499 },
    { title: 'Street Style Hoodie', description: 'A relaxed hoodie designed for fashion-forward, everyday comfort.', price: 1999 },
    { title: 'Minimalist Watch', description: 'A sleek minimalist watch that adds subtle distinction to your outfit.', price: 2799 },
    { title: 'Running Sports Jacket', description: 'A lightweight sports jacket with enough flexibility for active movement.', price: 2399 },
    { title: 'Modern Sunglasses', description: 'A trendy pair of sunglasses for a sharper, modern everyday finish.', price: 1299 },
    { title: 'Classic Sneakers', description: 'Everyday sneakers built for comfort, versatility, and all-day wear.', price: 2099 },
    { title: 'Mens Wool Coat', description: 'A tailored wool coat that brings warmth and premium style in colder weather.', price: 3999 },
    { title: 'Travel Weekender Bag', description: 'A durable weekender bag designed for short trips and daily essentials.', price: 2899 }
].map((item, index) => ({
    id: 2000 + index + 1,
    ...item,
    image: menImages[index],
    category: 'men clothing'
}));

const electronicsProducts = [
    { title: 'Wireless Earbuds', description: 'Compact wireless earbuds that deliver immersive sound and clear calls.', price: 1799 },
    { title: 'Smart TV', description: 'A vivid smart television designed for streaming, gaming, and cinematic viewing.', price: 8999 },
    { title: 'Gaming Laptop', description: 'High-performance gaming laptop built for speed, graphics, and multitasking.', price: 14999 },
    { title: 'Portable SSD', description: 'Fast portable storage that keeps your files secure and easy to carry.', price: 4999 },
    { title: 'Noise Cancelling Headphones', description: 'Premium headphones for immersive audio and distraction-free listening.', price: 6999 },
    { title: '4K Webcam Camera', description: 'Sharp 4K webcam camera built for streaming, video calls, and content creation.', price: 5899 },
    { title: 'Bluetooth Speaker', description: 'Portable wireless speaker that delivers rich sound anywhere you go.', price: 2799 },
    { title: 'Smartwatch Pro', description: 'A feature-packed smartwatch with fitness tracking and all-day connectivity.', price: 6299 },
    { title: 'Mechanical Keyboard', description: 'A tactile mechanical keyboard designed for responsive gaming and work.', price: 4999 },
    { title: 'Tablet Air', description: 'Lightweight tablet for work, reading, and entertainment on the go.', price: 6699 },
    { title: 'USB-C Dock', description: 'A compact USB-C docking station for seamless connectivity and multitasking.', price: 3499 },
    { title: 'Smart Home Hub', description: 'A central smart home hub for controlling devices and automating your space.', price: 4299 }
].map((item, index) => ({
    id: 3000 + index + 1,
    ...item,
    image: electronicsImages[index],
    category: 'electronics'
}));

const productSections = [
    { title: 'Women Collection', background: '#fce4ec', products: womenProducts },
    { title: 'Men Collection', background: '#e3f2fd', products: menProducts },
    { title: 'Electronics Collection', background: '#eceff1', products: electronicsProducts }
];

const getStoredProducts = () => {
    try {
        const savedProducts = localStorage.getItem('products');
        if (!savedProducts) {
            return [...womenProducts, ...menProducts, ...electronicsProducts];
        }

        const parsedProducts = JSON.parse(savedProducts);
        return Array.isArray(parsedProducts) && parsedProducts.length > 0 ? parsedProducts : [...womenProducts, ...menProducts, ...electronicsProducts];
    } catch (error) {
        return [...womenProducts, ...menProducts, ...electronicsProducts];
    }
};

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState(getStoredProducts)

    useEffect(() => {
        const correctedImages = {
            1002: womenProducts[1].image,
            1003: womenProducts[2].image,
            1004: womenProducts[3].image,
            1005: womenProducts[4].image,
            1006: womenProducts[5].image,
            1007: womenProducts[6].image,
            1008: womenProducts[7].image,
            1009: womenProducts[8].image,
            1010: womenProducts[9].image,
            1011: womenProducts[10].image,
            1012: womenProducts[11].image,
            2001: menProducts[0].image,
            2002: menProducts[1].image,
            2003: menProducts[2].image,
            2004: menProducts[3].image,
            2005: menProducts[4].image,
            2006: menProducts[5].image,
            2007: menProducts[6].image,
            2008: menProducts[7].image,
            2009: menProducts[8].image,
            2010: menProducts[9].image,
            2011: menProducts[10].image,
            2012: menProducts[11].image,
            3001: electronicsProducts[0].image,
            3002: electronicsProducts[1].image,
            3003: electronicsProducts[2].image,
            3004: electronicsProducts[3].image,
            3005: electronicsProducts[4].image,
            3006: electronicsProducts[5].image,
            3007: electronicsProducts[6].image,
            3008: electronicsProducts[7].image,
            3009: electronicsProducts[8].image,
            3010: electronicsProducts[9].image,
            3011: electronicsProducts[10].image,
            3012: electronicsProducts[11].image
        };
        const storedProducts = getStoredProducts().map((item) => (
            correctedImages[item.id] ? { ...item, image: correctedImages[item.id] } : item
        ));
        setData(storedProducts);
        localStorage.setItem('products', JSON.stringify(storedProducts));
    }, [])

    return (

        <>   
        
        <div>
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

            <div className="hero-container">

                {/* --- HERO BANNER: PRODUCTS TO DIE FOR --- */}
            <div className="die-for-banner-container">
                <div className="hero-banner-die-for">
                    <div className="banner-content-box">
                        <span className="banner-tag">Exclusive Collection</span>
                        <h2>Products to Die For</h2>
                        <p>Discover hand-selected favorites and show-stopping pieces engineered for your lifestyle.</p>
                        <Link to="/" className="banner-cta-btn">Shop The Look</Link>
                    </div>
                    <div className="banner-graphic-box">
                        <div className="banner-icon-badge">✨</div>
                    </div>
                </div>
            </div>
            {/* --- END OF HERO BANNER --- */}


                <div className="purple-promo-banner">
                    <div className="promo-text-area">
                        <div className="promo-title-row">
                            <span className="shield-icon">🛡️</span>
                            <h2>ASLI WARRANTY CHALLENGE</h2>
                        </div>
                        <p>Official Brand Warranty ya Double Paisa Wapis</p>
                    </div>
                    <div className="promo-image-area">
                        <div className="person-silhouette"></div>
                    </div>
                </div>
            </div>

            <br /> <br /> <br /> <br />

            <h1 style={{ textAlign: 'center' }}>Our Products</h1>

            { productSections.map((section) => (
                <div key={section.title} style={{ backgroundColor: section.background, borderRadius: '18px', padding: '20px 18px', margin: '20px auto', maxWidth: '1400px' }}>
                    <h2 style={{ margin: '0 0 18px 0', paddingLeft: '10px' }}>{section.title}</h2>
                    <div className='row' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(220px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                        {section.products.map((item) => (
                            <div key={`${section.title}-${item.id}`} style={{ textAlign: 'center', background: '#ffffff', borderRadius: '12px', padding: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    onError={(event) => {
                                        event.currentTarget.src = 'https://placehold.co/600x400/cccccc/333333?text=Product+Image';
                                    }}
                                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                                />
                                <h3 style={{ fontSize: '18px', margin: '12px 0 8px' }}>{item.title}</h3>
                                <p style={{ margin: '6px 0' }}>Rs: {item.price || 0}</p>
                                <Link to={`/detail/${item.id}`} className="btn btn-info">Detail</Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* --- ADDED TWO NEW HERO BANNERS HERE --- */}
            <div className="extra-banners-container">
                {/* Banner 1: Seasonal Sale / Delivery Promo */}
                <div className="promo-banner-secondary">
                    <div className="banner-text-side">
                        <h2>🚚 Free Nationwide Delivery</h2>
                        <p>On all orders above Rs. 2,000. Shop your favorite fashion and electronics today!</p>
                        <Link to="/" className="banner-action-btn">Start Shopping</Link>
                    </div>
                    <div className="banner-graphic-side">
                        <span style={{ fontSize: '64px' }}>📦</span>
                    </div>
                </div>

                {/* Banner 2: Customer Support / Membership Promo */}
                <div className="promo-banner-tertiary">
                    <div className="banner-text-side">
                        <h2>⭐ Join ProductsOye Rewards</h2>
                        <p>Earn points on every purchase and get exclusive discounts on top brands.</p>
                        <Link to="/contactUs" className="banner-action-btn" style={{ color: '#059669' }}>Contact Us</Link>
                    </div>
                    <div className="banner-graphic-side">
                        <span style={{ fontSize: '64px' }}>🎁</span>
                    </div>
                </div>
            </div>
            {/* --- END OF NEW BANNERS --- */}

            {/* Banner 3: Customer Services */}
                <div className="promo-banner-quaternary">
                    <div className="banner-text-side">
                        <h2>🎧 24/7 Customer Services</h2>
                        <p>Have questions about your order, warranty, or returns? We are here to help anytime!</p>
                        <Link to="/contactUs" className="banner-action-btn" style={{ color: '#0369a1' }}>Get in Touch</Link>
                    </div>
                    <div className="banner-graphic-side">
                        <span style={{ fontSize: '64px' }}>💬</span>
                    </div>
                </div>
            </div>


        <div/>

</>

    )
}

export default Home
