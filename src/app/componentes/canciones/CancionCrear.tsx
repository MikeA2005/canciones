export const CancionCrear = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation">
            <div className="col-md-6 position-relative">
              <label htmlFor="validationTooltip01" className="form-label">
                Título canción
              </label>
              <input
                type="text"
                className="form-control border-info"
                id="titu"
                name="titu"
                required
              />
            </div>

            <div className="col-md-6 position-relative">
              <label htmlFor="validationTooltip02" className="form-label">
                Cantante
              </label>
              <input
                type="text"
                className="form-control border-info"
                id="cant"
                name="cant"
                required
              />
            </div>

            <div className="col-md-6 position-relative">
              <label
                htmlFor="validationTooltip03"
                className="form-label border-info"
              >
                Duración
              </label>
              <input
                type="text"
                className="form-control border-info"
                id="dura"
                name="dura"
                required
              />
            </div>

            <div className="col-md-6 position-relative">
              <label
                htmlFor="validationTooltip04"
                className="form-label border-info"
              >
                Género
              </label>
              <select
                className="form-select border-info"
                id="gene"
                name="gene"
                required
              >
                <option selected disabled value="">
                  Seleccione el género
                </option>
                <option>Salsa</option>
                <option>Vallenato</option>
                <option>Champeta</option>
                <option>Reguetón</option>
                <option>Pop</option>
              </select>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Registrar canción
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
