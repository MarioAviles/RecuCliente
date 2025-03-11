import { useEffect, useState } from "react";
import { getPokemonDetalles } from "../servicios/getPokemonDetalles";

const usePokemonDetalles = (id) => {
    const [pokemonDetalles, setPokemonDetalles] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerPokemonDetalles() {
        setBuscando(true);

        getPokemonDetalles({id: id}).then(datos => {
            setPokemonDetalles(datos);
            setBuscando(false);
        });
    }

    useEffect(obtenerPokemonDetalles, [])

    return {pokemonDetalles, buscando};
}

export default usePokemonDetalles;

