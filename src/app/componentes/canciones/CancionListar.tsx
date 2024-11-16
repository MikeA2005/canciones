import { useState } from "react";
import { ARREGLO_CANCION } from "../../mocks/Cancion-mocks";
import { Cancion } from "../../modelos/Cancion";
import { ARREGLO_CANCION_GENERO } from "../../utilidades/dominios/DomGenero";

export const CancionListar = () => {
  const [arrCanciones] = useState<Cancion[]>(ARREGLO_CANCION);

  const nombreGenero = (valor: string) => {
    for (const objGenero of ARREGLO_CANCION_GENERO) {
      if (objGenero.codGenero == valor) {
        return objGenero.nombreGenero;
      }
    }
  };

  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No.</th>
                <th>Título Canción</th>
                <th>Cantante</th>
                <th>Género</th>
                <th>Imagen</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {arrCanciones.map((miCan: Cancion) => (
                <tr key={miCan.codCancion}>
                  <td>{miCan.codCancion}</td>
                  <td>{miCan.tituloCancion}</td>
                  <td>{miCan.cantanteCancion}</td>
                  <td>{nombreGenero(miCan.codGeneroCancion)}</td>
                  <td>
                    <img src={miCan.imagenCancionBase64} alt="" className="imagenListado"/>
                    <br />
                    {miCan.imagenCancion}
                  </td>
                  <td>
                    <a href="/canact/1">
                      <i className="fa-solid fa-pen-to-square" style={{ color: "#000080" }}></i>
                    </a>
                    &nbsp;
                    <i className="fa-solid fa-trash" style={{ color: "#000080" }}></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
