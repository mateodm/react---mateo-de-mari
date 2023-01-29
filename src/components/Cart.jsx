import React from "react";
import { Link } from "react-router-dom";
import { useContext} from "react"
import { GlobalContext } from "../../context/globalcontext.jsx"

const Cart = () => {
    const {cart} = useContext(GlobalContext)
    const { id, nombre, categoria, precio, img } = props
    cart.map((producto) => {
        return (
            <Link to={`/item/${id}`}>
                <div className="card ms-5 mb-3" style={{ width: '15rem' }} >
                    <img src={img} className="card-img-top card_img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">{producto.precio}</p>
                        <a href="#" className="btn btn-primary">Ver detalles</a>
                    </div>
                </div>
            </Link>
        )
    })

}

export default Item

