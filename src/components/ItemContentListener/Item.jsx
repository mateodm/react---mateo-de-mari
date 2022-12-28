import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    const {id, nombre, categoria, precio} = props
    return (
    <div className="row">
        <Link to={`/item/${categoria}/${id}/${nombre}`}>
            <div className="col-md-4 me-4 mb-4" >
            <img src="../../carrito.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{precio}</p>
                    <a href="#" className="btn btn-primary">Ver detalles</a>
                </div>
            </div>
        </Link>
        </div> 
    )
}

export default Item


/* 
const Item = (props) => {
    const { categoria, id} = props;
        return (
            <Link to={`/item/${categoria}/${id}`}>
        )
} */