import { useParams } from "react-router-dom";
import usePutProducts from "../hooks/Products/usePutProducts";

export default function UpdateProductForm() {
  const { productId } = useParams<{ productId: string }>();

  if (!productId) {
    return null; // O cualquier otra lógica que desees aplicar si productId no está disponible
  }

 const { register, onSubmit } = usePutProducts(productId);
  return (
    <div className="bg-gray-600 max-h-fit p-10">
      <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nombre
          </label>
          <input
            type="text"
            {...register("nombre")}
            id="nombre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="marca" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Marca
          </label>
          <input
            type="text"
            {...register("marca")}
            id="marca"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="precio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Precio
          </label>
          <input
            type="number"
            {...register("precio")}
            id="precio"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="imagen" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Imagen
          </label>
          <input
            type="text"
            {...register("imagen")}
            id="imagen"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Descripción
          </label>
          <textarea
            {...register("descripcion")}
            id="descripcion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
          ></textarea>
        </div>
        {/* Agrega más campos aquí según sea necesario */}
        <section className=" gap-2 mt-2">
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Guardar
          </button>
          <button
            type="button"
            onClick={() => {
              // Lógica para cancelar la edición o redirigir al usuario a otra página
            }}
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Cancelar
          </button>
        </section>
      </form>
    </div>
  );
}
