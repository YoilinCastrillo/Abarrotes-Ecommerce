import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateProduct } from "../../services/Products";
import useGetProductById from "./useGetProductById";



export default function usePutProduct(productId: string) {
  const { register, handleSubmit, setValue } = useForm<Productos>();
  const { product } = useGetProductById(productId);

  useEffect(() => {
    if (product) {
      setValue("id", product.id);
      setValue("nombre", product.nombre);
      setValue("marca", product.marca);
      setValue("precio", product.precio);
      setValue("imagen", product.imagen);
      setValue("descripcion", product.descripcion);
    }
  }, [product, setValue]);

  const onSubmit = handleSubmit(async (data: Productos) => {
    try {
      await updateProduct(productId, data);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  });

  return { register, onSubmit };
}
