import React from "react";
import carrito from "../carrito.png"
import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { GlobalContext } from "../context/globalcontext.jsx"
const Navbar = (props) => {
    const {cart} = useContext(GlobalContext)
    return (
        <nav className="navbar navbar_background navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">E-Commerce</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active link_center text-white" aria-current="page" to={"/"}> Inicio </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item"><NavLink to="/categoria/Electronica"> Electronica</NavLink></li>
                                <li className="dropdown-item"><NavLink to="/categoria/Mueble"> Muebles</NavLink></li>
                            </ul>
                        </li>
                        <div><NavLink to="/carrito"> <img className="img_carrito" src= "../pngegg.png"/>  </NavLink></div>
                    <div id="contador" className="contador"> {cart.length} </div>
                        <li>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}
export default Navbar