import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/Products";

// Función para obtener productos filtrados por término de búsqueda
async function getFilteredProducts(searchTerm: string) {
    const allProducts = await getAllProducts(); // Obtener todos los productos
    return allProducts.filter(product => 
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// HOOK PARA OBTENER TODOS LOS PRODUCTOS Y FILTRARLOS POR BÚSQUEDA
export default function useGetAllProductsSearch(searchTerm: string) {
    const [filteredProducts, setFilteredProducts] = useState<Productos[]>([]);

    useEffect(() => {
        async function fetchFilteredProducts() {
            try {
                const products = await getFilteredProducts(searchTerm); // Obtener productos filtrados
                setFilteredProducts(products);
            } catch (error) {
                console.error("Error al obtener productos", error);
            }
        }

        fetchFilteredProducts();
    }, [searchTerm]);

    return { filteredProducts };
}
