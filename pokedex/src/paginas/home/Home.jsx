import ListaPokemons from "../../componentes/listaPokemons/ListaPokemons";
import FiltroTipos from "../../componentes/filtroTipos/FiltroTipos";
import Limite from "../../componentes/limite/Limite";
import MostrarMas from "../../componentes/mostrarMas/MostrarMas";
import { useState } from "react";

const Home = () => {

    const [filtroTipos, setFiltroTipos] = useState();
    const [limite, setLimite] = useState(20);
    const [offset, setOffset] = useState(0);

    return (
        <div className="row">
            <div className="col-md-3">
                <h1>busqueda</h1>
                <FiltroTipos setFiltroTipos={setFiltroTipos}></FiltroTipos>
                <Limite setLimite={setLimite} setOffset={setOffset}></Limite>
            </div>
            <div className="col-md-9">
                <ListaPokemons filtroTipos={filtroTipos} limite={limite} offset={offset}></ListaPokemons>
                <MostrarMas limite={limite} setLimite={setLimite}></MostrarMas>
            </div>
        </div>
    )
}

export default Home;