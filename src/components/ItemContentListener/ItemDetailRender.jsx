import React from "react";
import { Link } from "react-router-dom";

const ConstructorProducto = ({item}) => {
    return(
        <section class="py-5">
<div class="container px-4 px-lg-5 my-5">
    <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={item.img} alt="..." /></div>
        <div class="col-md-6">
        <div class="small mb-1"> {item.categoria} </div>
            <h1 class="display-5 fw-bolder">{item.nombre}</h1>
            <div class="fs-5 mb-5">
                <span>{item.precio} ars</span>
            </div>
            <p class="lead">{item.descripcion}</p>
            <div class="d-flex">
                <button class="btn btn-outline-dark flex-shrink-0" type="button">
                    <i class="bi-cart-fill me-1"></i>
                    Agregar al carrito
                </button>
            </div>
        </div>
    </div>
</div>
</section>
    )
}

export default ConstructorProducto
