import { useParams } from "react-router-dom";
import usePutProducts from "../hooks/Products/usePutProducts";
import { Link } from 'react-router-dom';

export default function UpdateProductForm() {
  const { productId } = useParams<{ productId: string }>();

  if (!productId) {
    return null; 
  }

  const { register, onSubmit } = usePutProducts(productId);
  return (
    <div className="custom-bg-gray max-h-fit p-10">
      <form className="custom-max-w-sm mx-auto" onSubmit={onSubmit}>
        <div className="custom-col-span-2 sm:custom-col-span-1">
          <label htmlFor="nombre" className="custom-label">
            Nombre
          </label>
          <input
            type="text"
            {...register("nombre")}
            id="nombre"
            className="custom-input"
            required
          />
        </div>
        <div className="custom-col-span-2 sm:custom-col-span-1">
          <label htmlFor="marca" className="custom-label">
            Marca
          </label>
          <input
            type="text"
            {...register("marca")}
            id="marca"
            className="custom-input"
            required
          />
        </div>
        <div className="custom-col-span-2 sm:custom-col-span-1">
          <label htmlFor="precio" className="custom-label">
            Precio
          </label>
          <input
            type="number"
            {...register("precio")}
            id="precio"
            className="custom-input"
            required
          />
        </div>
        <div className="custom-col-span-2 sm:custom-col-span-1">
          <label htmlFor="imagen" className="custom-label">
            Imagen
          </label>
          <input
            type="text"
            {...register("imagen")}
            id="imagen"
            className="custom-input"
            required
          />
        </div>
        <div className="custom-col-span-2 sm:custom-col-span-1">
          <label htmlFor="descripcion" className="custom-label">
            Descripción
          </label>
          <textarea
            {...register("descripcion")}
            id="descripcion"
            className="custom-textarea"
            required
          ></textarea>
        </div>
        <section className="custom-gap mt-2">
          <button type="submit" className="custom-button">
            Guardar
          </button>
          <Link to={`/`}>
          <button type="button" className="custom-button">
            Cancelar
          </button>
          </Link>
        </section>
      </form>
    </div>
  );
}
