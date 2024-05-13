import React, { createContext, useContext } from "react";

type ProductsContextType = {
    ProductId: string;
    setProducId: (text: string) => void;
    page: number;
    SetPage: (newPage: number) => void;
};
//COMPLETAR EL CONTEXT CON LO QUE NECESITE
const ProductsContext = React.createContext<ProductsContextType>({
 
  ProductId: "",
  setProducId: () => {},
  page: 1,
  SetPage: () => {},

});

export const useProductsContext = () => useContext(ProductsContext);

export default ProductsContext;