import { useForm } from "react-hook-form"
import { createProduct} from "../services/Products"
import { useNavigate } from "react-router"


const AddForm = () => {

 const {register,handleSubmit}= useForm()
 const navigate = useNavigate()

 const OnSubmit = handleSubmit(async (data) => {
    const productData: Productos = JSON.parse(JSON.stringify(data))
    
    try {
        await createProduct(productData)
        navigate('/')
    } catch (error) {
        console.error('Error al obtener producto: ', error)
    }
 })


  return (
    <form onSubmit={OnSubmit}>  
    <div>
      <label htmlFor="idInput" className="form-label">Id</label>
      <input
        type="number"
        {...register('id')}
        className="form-control"
        id="idInput"
        name="id"
      />
    </div>
    <div>
      <label htmlFor="nombreInput" className="form-label">Nombre</label>
      <input
        type="text"
        {...register('nombre')}
        className="form-control"
        id="nombreInput"
        name="nombre"
      />
    </div>

    <div>
      <label htmlFor="marcaInput" className="form-label">Marca</label>
      <input
        type="text"
        {...register('marca')}
        className="form-control"
        id="marcaInput"
        name="marca"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="precioInput" className="form-label">Precio</label>
      <input
        type="number"
        {...register('precio')}
        className="form-control"
        id="precioInput"
        name="precio"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="imagenInput" className="form-label">Imagen URL</label>
      <input
        type="text"
        {...register('imagen')}
        className="form-control"
        id="imagenInput"
        name="imagen"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="descripcionInput" className="form-label">Descripción</label>
      <textarea
      {...register('descripcion')}
        className="form-control"
        id="descripcionInput"
        name="descripcion"
      />
    </div>
    <button type="submit" className="btn btn-primary">Crear Producto</button>
  </form>
  )
}

export default AddForm