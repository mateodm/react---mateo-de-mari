import React from "react"
import Item from "./Item.jsx"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
const ListaObjetos = () => {
  const [stock, setStock] = useState([])
  const {categoria} = useParams()
  const {id} = useParams()
  useEffect(() => {
    if(categoria) {
    fetch("../json/stock.json")
    .then((res) => res.json()).then(productos => {
      let productosCategoria = productos.filter(productos => productos.categoria === categoria)
      setStock(productosCategoria)
    })
    }
    else {
      fetch("./json/stock.json")
      .then((res) => res.json()).then((productos)=> setStock(productos))
     }
  }, [categoria]);
  return (
    <>
    <div className="row">
    <div className="col-md-2"></div>
    <div className="productos col-md-8">
    {stock.map(({id, nombre, categoria, precio, img}) => (
    <Item id ={id} nombre ={nombre} categoria = {categoria} precio ={precio} img ={img}/>
    ))}
    </div>
    <div className="col-md-2"></div>
    </div>

    </>
)
    }

export default ListaObjetos
