import React from "react";
import { useContext } from "react"
import { GlobalContext } from "../context/globalcontext.jsx"
import { Link } from "react-router-dom";
import Checkout from "./ItemContentListener/Checkout.jsx"

const Cart = () => {
    const { cart, removeProduct } = useContext(GlobalContext)
    let precioTotal = 0
    cart.map((item) => {
        precioTotal += item.precio * item.cant
    })
    return (
        <div>
            {cart.length > 0 ? (
                cart.map((item) => (
                    <>
                        <div id="borrarProducto" className="row my-5">
                            <div className="col-md-1"> </div>
                            <div className="card col-md-10 mb-4">
                                <div className="card-body p-4">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                            <img className="carrito-imagen img-fluid" src={item.img} alt={item.nombre} />
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small text-muted mb-4 pb-2">Nombre</p>
                                                <p className="lead fw-normal mb-0">{item.nombre}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div data-bs-target="#foo">
                                                <p className="small text-muted mb-4 pb-2">Cantidad</p>
                                                <p id="cantidadP" className="lead fw-normal mb-0">{item.cant}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small text-muted mb-4 pb-2">Precio</p>
                                                <p className="lead fw-normal mb-0">{item.precio} ars</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <p className="small text-muted mb-4 pb-2">Categoria</p>
                                                <p className="lead fw-normal mb-0">{item.categoria}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center">
                                            <div>
                                                <button onClick={() => removeProduct(item.id)} className="btn btn-danger d-flex justifiy-content-center"> Borrar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))
                
    ) : (
        <div className="row align-items-center my-5">
            <div className="col-md-12 d-flex justify-content-center">
                <h3>El carrito esta vacio</h3>
            </div>
        </div>
    )
}   
        <div className="card col-md-12 mb-4">
            <div className="card-body p-4">
                <div className="row d-flex align-items-center justify-content-center">
                    <h3 className="texto">El precio total a pagar es de {precioTotal}</h3>
                    <button type="button" className="btn btn-primary checkout col-md-1  mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Checkout
                    </button>
                </div>
            </div>
        </div>
        <Checkout/>
        </div>
    );
}

export default Cart

