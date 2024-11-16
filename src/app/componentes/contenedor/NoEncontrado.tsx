import { NavLink } from "react-router-dom";

export const NoEncontrado = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Error 404</h1>
          <p className="col-md-8 fs-4">
            Página No Encontrada
          </p>
          <NavLink className="btn btn-primary btn-lg" type="button" to="/">
            Ir al Inicio
          </NavLink>
        </div>
      </div>
    </>
  );
};
