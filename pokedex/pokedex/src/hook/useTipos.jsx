import { useEffect, useState } from "react";
import { getTipos } from "../servicios/getTipos";

const useTipos = () => {
    const [tipos, setTipos] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerTipos() {
        setBuscando(true);

        getTipos().then(datos => {
            setTipos(datos);
            setBuscando(false);
        });
    }

    useEffect(obtenerTipos, [])

    return {tipos, buscando};
}

export default useTipos;