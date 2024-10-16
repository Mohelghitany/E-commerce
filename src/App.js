import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './footer/footer';
import Header from './header/header';
import HeaderBot from './headerbot/headerbot';
import Signup from './signup/signup';
import Home from './Home/home';
import Signin from './login/login';
import ProfilePage from './profile/profile';
import About from './about/about';
import ProductDetails from './details/ProductDetails.jsx';
import Cart from './cart/cart';
import { WishlistProvider } from './WishlistContext';
import { CartProvider } from './CartContext';
import WishList from './wishlist/wishlist';
import BillingPage from './billing/billing';
import Contact from './contact/contact';
import NotFoundPage from './not/Not.jsx';

function App() {
  return (
    <CartProvider>
    
      <WishlistProvider>
        <div>

        <Header />
        <HeaderBot />

      
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="E-commerce" element={<Home />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/checkout" element={<BillingPage />} />
          <Route path="*" element={<NotFoundPage/>} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
      </div>
      </WishlistProvider>
    </CartProvider>
   
  );
}

export default App;
