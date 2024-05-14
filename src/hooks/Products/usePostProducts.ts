import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { createProduct, getAllProducts } from '../../services/Products'

export default function usePostProducts() {
    const { register, handleSubmit, setValue } = useForm()
    const [nextProductId, setNextProductId] = useState(0)
    
    useEffect(() => {
        async function fetchNextProductId() {
            const allProducts = await getAllProducts()
            setNextProductId(Math.max(...allProducts.map(product => product.id)) + 1)
        }
        fetchNextProductId()
    }, [])

    useEffect(() => setValue('id', nextProductId), [nextProductId, setValue])

    const OnSubmit = handleSubmit(async data => {
        try {
            await createProduct(data.categoryId)
        } catch (error) {
            console.error('Ha ocurrido un error:', error)
        }
    })

    return { register, OnSubmit, nextProductId }
}