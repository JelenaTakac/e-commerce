import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import CartItem from "../cart/CartItem";

const Cart = () => {
    const {cartState} =  useContext(CartContext);
    const {cartItems, numItemsInCart, cartTotal} = cartState;


    return (
        <div className="cart-page">
            <h1>Your Cart:</h1>
            {numItemsInCart === 0 ? "Your cart is empty" :
                cartItems.map(product => <CartItem key={product.id} product={product}/>)
            }
            <hr />
            <h4>TOTAL: ${cartTotal}</h4>
        </div>
    )
}

export default Cart