import { useContext } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";
import "./navbar.css"
import { CartContext } from "../../contexts/CartContext";

const Navbar = () => {
    const {cartState, cartDispatch} = useContext(CartContext);
    const {amount} = cartState;
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <Logo className="navbar-logo" onClick={() => navigate("/")}/>
            <NavLink to={"/"} className="navbar-item" end>Home</NavLink>
            <NavLink to={"/about"} className="navbar-item" end>About</NavLink>
            <NavLink to={"/products"} className="navbar-item" end>Products</NavLink>
            <NavLink to={"/contact-us"} className="navbar-item" end>Contact Us</NavLink>
            <div>
                <CartIcon className="cart-icon" onClick={() => navigate("/cart")}/>
                <span>{amount}</span>
            </div>
        </div>
    )
}

export default Navbar;