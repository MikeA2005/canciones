import joearroyo from "../../../assets/img/joearroyo.jpg"
import silvestredangond from "../../../assets/img/silvestredangond.jpg"
import luister from "../../../assets/img/luister.jpg"
import juanluis from "../../../assets/img/juanluis.jpg"

export const Inicio = () => {
    return (
        <>
            <div className="card" style={{ width: "18rem"}}>
                <img src={joearroyo} alt="JOE ARROYO"/>
                <div className="card-body">
                    <h5 className="card-title">Artista #1</h5>
                    <p className="card-text">JOE ARROYO</p>
                </div>
            </div>

            <div className="card" style={{ width: "18rem"}}>
                <img src={silvestredangond} alt="SILVESTRE DANGOND"/>
                <div className="card-body">
                    <h5 className="card-title">Artista #2</h5>
                    <p className="card-text">SILVESTRE DANGOND</p>
                </div>
            </div>

            <div className="card" style={{ width: "18rem"}}>
                <img src={luister} alt="LUISTER LA VOZ"/>
                <div className="card-body">
                    <h5 className="card-title">Artista #3</h5>
                    <p className="card-text">LUISTER LA VOZ</p>
                </div>
            </div>

            <div className="card" style={{ width: "18rem"}}>
                <img src={juanluis} alt="JUAN LUIS GUERRA" />
                <div className="card-body">
                    <h5 className="card-title">Artista #4</h5>
                    <p className="card-text">JUAN LUIS GUERRA</p>
                </div>
            </div>
        </>
    );
}