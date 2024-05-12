import { ReactNode, useState } from "react";
import ProductsContext from "./ProductsContext";

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [ProducId, setProducId] = useState("");
 
  return (
    <ProductsContext.Provider
      value={{
        ProducId,
        setProducId,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;