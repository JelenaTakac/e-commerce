import { TOGGLE_AMOUNT, ADD_TO_CART } from "../utils/actionTypes";

export const cartReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // case TOGGLE_AMOUNT:

    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
};
