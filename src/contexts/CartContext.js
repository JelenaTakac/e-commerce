import { createContext, useReducer } from "react";
import { cartReducer, loadCartFromLocalStorage } from "../reducers/cartReducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(
    cartReducer,
    loadCartFromLocalStorage()
  );

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
