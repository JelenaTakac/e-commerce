import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";
import "./navbar.css"

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <Logo className="navbar-logo" onClick={() => navigate("/")}/>
            <NavLink exact to={"/"} activeClassName="active" className="navbar-item">Home</NavLink>
            <NavLink to={"/about"} activeClassName="active" className="navbar-item">About</NavLink>
            <NavLink to={"/products"} activeClassName="active" className="navbar-item">Products</NavLink>
            <NavLink to={"/contact-us"} activeClassName="active" className="navbar-item">Contact Us</NavLink>
            <CartIcon className="cart-icon" onClick={() => navigate("/cart")}/>
        </div>
    )
}

export default Navbar;