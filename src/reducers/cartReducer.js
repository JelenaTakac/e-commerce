import { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM } from "../utils/actionTypes";

const initialCartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
};

export const loadCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || initialCartState;
};

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
        const updateCartState = {
          ...state,
          cartItems: updatedCartItems,
          numItemsInCart: state.numItemsInCart + amount,
          cartTotal: state.cartTotal + price * amount,
        };

        localStorage.setItem("cart", JSON.stringify(updateCartState));
        return updateCartState;
      } else {
        const updateCartState = {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          numItemsInCart: state.numItemsInCart + amount,
          cartTotal: state.cartTotal + price * amount,
        };
        localStorage.setItem("cart", JSON.stringify(updateCartState));
        return updateCartState;
      }

    case CLEAR_CART:
      localStorage.removeItem("cart");
      return initialCartState;

    case REMOVE_ITEM:
      const { productID, productAmount, productPrice } = action.payload;
      const currentCart = state.cartItems.filter(
        (item) => item.id !== productID
      );

      const updateCartState = {
        ...state,
        cartItems: currentCart,
        numItemsInCart: state.numItemsInCart - productAmount,
        cartTotal: state.cartTotal - productPrice * productAmount,
      };

      localStorage.setItem("cart", JSON.stringify(updateCartState));
      return updateCartState;

    default:
      return state;
  }
};
