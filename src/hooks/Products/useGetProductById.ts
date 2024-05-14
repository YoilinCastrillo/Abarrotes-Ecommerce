import { useEffect, useState } from "react";
import { getProductById } from "../../services/Products";


// HOOK PARA OBTENER PRODUCTOS POR SU ID
export default function useGetProductById (ProductId:string) {
    const [product, setProduct] = useState<Productos>()

    useEffect(() => {
        async function getProduct() {
            try {
              const product = await getProductById(ProductId);
              setProduct(product);
            } catch (error) {
              console.error("Error al obtener producto", error);
            }
          }
          getProduct();
    }, [ProductId])
    return {product}
}



