import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Productdetail from './Components/Productdetail';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import ContactUs from './Components/ContactUs';
import PrivacyPolicy from './Components/PrivacyPolicy';




function App() {
  return (   
    <>  

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path="/detail/:id" element={<Productdetail/>}> </Route>
      <Route path='/cart' element={<Cart/>}> </Route>
      <Route path='/checkout' element={<Checkout/>}> </Route>
      <Route path='/contactUs' element={<ContactUs/>}> </Route>
      <Route path='/privacypolicy' element={<PrivacyPolicy/>}> </Route>
      
    </Routes>
  </BrowserRouter>
  </>
  
  )

  
}
    
  

export default App;