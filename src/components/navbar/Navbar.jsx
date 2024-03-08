import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {cartState} = useContext(CartContext);
    const {numItemsInCart} = cartState;
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navigation">
            <div className="navbar wrapper">
                <Logo fill="#5b6774" className="navbar-logo" onClick={() => navigate("/")}/>
                {isOpen && (
                <div className="navbar-items">
                    <NavLink to={"/"} className="navbar-item" end>Home</NavLink>
                    <NavLink to={"/about"} className="navbar-item" end>About</NavLink>
                    <NavLink to={"/products"} className="navbar-item" end>Products</NavLink>
                    <NavLink to={"/contact-us"} className="navbar-item" end>Contact Us</NavLink>
                </div>)}
                <div className="navbar-items-desktop">
                    <NavLink to={"/"} className="navbar-item" end>Home</NavLink>
                    <NavLink to={"/about"} className="navbar-item" end>About</NavLink>
                    <NavLink to={"/products"} className="navbar-item" end>Products</NavLink>
                    <NavLink to={"/contact-us"} className="navbar-item" end>Contact Us</NavLink>
                </div>
                <div className="cart-humburger-container">
                    <NavLink to={"/cart"} className="navbar-item cart-container" end>
                        <CartIcon className="cart-icon" onClick={() => navigate("/cart")}/>
                        <span>{numItemsInCart}</span>
                    </NavLink>
                    <div className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;