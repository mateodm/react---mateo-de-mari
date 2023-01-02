import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    const {id, nombre, categoria, precio, img} = props
    return (
        <Link to={`/item/${id}`}>
            <div className="card ms-5 mb-3"style={{width: '15rem'}} >
            <img src={img} className="card-img-top card_img" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{precio}</p>
                    <a href="#" className="btn btn-primary">Ver detalles</a>
                </div>
            </div>
        </Link>
    )
}

export default Item


