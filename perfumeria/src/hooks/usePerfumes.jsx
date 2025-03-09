import { useEffect, useState } from "react";
import { getPerfumes } from "../servicios/getPerfumes";

const usePerfumes = () => {
    const [perfumes, setPerfumes] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerPerfumes() {
        setBuscando(true);

        getPerfumes().then(datos => {
            setPerfumes(datos);
            setBuscando(false);
        });
    }

    useEffect(obtenerPerfumes, [])

    return {perfumes, buscando};
}

export default usePerfumes;
