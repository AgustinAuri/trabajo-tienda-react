import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
      <section className="container-fluid">
        <article className="row mx-5 mt-3">
          <div className="col-xs-12 col-md-12 col-lg-6">
            <h5 className="text-center main__titulo--2">¿Tiene alguna pregunta o quiere mostrarle amor a Snoop Dogg?</h5>
            <form>
              <div className="form-floating mb-3">
                <input type="name" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Nombre</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label letra__formulario">Escribe tus comentarios</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
              </div>
              <div className="d-grid d-md-flex justify-content-md-center my-3">
                <button className="btn  mx-auto letra__formulario btn-primary" type="submit">Enviar Formulario</button>
                <button className="btn  mx-auto letra__formulario btn-primary" type="reset">Borrar Formulario</button>
              </div>
            </form>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-6">
            <img className="img-fluid ocultar" src="../recursos/snoop-contenido1.jpg" />
          </div>
        </article>
      </section>
    );
  }

export default Contact;
