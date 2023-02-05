import React from "react"
import Item from "./Item.jsx"
import Carousel from "../Carousel.jsx"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import GetDataBase from "../hooks/GetDataBase.jsx"
import { GlobalContext } from "../../context/globalcontext.jsx";
import { useContext } from "react"
const ListaObjetos = () => {
  const {contador, setContador} = useContext(GlobalContext)
  setContador(1)
  const {stock, getProducts} = GetDataBase()
  const {categoria} = useParams()
  const {id} = useParams()
  const [productos, setProductos] = useState([])
  useEffect(() => {
  if (categoria) {
    getProducts().then(response => {
      let products = response.filter(stock => stock.categoria === categoria)
      setProductos(products)
    } )
  }
  else {
    getProducts().then(response => {
      setProductos(response)
    })
  }
  }, [categoria]);
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
