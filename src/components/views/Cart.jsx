import { useState, useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import CartItem from "../cart/CartItem";
import { useNavigate } from "react-router-dom";
import { CLEAR_CART, REMOVE_ITEM } from "../../utils/actionTypes";
import Purchase from "../purchase/Purchase";

const Cart = () => {
    const {cartState, cartDispatch} =  useContext(CartContext);
    const {cartItems, numItemsInCart, cartTotal} = cartState;
    const [purchaseModal, setPurchaseModal] = useState(false);
    const navigate = useNavigate();

    const handleClearCart = () => {
        cartDispatch({type: CLEAR_CART});
    }

    const handleRemoveItemFromCart = (product) => {
        const { id: productID, amount: productAmount, price: productPrice} = product;
        cartDispatch({
            type: REMOVE_ITEM,
            payload: {
                productID,
                productAmount,
                productPrice
            },
        })
    }

    const handleOrderNowClick = () => {
        setPurchaseModal(true);
    }

    const handleClosePurchase = () => {
        setPurchaseModal(false);
    }

    return (
        <div className="cart-page wrapper">
            {numItemsInCart === 0 
            ?
            <div className="cart-info">
                <h1 className="title">"Your cart is empty"</h1>
                <button onClick={() => navigate("/products")} className="btn btn-shop">Shop now</button>
            </div>
            : 
            <div>
            <h1 className="title cart-title">Your Cart:</h1>
           { cartItems.map(product => (
            <div key={product.id} className="cart-products">
               <CartItem  product={product}/>
                <button onClick={() => handleRemoveItemFromCart(product)} className="btn remove-btn">Remove</button>
            </div>
           ))}
            <hr />
            <h2 className="cart-total">TOTAL: {cartTotal.toFixed(2)}$</h2>
            <div className="btn-container">
                <button onClick={handleClearCart} className="btn clear-btn">Clear All</button>
                <button className="btn order-btn" onClick={handleOrderNowClick}>Order now</button>
            </div>

            {purchaseModal &&  <Purchase cartTotal={cartTotal} onClose={handleClosePurchase} onClearCart={handleClearCart}/>}
            </div>
            }
        </div>
    )
}

export default Cart