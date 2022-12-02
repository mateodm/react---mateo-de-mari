import React from "react"

const Card = (props) => {
    const {id, nombre, precio, img} = props;
    return (
        <div className="card col-md-4 me-4 mb-4" style={{width:"20vw"}}>
            <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{precio}</p>
                    <a href="#" className="btn btn-primary">Añadir</a>
                </div>
        </div>
    )
}



export default Card