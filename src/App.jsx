import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Typewriter from './components/Typewriter';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import AddProducts from './components/AddProduct';
import Cart from './components/Cart';
import Chatbot from './components/Chatbot';
import AboutUs from './components/About';
import { CartProvider } from './context/CartContext';
import ContactUs from './components/ContactUs';
import FamilyFunBooking from './components/FamilyFunBooking';

const TypewriterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid1">
      <br /><br />
      <div className="stunning-text-container">
        <Typewriter text="Welcome to Digital Delights. Where Gaming Dreams Come True!" speed={70} />
      </div>
      <button className="btn btn-primary" onClick={() => navigate("/login")}><b>LOGIN</b></button>
      <button className="btn btn-primary" onClick={() => navigate("/signup")}><b>SIGN UP</b></button>
    </div>
  );
};

const StyledWrapper = ({ children }) => (
  <div style={{ marginTop: '900px' }}>
    {children}
  </div>
);

const PlainWrapper = ({ children }) => (
  <div style={{ marginTop: '0px' }}>
    {children}
  </div>
);

const HomeWrapper = ({ children }) => (
  <div style={{ marginTop: '1900px', padding: '20px', background: '#111', color: '#fff' }}>
    {children}
  </div>
);

function AppWrapper() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";
  const Wrapper =
    location.pathname === "/home"
      ? HomeWrapper
      : [
          "/home",
          "/productdetails",
          "/addproduct",
          "/cart",
          "/about",
          "/contactus",
        ].includes(location.pathname)
      ? StyledWrapper
      : PlainWrapper;

  return (
    <>
      {showNavbar && <Navbar />}
      <CartProvider>
        <Wrapper>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/addproduct" element={<AddProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<FamilyFunBooking />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<TypewriterPage />} />
          </Routes>
        </Wrapper>
        <Chatbot />
      </CartProvider>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
