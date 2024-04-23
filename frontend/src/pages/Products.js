import { useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useProductsContext } from "../hooks/useProductsContext"

import AllProducts from "../components/AllProducts"

export default function Products(){

    const { products, dispatch } = useProductsContext()
    const { user }  = useAuthContext()

    useEffect(() => {

        async function fetchProducts(){
            const response = await fetch('/api/products/all' , {
                headers : {
                    'Authorization' : `Bearer ${user.token}`
                }
            })

            const jsonData = await response.json()

            if(response.ok){
                dispatch({type: 'SET_PRODUCTS', payload : jsonData})
            }
        }

        if(user){
            fetchProducts()
        }

    }, [dispatch,user])

    return (
        <div className="productpage">
            <h1>Our Products</h1>
            <div className="productpage-products">
                {products && products.map((item) => (
                    <AllProducts
                        key = {item._id}
                        product = {item}
                    />
                ))}
            </div>
        </div>
    )
}