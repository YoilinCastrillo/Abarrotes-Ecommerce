import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGetAllProductsSearch from '../hooks/Products/useGetAllProductsSearch';
import SingleProduct from './SingleProducts';
import Products from './Products';

const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { filteredProducts } = useGetAllProductsSearch(searchTerm);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div>
     <Link to="/new">
     <button className="btn-agregar">Agregar producto</button>
    
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
