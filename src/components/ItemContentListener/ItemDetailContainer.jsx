import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import ConstructorProducto from './ItemDetailRender.jsx'
import GetDataBase from "../hooks/GetDataBase.jsx"
const DetallesProducto = () => {
    const {getOneProduct} = GetDataBase()
    const [producto, setProducto] = useState([])
    const { id } = useParams()
    useEffect(() => {
        getOneProduct().then(response => {
            let oneProduct = response.filter(e => e.id === parseInt(id))
            setProducto(oneProduct)
        })
        }
    , [id]);
    return (
        <ConstructorProducto item={producto} />
    )
}

export default DetallesProducto