import React from "react";

type ProductsContextType = {
    ProducId: string;
    setProducId: (text: string) => void;

};
//COMPLETAR EL CONTEXT CON LO QUE NECESITE
const ProductsContext = React.createContext<ProductsContextType>({
 
  ProducId: "",
  setProducId: () => {},

});

export default ProductsContext;