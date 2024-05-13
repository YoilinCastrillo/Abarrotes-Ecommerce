
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
      if (!response.ok) throw new Error("Error al obtener productosz");
    } catch (error) {
      console.error("Error al hacer fetching: ", error);
      throw error;
    } finally {
      console.log("Fetching de productos finalizado");
    }
    try {
      const responseData: Productos = await response.json();
      return responseData;
    } catch (error) {
      console.error("Se produjo un error: ", error);
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
      console.error("Error al eliminar producto: ", error);
      throw error;
    } finally {
      console.log("Producto eliminado");
    }
  
    try {
      const responseData: Productos = await response.json();
      return responseData;
    } catch (error) {
      console.error("Se produjo un error", error);
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
      if (!response.ok) throw new Error("Error al actualizar el producto");
    } catch (error) {
      console.error("Error al actualizar el producto: ", error);
      throw error;
    } finally {
      console.log("Producto actualizado");
    }
  
    try {
      const responseData: Productos = await response.json();
      return responseData;
    } catch (error) {
      console.error("Se produjo un error", error);
      throw error;
    }
  }