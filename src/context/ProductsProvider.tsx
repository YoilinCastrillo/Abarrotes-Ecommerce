import { ReactNode, useState } from "react";
import ProductsContext from "./ProductsContext";

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [ProductId, setProductId] = useState("");
  const [page, setPage] = useState(1)


  return (
    <ProductsContext.Provider
      value={{
        ProductId,
        setProductId,
        page,
        setPage,
       
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

