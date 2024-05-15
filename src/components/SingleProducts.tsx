import { Link } from "react-router-dom";
import '../App.css'

export default function SingleProduct({ product }: { product: Productos }) {
  return (
    <>
    <section className="TProducto">
        <img src={product.imagen}/>
        <h1>{product.nombre}</h1>
        <p>{product.marca}</p>
        <p>{product.precio}</p>
        
        <Link to={`/productos/${product.id}`}>
        <button className="ver-mas" type="button">Ver más</button>
        </Link>
    </section>
    </>
  );
}