import { useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useProductsContext } from "../hooks/useProductsContext"

import HomePageProducts from "../components/HomePageProducts"

export default function Home(){

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
        <div className="homepage">
            <h1>Welcome to CraftsConnect</h1>
            <div className="homepage-products">
                {products && products.map((item) => (
                    <HomePageProducts
                        key = {item._id}
                        product = {item}
                    />
                ))}
            </div>
        </div>
    )
}