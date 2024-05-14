import React, { useContext } from "react";

type ProductsContextType = {
    ProductId: string;
    setProductId: (text: string) => void;
    page: number;
    setPage: (newPage: number) => void;
   // descripcion: string; //////
   // setdescripcion: (text: string) => void; //////

};
//COMPLETAR EL CONTEXT CON LO QUE NECESITE
const ProductsContext = React.createContext<ProductsContextType>({

  ProductId: "",
  setProductId: () => {},
  page: 1,
  setPage: () => {},
 // descripcion: "", //////
  //setdescripcion: () => {}, /////

});

export const useProductsContext = () => useContext(ProductsContext);

export default ProductsContext;