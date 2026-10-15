import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {

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

const totalquantity = cart.reduce((acc , item)=>{
    return acc + (item.quantity || 1)
},0)

const incquan = (id) =>{
    setcart((prevCart) =>
       prevCart.map((item) =>
        item.id === id
        ? {...item , quantity : (item.quantity || 1 ) + 1 }
        : item
    ) 
);
}

const decquan = (id) =>{
    setcart((prevCart) =>
       prevCart.map((item) =>
        item.id === id && item.quantity != 1
        ? {...item , quantity : (item.quantity || 1 ) - 1 }
        : item
    ) 
);
}
const clearCart = () => {
    localStorage.removeItem('cart');
    setcart([]);
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

    
<div class="container py-5">
    <h1 class="mb-5">Your Shopping Cart</h1>
    <div class="row">
        <div class="col-lg-8">

            <div class="card mb-4">
                <div class="card-body">

                    <div class="row cart-item">
                        {
                            cart.map((item)=>{
                                return<>
                                <div class="col-md-3">
                            <img src={item.image} alt="Product 2" class="img-fluid rounded" />
                        </div>
                        <div class="col-md-5">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="text-muted">Category: {item.category}</p>
                        </div>
                        <div class="col-md-2">
                            <div class="input-group">
                                <button class="btn btn-outline-secondary btn-sm" type="button"
                                onClick={()=> decquan(item.id)}>-</button>
                                Quantity : {item.quantity}
                                <button class="btn btn-outline-secondary btn-sm" type="button"
                                onClick={()=> incquan(item.id)}>+</button>
                            </div>
                        </div>
                        <div class="col-md-2 text-end">
                            <p class="fw-bold">Rs: {item.price}</p>
                            <button class="btn btn-sm btn-outline-danger">
                                    <i class="bi bi-trash"></i>
                            </button>
                        </div>
                            </>
                            })
                        }
                    </div>
                </div>
            </div>
            
            <div class="text-start mb-4">
               <div className="d-flex justify-content-between mb-4">
                <Link to="/" className="btn btn-outline-primary">
                    <i className="bi bi-arrow-left me-2"></i>Continue Shopping
                </Link>
                <button onClick={clearCart} className="btn btn-outline-danger">
                    Clear Cart
                </button>
            </div>
            </div>
        </div>
        <div class="col-lg-4">
        
            <div class="card cart-summary">
                <div class="card-body">
                    <h5 class="card-title mb-4">Order Summary</h5>
                    <div class="d-flex justify-content-between mb-3">
                        <span>Quantity</span>
                        <span>{totalquantity}</span>
                    </div>
                     <hr/>
                    <div class="d-flex justify-content-between mb-3">
                        <span>Sub total</span>
                        <span>{total}</span>
                    </div>                    
                    <hr />
                    <div class="d-flex justify-content-between mb-3">
                        <span>Shipping</span>
                        <span>{spc}</span>
                    </div>                    
                    <hr />
                    <div class="d-flex justify-content-between mb-4">
                        <strong>Total</strong>
                        <strong>Rs : {total + (total > 0 ? spc : 0)}</strong>
                    </div>
                    <Link to="/checkout" class="btn btn-primary w-100">Proceed to Checkout</Link>
                </div>
            </div>
            
            <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title mb-3">Apply Promo Code</h5>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Enter promo code" />
                        <button class="btn btn-outline-secondary" type="button">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</>
)
}

export default Cart
