import { useEffect, useState } from "react";
import { getJuegos } from "../servicios/getJuegos";

const useJuegos = () => {
    const [juegos, setJuegos] = useState([]);

    function obtenerJuegos() {

        getJuegos().then(datos => {
            setJuegos(datos);
        });
    }

    useEffect(obtenerJuegos, [])

    return {juegos};
}

export default useJuegos;
