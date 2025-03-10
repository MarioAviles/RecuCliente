import usePokemons from "../../hook/usePokemons";
import Pokemon from "../pokemon/Pokemon";

const ListaPokemons = ({filtroTipos , limite, offset}) => {

    const {pokemons , buscando} = usePokemons(limite , offset);


    function mostrarPokemons(pokemon){

        if(filtroTipos && filtroTipos !== ""){
            if(pokemon.tipos.find(tipo => tipo === filtroTipos)){
                return <Pokemon
                    key={pokemon.id}
                    id={pokemon.id}
                    nombre={pokemon.nombre}
                    imagen={pokemon.imagen}
                    tipos={pokemon.tipos}>
                </Pokemon>
            }
        } else {
            return <Pokemon
                key={pokemon.id}
                id={pokemon.id}
                nombre={pokemon.nombre}
                imagen={pokemon.imagen}
                tipos={pokemon.tipos}>
            </Pokemon>
        }
    }

    return (
        <div className="row">
            {buscando ? (
                <p>Cargando...</p>
            ) : (
                pokemons.map(mostrarPokemons)
            )}
        </div>
    )
}

export default ListaPokemons;