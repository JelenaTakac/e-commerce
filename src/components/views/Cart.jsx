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
        <div className="cart-page">
            {numItemsInCart === 0 
            ?
            <div>
                <h1>"Your cart is empty"</h1>
                <button onClick={() => navigate("/products")}>Shop now</button>
            </div>
            : 
            <div>
            <h1>Your Cart:</h1>
           { cartItems.map(product => (
            <div key={product.id}>
               <CartItem  product={product}/>
                <button onClick={() => handleRemoveItemFromCart(product)}>Remove</button>
            </div>
           ))}
           
            <hr />
            <h4>TOTAL: ${cartTotal}</h4>
            <button>Order now</button>
            {/* redirect za stranicu za placanje - preko private rute 
            mozda jos da dodam login 
            */}
            <button onClick={handleClearCart}>Clear All</button>
            </div>
            }
        </div>
    )
}

export default Cart