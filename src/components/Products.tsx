import { Link } from 'react-router-dom';
import { useGetProduts } from '../hooks/Products/useGetProducts';
import SingleProduct from './SingleProducts';
import '../App.css'
import Pagination from './Pagination';

const Products = () => {
  const {filteredProducts} = useGetProduts()
  
  return (
  <div>
    <div>
      <Link to="/new">
        <button >
          Agregar producto
        </button>
      </Link>
    </div>
    <section className='ContenedorProducto' >{}
      {filteredProducts?.map((productResult: Productos) => (
        <SingleProduct
          key={productResult.id}
          product={productResult}
        ></SingleProduct>
      ))}
    </section>
  </div>
  )
}

export default Products