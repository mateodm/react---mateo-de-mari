import React from "react";
import carrito from "../carrito.png"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light mb-5">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">E-Commerce</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Electronica</a></li>
                            <li><a className="dropdown-item" href="#">Muebles</a></li>
                        </ul>
                    </li>
                    <li>
                    <div>
                        <a href="/carrito"><img class="img_carrito" src={carrito}/></a>
                    </div>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Producto" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav>
    )
}
export default Navbar