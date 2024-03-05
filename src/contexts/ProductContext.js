import { createContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";

export const ProductContext = createContext();

const initialProductState = {
  products: [],
  loading: false,
  error: null,
};

const ProductContextProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
