import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Checkout = () => {
     const [isOpen, setIsOpen] = useState(false)
    const [cart, setcart] = useState([]);
    const [spc, setspc] = useState(1000)
    useEffect(()=>{
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const fixedcart = cart.map((item)=>({
            ...item , 
            quantity : item.quantity || 1
        }))
        setcart(fixedcart)
    
    },[])
    
    const total = cart.reduce((acc , item)=>{
        return acc + item.price*(item.quantity || 1)
    },0)
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
    



    <div className="container pb-5">
        <main>
            <h2 className='text-center my-4 fw-bold'>Checkout form</h2>
            <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
                
                <ul className="list-group mb-3">                
                
                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (PKR)</span>
                    <strong>{total + spc}</strong>
                </li>
                </ul>

                {/* <form className="card p-2">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Promo code" />
                    <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
                </form> */}
            </div>
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Billing address</h4>
                <form className="needs-validation" noValidate>
                    <div className="row g-3">
                        <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" defaultValue="" required />
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                        </div>

                        <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" defaultValue="" required />
                        <div className="invalid-feedback">
                            Valid last name is required.
                        </div>
                        </div>

                        <div className="col-12">
                        <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                        </div>

                        <div className="col-12">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                        <div className="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                        </div>

                        <div className="col-md-5">
                        <label htmlFor="country" className="form-label">Country</label>
                        <select className="form-select" id="country" required>
                            <option value="">Choose...</option>
                            <option>Pakistan</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid country.
                        </div>
                        </div>

                        <div className="col-md-4">
                        <label htmlFor="state" className="form-label">City</label>
                        <select className="form-select" id="state" required>
                            <option value="">Choose...</option>
                            <option>Lahore</option>
                            <option>Karachi</option>
                            <option>Gujranwala</option>
                            <option>Sargodha</option>
                            <option>Islamabad</option>
                        </select>
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                        </div>

                        <div className="col-md-3">
                        <label htmlFor="zip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="zip" placeholder="" required />
                        <div className="invalid-feedback">
                            Zip code required.
                        </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="same-address" />
                        <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                    </div>

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="save-info" />
                        <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Payment</h4>

                    <div className="my-3">
                        <div className="form-check">
                            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                            <label className="form-check-label" htmlFor="credit">Credit card</label>
                        </div>
                        <div className="form-check">
                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                        <label className="form-check-label" htmlFor="debit">Debit card</label>
                        </div>
                        <div className="form-check">
                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                        <label className="form-check-label" htmlFor="paypal">JazzCash</label>
                        </div>
                    </div>

                    <div className="row gy-3">
                        <div className="col-md-6">
                        <label htmlFor="cc-name" className="form-label">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" placeholder="" required />
                        <small className="text-muted">Full name as displayed on card</small>
                        <div className="invalid-feedback">
                            Name on card is required
                        </div>
                        </div>

                        <div className="col-md-6">
                        <label htmlFor="cc-number" className="form-label">Credit card number</label>
                        <input type="text" className="form-control" id="cc-number" placeholder="" required />
                        <div className="invalid-feedback">
                            Credit card number is required
                        </div>
                        </div>

                        <div className="col-md-3">
                        <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                        <div className="invalid-feedback">
                            Expiration date required
                        </div>
                        </div>

                        <div className="col-md-3">
                        <label htmlFor="cc-cvv" className="form-label">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                        <div className="invalid-feedback">
                            Security code required
                        </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    {/* <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button> */}
                    <Link to={"/order-success"} className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</Link>
                </form>
            </div>
            </div>
        </main>
    </div>
    </>
  )
}

export default Checkout