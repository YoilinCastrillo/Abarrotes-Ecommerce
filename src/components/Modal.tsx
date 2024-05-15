import { FC, ReactElement } from "react";
import { deleteProduct } from "../services/Products";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';



interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactElement;
}

export default function Modal(props: ModalProps): ReturnType<FC> {
    const { productId } = useParams<{
        productId: string;
    }>();

    const handleDeleteProduct = async () => {
        try {
            const productIdNumber = parseInt(productId);
            if (isNaN(productIdNumber)) {
                throw new Error("El ID del producto no es un número válido");
            }
      
            await deleteProduct(productIdNumber);
            console.log("Producto eliminado exitosamente");
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    };

    return (
        <div className={`${"modal"} ${props.open ? "display-block" : "display-none"}`}>
            <div className="modal-main">
                <div className="modal-head">
                    <h1>¿Desea eliminar el producto?</h1>
                </div>
                <div className="modal-body">
                    {props.children}
                    <Link to={`/`}>
                    <button type="button" className="btnEliminar" onClick={handleDeleteProduct}>Eliminar</button>
                    </Link>
                    <button type="button" className="btnClose" onClick={props.onClose}>Cerrar</button>
                </div>
                <div className="btn-container">
                </div>
            </div>
        </div>
    );
}
