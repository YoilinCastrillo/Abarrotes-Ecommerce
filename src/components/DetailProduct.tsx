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
    <div>
      <h1>Id: {product?.id}</h1>
      <h1>Nombre: {product?.nombre}</h1>
      <h1>Marca: {product?.marca}</h1>
      <h1>Precio: {product?.precio}</h1>
      <h1>Imagen: {product?.imagen}</h1>
      <h1>Descripcion: {product?.descripcion}</h1>
    </div>
  );
};

export default DetailProduct;

