import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartItem = ({product}) => {
    const {cartState} = useContext(CartContext);
    const {image, title, amount, category, price} = product;


    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <h4>{category}</h4>
            <h4>{amount}</h4>
            <h4>${price}</h4>
        </div>
    )
}

export default CartItem