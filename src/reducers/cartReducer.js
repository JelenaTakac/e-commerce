import { ADD_TO_CART } from "../utils/actionTypes";

// const initialCartState = {
//   cartItems: [],
//   numItemsInCart: 0,
//   cartTotal: 0,
// };

export const cartReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART:
      const { id, amount, price } = action.payload;

      const existingCartItem = state.cartItems.find((item) => item.id === id);

      if (existingCartItem) {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === id ? { ...item, amount: item.amount + amount } : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
          numItemsInCart: state.numItemsInCart + amount,
          cartTotal: state.cartTotal + price * amount,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          numItemsInCart: state.numItemsInCart + amount,
          cartTotal: state.cartTotal + price * amount,
        };
      }

    default:
      return state;
  }
};
