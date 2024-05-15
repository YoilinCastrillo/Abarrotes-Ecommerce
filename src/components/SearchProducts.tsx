import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllProductsSearch, getAllProducts } from '../services/Products'; // Asumiendo que tienes una función para obtener todos los productos
import SingleProduct from './SingleProducts';
import Products from './Products';
import '../App.css'

const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allProducts, setAllProducts] = useState<Productos[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Productos[]>([]);

  useEffect(() => {
    // Cargar todos los productos al iniciar la página
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setAllProducts(products);
        setFilteredProducts(products); // Mostrar todos los productos al cargar la página
      } catch (error) {
        console.error("Error al obtener productos", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    try {
      if (term === '') {
        setFilteredProducts(allProducts); // Mostrar todos los productos si el término está vacío
      } else {
        const products = await getAllProductsSearch(term);
        setFilteredProducts(products);
      }
    } catch (error) {
      console.error("Error al obtener productos", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="inputsearch"
      />
       <div>
        <Link to="/new">
          <button className="btn-agregar">Agregar producto</button>

        </Link>
      </div>
      <section className='ContenedorProductos'>
        {filteredProducts?.map((productResult: Productos) => (



          <SingleProduct
            key={productResult.id}
            product={productResult}
          ></SingleProduct>
        ))}
      </section>
    </div>
  );
}

export default SearchProducts;
