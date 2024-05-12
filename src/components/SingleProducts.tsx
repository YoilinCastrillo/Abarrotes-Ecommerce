import { Link } from "react-router-dom";

export default function SingleProduct({ product }: { product: Productos }) {
  return (
    <>
    <section>
        <h1>{product.nombre}</h1>
        <p>{product.marca}</p>
        <p>{product.precio}</p>
        <img src={product.imagen} alt={product.nombre} />
        <Link to={`/productos/${product.id}`}>
        <button type="button">Ver mas</button>
        </Link>
    </section>
    </>
  );
}