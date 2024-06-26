import React, { useContext } from "react";

type ProductsContextType = {
    ProductId: string;
    setProductId: (text: string) => void;
    page: number;
    setPage: (newPage: number) => void;
   

};

const ProductsContext = React.createContext<ProductsContextType>({

  ProductId: "",
  setProductId: () => {},
  page: 1,
  setPage: () => {},


});

export const useProductsContext = () => useContext(ProductsContext);

export default ProductsContext;