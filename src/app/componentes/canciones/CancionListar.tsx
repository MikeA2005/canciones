export const CancionListar = () => {
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
                <th>Duración</th>
                <th>Género</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>La noche</td>
                <td>Joe Arroyo</td>
                <td>4.5</td>
                <td>Salsa</td>
                <td>
                  <a href="/canact/1">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#000080" }}
                    ></i>
                  </a>
                  &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#000080" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mi ex tenía razón</td>
                <td>Karol G</td>
                <td>3.5</td>
                <td>Reguetón</td>
                <td>
                  <a href="/canact/2">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#000080" }}
                    ></i>
                  </a>
                  &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#000080" }}
                  ></i>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Sin medir distancia</td>
                <td>Diomedes Díaz</td>
                <td>4.8</td>
                <td>Vallenato</td>
                <td>
                  <a href="/canact/3">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#000080" }}
                    ></i>
                  </a>
                  &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#000080" }}
                  ></i>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>My Immortal</td>
                <td>Evanescence</td>
                <td>4.3</td>
                <td>Rock</td>
                <td>
                  <a href="/canact/4">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#000080" }}
                    ></i>
                  </a>
                  &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#000080" }}
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
