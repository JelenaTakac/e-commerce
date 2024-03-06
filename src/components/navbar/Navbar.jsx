import { useContext } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";
import "./navbar.css"
import { CartContext } from "../../contexts/CartContext";

const Navbar = () => {
    const {cartState} = useContext(CartContext);
    const {numItemsInCart} = cartState;
    const navigate = useNavigate();


    return (
        <div className="navbar">
            <Logo fill="#5b6774" className="navbar-logo" onClick={() => navigate("/")}/>
            <div className="navbar-items">
                <NavLink to={"/"} className="navbar-item" end>Home</NavLink>
                <NavLink to={"/about"} className="navbar-item" end>About</NavLink>
                <NavLink to={"/products"} className="navbar-item" end>Products</NavLink>
                <NavLink to={"/contact-us"} className="navbar-item" end>Contact Us</NavLink>
            </div>
            <div>
                <CartIcon className="cart-icon" onClick={() => navigate("/cart")}/>
                <span style={{color: "white", fontWeight: "bold", fontSize: "20px"}}>{numItemsInCart}</span>
            </div>
        </div>
    )
}

export default Navbar;