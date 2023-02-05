import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/globalcontext.jsx";


const ItemCount = (item) => {
    const producto = item.item
    console.log(producto)
    const { addProduct, repeatProductCheck, contador, setContador, sumarCant, restarCant } = useContext(GlobalContext)
    return (
        <div class="d-flex">
            <p><img onClick={restarCant}className="menos-carrito me-2" src="../menos.png" alt="menos" style={{ width: '1.1rem' }}/> Cantidad: {contador} <img  onClick={() => sumarCant(producto.cantidad)} className="mas-carrito mx-2" src="../mas.png" alt="mas"style={{ width: '1.1rem' }}/></p>
            <button class="btn btn-primary mb-" onClick={() => addProduct(item, contador)}>
                Añadir al carrito
            </button>
        </div>
    )
}

export default ItemCount