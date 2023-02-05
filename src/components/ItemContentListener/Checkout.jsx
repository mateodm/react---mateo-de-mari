import React from "react";
const Checkout = () => {
    return (
        <>
            <div class="modal modal-xl fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Checkout</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid px-1 py-5 mx-auto">
                                <div class="row d-flex justify-content-center">
                                    <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                                        <h3>Checkout</h3>
                                        <div class="card">
                                            <form class="form-card" onsubmit="event.preventDefault()">
                                                <div class="row justify-content-between text-left">
                                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Nombre<span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Ingresa tu nombre aquí" onblur="validate(1)"/> </div>
                                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Apellido<span class="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Ingresa tu apellido aquí." onblur="validate(2)"/> </div>
                                                </div>
                                                <div class="row justify-content-between text-left">
                                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Documento de identidad<span class="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)"/> </div>
                                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Numero de teléfono<span class="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)"/> </div>
                                                </div>
                                                <div class="row justify-content-between text-left">
                                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Pais<span class="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder="" onblur="validate(5)"/> </div>
                                                </div>
                                                <div class="row justify-content-between text-left">
                                                    <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Correo electronico<span class="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/> </div>
                                                </div>
                                                <div class="row justify-content-end">
                                                    <div class="form-group col-sm-6"> <button class="btn btn-primary d-flex justify-content-center my-3" type="submit">Enviar</button> </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Checkout