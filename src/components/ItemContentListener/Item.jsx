import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    const {id, nombre, categoria, precio, img} = props
    return (
    <div className="row ms-2 row-cols-1 row-cols-md-3 g-4">
        <Link to={`/item/${id}`}>
        <div className="col">
            <div className="card col-md-4 me-4 mb-4" >
            <img src={img} className="card-img-top card_img" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{precio}</p>
                    <a href="#" className="btn btn-primary">Ver detalles</a>
                </div>
            </div>
            </div>
        </Link>
    </div> 
    )
}

export default Item


