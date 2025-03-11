import ListaPokemons from "../../componentes/listaPokemons/ListaPokemons";
import FiltroTipos from "../../componentes/filtroTipos/FiltroTipos";
import Limite from "../../componentes/limite/Limite";
import MostrarMas from "../../componentes/mostrarMas/MostrarMas";
import FiltroNombre from "../../componentes/filtroNombre/FiltroNombre";
import AñadirPokemon from "../../componentes/añadirPokemon/AñadirPokemon";
import { use, useState } from "react";
import usePokemons from "../../hook/usePokemons";

const Home = () => {

    const [filtroTipos, setFiltroTipos] = useState();
    const [limite, setLimite] = useState(20);
    const [offset, setOffset] = useState(0);
    const [filtroNombres, setFiltroNombres] = useState('');

    const [nuevosPokemons, setNuevosPokemons] = useState([]);

    function manejarNuevoPokemon(pokemon) {

        // Le asigno el ID a la nota
        pokemon.id = nuevosPokemons.length + limite + 1;
    
        // Añadimos el coche a la lista de coches
        setNuevosPokemons([...nuevosPokemons, pokemon]);
    } 

    return (
        <div className="row">
            <div className="col-md-3">
                <h1>busqueda</h1>
                <FiltroTipos setFiltroTipos={setFiltroTipos}></FiltroTipos>
                <Limite setLimite={setLimite} setOffset={setOffset}></Limite>
                <FiltroNombre setFiltroNombres={setFiltroNombres}></FiltroNombre>
                <AñadirPokemon manejarNuevoPokemon={manejarNuevoPokemon}></AñadirPokemon>
            </div>
            <div className="col-md-9">
                <ListaPokemons nuevosPokemons={nuevosPokemons} filtroTipos={filtroTipos} limite={limite} offset={offset} filtroNombres={filtroNombres}></ListaPokemons>
                <MostrarMas limite={limite} setLimite={setLimite}></MostrarMas>
            </div>
        </div>
    )
}

export default Home;