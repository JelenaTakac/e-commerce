import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import CartItem from "../cart/CartItem";
import { useNavigate } from "react-router-dom";
import { CLEAR_CART, REMOVE_ITEM } from "../../utils/actionTypes";

const Cart = () => {
    const {cartState, cartDispatch} =  useContext(CartContext);
    const {cartItems, numItemsInCart, cartTotal} = cartState;
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


    return (
        <div className="cart-page wrapper">
            {numItemsInCart === 0 
            ?
            <div>
                <h1>"Your cart is empty"</h1>
                <button onClick={() => navigate("/products")} className="btn">Shop now</button>
            </div>
            : 
            <div>
            <h1 className="title cart-title">Your Cart:</h1>
           { cartItems.map(product => (
            <div key={product.id} className="cart-products">
               <CartItem  product={product}/>
                <button onClick={() => handleRemoveItemFromCart(product)}>Remove</button>
            </div>
           ))}
           
            <hr />
            <h4>TOTAL: ${cartTotal}</h4>
            <button className="btn">Order now</button>
            {/* redirect za stranicu za placanje - preko private rute 
            mozda jos da dodam login 
            */}
            <button onClick={handleClearCart} className="btn">Clear All</button>
            </div>
            }
        </div>
    )
}

export default Cart