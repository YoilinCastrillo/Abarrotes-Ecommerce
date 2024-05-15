import { useParams } from "react-router";
import useGetProductById from "../hooks/Products/useGetProductById";
import { Link } from 'react-router-dom';
import Modal from "./Modal";
import { useState } from "react";


const DetailProduct = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { productId } = useParams<{
    productId: string;
  }>();

  if (!productId) {
    return <div></div>;
  }

  const { product } = useGetProductById(productId)

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="Detalles">
      <div className="Detalles2">
        <h2>Detalles</h2>
        <p>Id: {product?.id}</p>
        <p>Nombre: {product?.nombre}</p>
        <p>Marca: {product?.marca}</p>
        <p>Precio: {product?.precio}</p>
        <p>Descripcion: {product?.descripcion}</p>
        <Modal open={showModal} onClose={toggleModal}>
          <div>
          </div>
        </Modal>
        <div className="card">
          <button type="button" className="btnEliminar" onClick={toggleModal}>Eliminar</button>
          <Link to={`/update/${product?.id}`}>
            <button className="editar" type="button">Editar</button>
          </Link>
        </div>
      </div>
      <img className="ImageDetails" src={product?.imagen}/>
    </div>
  );
};

export default DetailProduct;
