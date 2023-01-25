import React from "react"
import Item from "./Item.jsx"
import Carousel from "../Carousel.jsx"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import GetDataBase from "../hooks/GetDataBase.jsx"
const ListaObjetos = () => {
  const {stock, getProducts} = GetDataBase()
  const {categoria} = useParams()
  const {id} = useParams()
  const [productos, setProductos] = useState([])
  useEffect(() => {
    getProducts()
    if (categoria) {
      getProducts()
          let productosCategoria = stock.filter(productos => productos.categoria === categoria) 
          setProductos(productosCategoria)
    }
    else {
      getProducts()
      let productos = stock
      setProductos(productos)
    }}, [categoria]);
  return (
    <>
      <main className="background py-4">
        <Carousel />
        <div className="row">
          <div className="col-md-2"></div>
          <div className="productos col-md-8">
            {productos.map(({ id, nombre, categoria, precio, img }) => (
              <Item id={id} nombre={nombre} categoria={categoria} precio={precio} img={img} />
            ))}
          </div>
          <div className="col-md-2"></div>
        </div>
      </main>
    </>
  )
}

export default ListaObjetos
