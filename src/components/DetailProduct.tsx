import { useParams } from "react-router";
import { useProductsContext } from "../context/ProductsContext"; 
import ProductsProvider from "../context/ProductsProvider"; 
import useGetProductById from "../hooks/Products/useGetProductById";



const DetailProduct = () => {
  const { productId: productIdFromParams } = useParams<{ productId: string }>();
  const { ProductId: productIdFromContext } = useProductsContext();

  const productId = productIdFromParams || productIdFromContext;
  const{product} = useGetProductById(productId)
  console.log(product)
////
  return (
    <ProductsProvider>
      <div>{productId}</div>
    </ProductsProvider>
  );
};

export default DetailProduct;