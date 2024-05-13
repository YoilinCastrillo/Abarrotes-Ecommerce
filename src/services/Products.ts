
export async function getAllProducts() {
    let response;
    try {
      response = await fetch(
        `https://${
          import.meta.env.VITE_API_URL
        }.mockapi.io/Abarrotes`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) throw new Error("Error al obtener productos");
    } catch (error) {
      console.error("Error al hacer fetching: ", error);
      throw error;
    } finally {
      console.log("Fetching de productos finalizado");
    }
  
    try {
      const responseData: Productos[] = await response.json();
      return responseData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  export async function createProduct(
    PostProduct: Productos
  ) {
    let response;
    try {
      response = await fetch(
        `https://${
          import.meta.env.VITE_API_URL
        }.mockapi.io/Abarrotes`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(PostProduct),
        }
      );
      if (!response.ok) throw new Error("Error al crear producto");
    } catch (error) {
      console.error("Error: ", error);
      throw error;
    } finally {
      console.log("Creación de producto finalizada");
    }
  
    try {
      const responseData: Productos = await response.json();
      return responseData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  export async function getProductById(productId: string) {
    let response;
    try {
      response = await fetch(
        `https://${
          import.meta.env.VITE_API_URL
        }.mockapi.io/Abarrotes/${productId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) throw new Error("Error to get product");
    } catch (error) {
      console.error("Error occurred while fetching product: ", error);
      throw error;
    } finally {
      console.log("Finished fetching product");
    }
    try {
      const responseData: Productos = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error occurred while parsing response: ", error);
      throw error;
    }
  }

  export async function deleteProduct(productId: number) {
    let response;
    try {
      response = await fetch(
        `https://${
          import.meta.env.VITE_API_URL
        }.mockapi.io/Abarrotes${productId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) throw new Error("Error deleting product");
    } catch (error) {
      console.error("Error occurred while deleting product: ", error);
      throw error;
    } finally {
      console.log("Finished deleting product");
    }
  
    try {
      const responseData: Productos = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error occurred while parsing response: ", error);
      throw error;
    }
  }

  export async function updateProduct(
    productId: string,
    updatedProduct: Productos
  ) {
    let response;
    try {
      response = await fetch(
        `https://${
          import.meta.env.VITE_API_URL
        }..mockapi.io/Abarrotes/${productId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProduct),
        }
      );
      if (!response.ok) throw new Error("Error updating product");
    } catch (error) {
      console.error("Error occurred while updating product: ", error);
      throw error;
    } finally {
      console.log("Finished updating product");
    }
  
    try {
      const responseData: Productos = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error occurred while parsing response: ", error);
      throw error;
    }
  }