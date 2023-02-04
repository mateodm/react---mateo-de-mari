import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <section className= "row bg-secondary"> 
            <footer className="bg-light text-black text-center text-md-start">
            <div className="row footertopbox">
            </div>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Muebles </h5>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                aliquam voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Categorias </h5>

                            <ul className="list-unstyled mb-0">
                                <li className="text-black link"><NavLink to = "/categoria/Electronica"> Electronica</NavLink></li>
                                <li className="link"><NavLink to = "/categoria/Mueble"> Muebles</NavLink></li>
                                <li>
                                    <a href="#!" className="text-black">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-black">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-0">Otros filtros</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!" className="text-black">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-black">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-black">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-black">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3">
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </section>
    )
}

export default Footer