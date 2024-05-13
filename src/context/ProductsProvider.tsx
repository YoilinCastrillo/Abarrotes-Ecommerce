import { ReactNode, useState } from "react";
import ProductsContext from "./ProductsContext";

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [ProductId, setProducId] = useState("");
  const [page, SetPage] = useState(1);
 
  return (
    <ProductsContext.Provider
      value={{
        ProductId,
        setProducId,
        page,
        SetPage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
