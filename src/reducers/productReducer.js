import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "../utils/actionTypes";

export const productReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_PRODUCTS_SUCCESS:
      const { data, categoryValue, priceFlow } = action.payload;
      let updatedProducts = [...state.products];
      if (categoryValue !== "all") {
        updatedProducts = data.filter(
          (product) => product.category === categoryValue
        );
      } else {
        updatedProducts = data;
      }

      if (priceFlow === "ascending") {
        updatedProducts.sort((a, b) => a.price - b.price);
      } else {
        updatedProducts.sort((a, b) => b.price - a.price);
      }

      return {
        ...state,
        loading: false,
        products: updatedProducts,
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
