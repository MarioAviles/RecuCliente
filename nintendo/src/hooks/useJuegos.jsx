import { useEffect, useState } from "react";
import { getJuegos } from "../servicios/getJuegos";

const useJuegos = () => {
    const [juegos, setJuegos] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerJuegos() {
        setBuscando(true);

        getJuegos().then(datos => {
            setJuegos(datos);
            setBuscando(false);
        });
    }

    useEffect(obtenerJuegos, [])

    return {juegos, buscando};
}

export default useJuegos;
