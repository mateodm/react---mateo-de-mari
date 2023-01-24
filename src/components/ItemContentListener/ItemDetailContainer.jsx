import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import ConstructorProducto from './ItemDetailRender.jsx'
import GetDataBase from "../hooks/GetDataBase.jsx"
const DetallesProducto = () => {
    const {stock, getProducts} = GetDataBase()
    const [producto, setProducto] = useState([])
    const { id } = useParams()
    useEffect(() => {
        getProducts()
            let product = stock.find(productos => productos.id === parseInt(id))
            setProducto(product)
        }
    , [id]);
    return (
        <ConstructorProducto item={producto} />
    )
}

export default DetallesProducto