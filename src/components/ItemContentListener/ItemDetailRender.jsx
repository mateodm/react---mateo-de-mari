import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react"
import { GlobalContext } from "../../context/globalcontext.jsx"
import { useState} from "react"
const ConstructorProducto = (props) => {
    const { id, nombre, categoria, precio, img, descripcion, producto } = props
/*     const [goToCart, setGoToCart] = useState(false);
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct()
      }; */
    const {addProduct, cart} = useContext(GlobalContext)
    return ( 
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={img} alt="..." /></div>
                    <div class="col-md-6">
                        <div class="small mb-1"> {categoria} </div>
                        <h1 class="display-5 fw-bolder">{nombre}</h1>
                        <div class="fs-5 mb-5">
                            <span>{precio} ars</span>
                        </div>
                        <p class="lead">{descripcion}</p>
                        <div class="d-flex">
{/*                         goToCart
                        ?  ? <Link className="btn btn-primary" to="/cart">Terminar compra</Link>
                        : <ItemCount initial={1} stock={5} onAdd={onAdd}/> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConstructorProducto
