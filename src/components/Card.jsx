import React from "react"

const Card = (props) => {
    const {nombre, precio, img} = props;
    return (
        <div className="card" style="width: 18rem;">
            <img src={img} className="card-img-top" alt="..."> </img>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{precio}</p>
                    <a href="#" className="btn btn-primary">Añadir</a>
                </div>
        </div>
    )
}

export default Card