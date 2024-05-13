import React, { createContext, useContext, useState } from "react";

type ProductsContextType = {
    products: string[]; // Aquí puedes ajustar el tipo según tu lista de productos
    setProducts: (products: string[]) => void;
    page: number;
    setPage: (newPage: number) => void;
};

const ProductsContext = createContext<ProductsContextType>({
    products: [],
    setProducts: () => {},
    page: 1,
    setPage: () => {},
});

export const useProductsContext = () => useContext(ProductsContext);

export default ProductsContext;

