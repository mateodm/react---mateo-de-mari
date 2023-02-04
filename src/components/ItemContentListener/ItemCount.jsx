import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/globalcontext.jsx";


const ItemCount = (item) => {
    const { addProduct } = useContext(GlobalContext)
    return (
        <div class="d-flex">
            <button class="btn-primary" onClick={() => addProduct(item)}>
                Añadir al carrito
            </button>
        </div>
    )
}

export default ItemCount