import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Home,
  Cart,
  Products,
  About,
  SingleProduct,
  PageNotFound,
  PrivacyPolicy,
  TermsOfService,
  ContactUs,
} from "./components/views";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductContextProvider from "./contexts/ProductContext";

function App() {
  return (
    <div className="App">
      <Router>
        <ProductContextProvider>
          <Navbar />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </ProductContextProvider>
      </Router>
    </div>
  );
}

export default App;
