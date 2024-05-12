import { useEffect, useState } from "react";
import { getProductById } from "../../services/Products";

export default function useGetProductById (ProductId:string) {
    const [product, setProduct] = useState<Productos>()

    useEffect(() => {
        async function getProduct() {
            try {
              const product = await getProductById(ProductId);
              setProduct(product);
            } catch (error) {
              console.error("Error to get product", error);
            }
          }
      
          getProduct();
    }, [])
    return {product}
}