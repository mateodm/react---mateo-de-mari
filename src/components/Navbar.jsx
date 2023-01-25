import React from "react";
import carrito from "../carrito.png"
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar_background navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">E-Commerce React</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active link_center" aria-current="page" to={"//"}> Inicio </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><NavLink to="/categoria/Electronica"> Electronica</NavLink></li>
                                <li className="dropdown-item"><NavLink to="/categoria/Mueble"> Muebles</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <div>
                                <NavLink to="/carrito"> <img class="img_carrito" src={carrito} />  </NavLink>
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