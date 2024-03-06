import { createContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

// const initialCartState = {
//   cart: [],
//   total: 0,
//   amount: 0,
// };

const initialCartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
};

const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
