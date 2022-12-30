import React from "react"
import Item from "./Item.jsx"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
const ListaObjetos = () => {
  const [stock, setStock] = useState([])
  const {id} = useParams()
  useEffect(() => {
    fetch("./json/stock.json")
    .then((res) => res.json()).then((productos)=> setStock(productos))
    }, [id]);
  return (
    <>
    {stock.map(({id, nombre, categoria, precio, img}) => (
    <Item id ={id} nombre ={nombre} categoria = {categoria} precio ={precio} img ={img}/>
    ))}
    </>
)
    }

export default ListaObjetos
