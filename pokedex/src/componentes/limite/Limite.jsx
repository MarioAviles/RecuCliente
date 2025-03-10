

const Limite = ({setLimite, setOffset}) => {

    function cambiarLimite(limite) {
        setLimite(limite.target.value);
    }

    function cambiarGeneracion(generacion) {
        const generacionSeleccionada = generacion.target.value;

        switch (generacionSeleccionada) {
            case "1":
                setOffset(0);
                setLimite(151);
                break;
            case "2":
                setOffset(151);
                setLimite(100);
                break;
            case "3":
                setOffset(251);
                setLimite(135);
                break;
            case "4":
                setOffset(386);
                setLimite(107);
                break;
            case "5":
                setOffset(493);
                setLimite(156);
                break;
            case "6":
                setOffset(649);
                setLimite(72);
                break;
            case "7":
                setOffset(721);
                setLimite(88);
                break;
            case "8":
                setOffset(809);
                setLimite(89);
                break;
            case "9":
                setOffset(898);
                setLimite(127);
                break;
            default:
                setOffset(0);
                setLimite(20);
        }
    }


    return (
        <div className="row">
            <div className="col-md-6">
                <h2>Limite</h2>
                <input type="number" onChange={cambiarLimite}></input>
                <h2>Generacion</h2>
                <select onChange={cambiarGeneracion}>
                    <option value="">Selecciona una generación</option>
                    <option value="1">Generación 1</option>
                    <option value="2">Generación 2</option>
                    <option value="3">Generación 3</option>
                    <option value="4">Generación 4</option>
                    <option value="5">Generación 5</option>
                    <option value="6">Generación 6</option>
                    <option value="7">Generación 7</option>
                    <option value="8">Generación 8</option>
                    <option value="9">Generación 9</option>
                </select>
            </div>
        </div>
    )
}

export default Limite;