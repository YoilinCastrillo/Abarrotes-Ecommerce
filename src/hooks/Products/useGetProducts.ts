import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/Products";


export function useGetProduts() {
  const [filteredProducts, setFilteredProducts] = useState<Productos[]>([]);
  const [loading, setLoading] = useState(false)

  //FUNCION PARA LLAMAR "AL SERVICIO MOSTRAR TODO"
  useEffect(() => {
    setLoading(false);
    async function getProducts() {
      try {
        const productsResult = await getAllProducts()
        setFilteredProducts(productsResult);
        setLoading(true);
      } catch (error) {
        console.error("Error al renderizar producto", error);
      }
    }
    getProducts();
  }, []);
  
  return {filteredProducts};
}