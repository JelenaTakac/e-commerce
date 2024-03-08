import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./cart.css";

const CartItem = ({product}) => {
    const {cartState} = useContext(CartContext);
    const {image, title, amount, category, price} = product;


    return (
        <div className="cart-product">
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <h4>{title}</h4>
                <h4>{category}</h4>
                <h4>{amount}</h4>
                <h4>${price}</h4>
            </div>
        </div>
    )
}

export default CartItem