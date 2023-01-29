import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import ConstructorProducto from './ItemDetailRender.jsx'
import GetDataBase from "../hooks/GetDataBase.jsx"
const DetallesProducto = () => {
    const [producto, setProducto] = useState([])
    const {getOneProduct} = GetDataBase()
    const { id } = useParams()
    useEffect(() => {
        getOneProduct().then(response => {
            let oneProduct = response.filter(e => e.id === parseInt(id))
            setProducto(oneProduct)
        })
        }
    , [id]);
    if(producto.length === 1) {
    return (
        <>
              {producto.map(({producto, id, nombre, categoria, precio, img, descripcion }) => (
                <ConstructorProducto producto={producto} id={id} nombre={nombre} categoria={categoria} precio={precio} img={img} descripcion={descripcion}/>
              ))}
      </>
    )
    }
}

export default DetallesProducto