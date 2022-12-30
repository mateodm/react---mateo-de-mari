import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect} from "react"
import ConstructorProducto from './ItemDetailConstructor.jsx'
import consultarBDD from "../funcion"
const DetallesProducto = () => {
    const [producto, setProducto] = useState([])
    const {id} = useParams()
    useEffect(() => {
        consultarBDD('../json/stock.json').then(productos=>{
        const product = productos.find(productos => productos.id === parseInt(id))
        setProducto(product)

        })
        }, [id]);
    return (
        <ConstructorProducto item= {producto} />
    )
}

export default DetallesProducto