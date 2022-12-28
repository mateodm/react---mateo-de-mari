import React from "react"
import Item from "./Item.jsx"

const ListaObjetos = () => {

let stock = [
    { id: 1, categoria: "mueble", nombre: "Mesa", precio: "1000", img: "./logo.svg", },
    { id: 2, categoria: "mueble", nombre: "Silla", precio: "500", img: "./logo.svg", },
    { id: 3, categoria: "mueble", nombre: "Estante", precio: "800", img: "./logo.svg", },
    { id: 4, categoria: "electronica", nombre: "Televisor", precio: "2000", img: "./logo.svg", },
    { id: 5, categoria: "electronica", nombre: "Parlante", precio: "600", img: "./logo.svg", },
    { id: 6, categoria: "electronica", nombre: "Auriculares", precio: "300", img: "./logo.svg", }
  ]
return (
    <>
    {stock.map(({id, nombre, categoria, precio, img}) => (
    <Item id={id} nombre={nombre} categoria={categoria} precio={precio} img={img}/>
    ))}
    </>
)
}
export default ListaObjetos
