import React from 'react'
import { useParams } from 'react-router-dom'

const DetallesProducto = () => {

    const { id, nombre, precio} = useParams()
    return (
        <h1>El producto ({id}) {nombre} {precio} ha sido cargado exitosamente. </h1>
    )
}

export default DetallesProducto