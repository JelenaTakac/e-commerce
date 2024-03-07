import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <Router>
        <CartContextProvider>
          <ProductContextProvider>
            <Navbar />
            <main className="main">
              <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route
                  path="/products/:productId"
                  element={<SingleProduct />}
                />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </main>
            <Footer />
          </ProductContextProvider>
        </CartContextProvider>
      </Router>
    </div>
  );
}

export default App;
