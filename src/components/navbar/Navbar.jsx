import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";
import "./navbar.css"

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <Logo className="navbar-logo" onClick={() => navigate("/")}/>
            <NavLink to={"/"} className="navbar-item" end>Home</NavLink>
            <NavLink to={"/about"} className="navbar-item" end>About</NavLink>
            <NavLink to={"/products"} className="navbar-item" end>Products</NavLink>
            <NavLink to={"/contact-us"} className="navbar-item" end>Contact Us</NavLink>
            <CartIcon className="cart-icon" onClick={() => navigate("/cart")}/>
        </div>
    )
}

export default Navbar;