import React, { useContext } from "react"
import Loader from "../components/Loader"
import { ProductContext } from "../context/ProductContext"

const withLoader = (Component: any) => {
    return function WithLoaderComponent(props: any) {
        debugger
        const { loading } = useContext(ProductContext)
        if (loading) {
            return <Loader />
        }
        return <Component {...props} />
    }
}

export default withLoader;