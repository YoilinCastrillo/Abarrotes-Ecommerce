import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateProduct } from "../../services/Products";
import useGetProductById from "./useGetProductById";


interface ProductFormData {
  id: number;
  nombre: string;
  marca: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

export default function usePutProduct(productId: string) {
  const { register, handleSubmit, setValue } = useForm<ProductFormData>();
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

  const onSubmit = handleSubmit(async (data: ProductFormData) => {
    try {
      await updateProduct(productId, data);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  });

  return { register, onSubmit };
}
