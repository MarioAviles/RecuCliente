import { useEffect, useState } from "react";
import usePokemons from "../../hook/usePokemons";
import Pokemon from "../pokemon/Pokemon";

const ListaPokemons = ({filtroTipos , limite, offset , filtroNombres , nuevosPokemons}) => {

    const {pokemons , buscando} = usePokemons(limite , offset);
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    function mostrarPokemons() {
        let result = pokemons;

        if(filtroTipos && filtroTipos !== ""){
            result = result.filter(pokemon => pokemon.tipos.includes(filtroTipos));
        } else if(filtroNombres && filtroNombres !== ""){
            result = result.filter(pokemon => pokemon.nombre.includes(filtroNombres));
        }

        if(nuevosPokemons && nuevosPokemons.length > 0){
            result = [...result, ...nuevosPokemons];
        }

        setFilteredPokemons(result);
    };

    useEffect(mostrarPokemons, [pokemons, filtroTipos, filtroNombres, nuevosPokemons]);

    return (
        <div className="row">
            {buscando ? (
                <p>Cargando...</p>
            ) : (
                filteredPokemons.map(pokemon => (
                    <Pokemon
                        key={pokemon.id}
                        id={pokemon.id}
                        nombre={pokemon.nombre}
                        imagen={pokemon.imagen}
                        tipos={pokemon.tipos}
                    />
                ))
            )}
        </div>
    )
}

export default ListaPokemons;