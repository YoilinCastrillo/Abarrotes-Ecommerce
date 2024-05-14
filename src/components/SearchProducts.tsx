import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProductsSearch } from '../services/Products';
import '../App.css'


const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Productos[]>([]);

  const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    try {
      const products = await getAllProductsSearch(term);
      setFilteredProducts(products);
    } catch (error) {
      console.error("Error al obtener productos", error);
    }
  };

  return (
    <div>
      <div>
        <Link to="/new">
          <button>Agregar producto</button>
        </Link>
      </div>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <section className='ContenedorProducto'>
        {filteredProducts?.map((productResult: Productos) => (
          <div key={productResult.id} className="producto">
            <h3>{productResult.nombre}</h3>
            <p>Precio: {productResult.precio}</p>
            {productResult.marca !== undefined && (
              <p>Stock: {productResult.descripcion}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default SearchProducts;
