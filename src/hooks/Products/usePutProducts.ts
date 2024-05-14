import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateProduct } from "../../services/Products";
import useGetProductById from "./useGetProductById";
import { useNavigate } from "react-router"



export default function usePutProduct(productId: string) {
  const { register, handleSubmit, setValue } = useForm<Productos>();
  const { product } = useGetProductById(productId);
  const navigate = useNavigate()

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
      navigate('/product')
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  });

  return { register, onSubmit };
}
