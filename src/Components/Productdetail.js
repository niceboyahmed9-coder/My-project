import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Productdetail = () => {
    const { id } = useParams()
      const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        const localProducts = JSON.parse(localStorage.getItem('products')) || []
        const matchedProduct = localProducts.find((item) => String(item.id) === String(id))

        if (matchedProduct) {
            setData(matchedProduct)
        } else {
            setData(null)
        }
    }, [id])

    const atc = (item) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        const finddata = cart.findIndex((cartItem) => cartItem.id === item.id)

        if (finddata === -1) {
            const updatedCart = [...cart, item]
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            alert('item pushed')
        } else {
            alert('item already in cart')
        }
    }

    if (!data) {
        return <div className="container mt-5"><h3>Loading product details...</h3></div>
    }

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



        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <img src={data.image} alt={data.title} className="img-fluid rounded mb-3 product-image" id="mainImage" />
                </div>

                <div className="col-md-6">
                    <h2 className="mb-3">{data.title}</h2>
                    <p className="text-muted mb-4">category: {data.category}</p>
                    <div className="mb-3">
                        <span className="h4 me-2">Rs: {data.price}</span>
                        <span className="text-muted"><s>Rs: {data.price * 2}</s></span>
                    </div>
                    <div className="mb-3">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-half text-warning"></i>
                        <span className="ms-2">5.0 Rating.</span>
                    </div>
                    <p className="mb-4">{data.description}</p>

                    <button onClick={() => atc(data)} className="btn btn-primary btn-lg mb-3 me-2">
                        <i className="bi bi-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
         </>
    )
}

export default Productdetail
