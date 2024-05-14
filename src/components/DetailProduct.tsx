import { useParams } from "react-router";
import useGetProductById from "../hooks/Products/useGetProductById";



const DetailProduct = () => {
  const { productId } = useParams<{
    productId: string;
  }>();

  if (!productId) {
    return <div></div>;
  }

  const { product } = useGetProductById(productId)

  return (
    <div className="Detalles">
     
      <div className="Detalles2"> 
        <h2>Detalles</h2>
        <p>Id: {product?.id}</p>
        <p>Nombre: {product?.nombre}</p>
        <p>Marca: {product?.marca}</p>
        <p>Precio: {product?.precio}</p>
        <p>Descripcion: {product?.descripcion}</p>
        <button className="eliminar" type="button">Eliminar</button>
      </div>
      <img src="{product?.imagen}" alt="" />
     

    </div>
  );
};

export default DetailProduct;