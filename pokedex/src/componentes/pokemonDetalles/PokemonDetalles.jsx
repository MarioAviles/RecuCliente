import { useLocation } from "react-router-dom";
import usePokemonDetalles from "../../hook/usePokemonDetalles";
import './PokemonDetalles.css';

const PokemonDetalles = () => {

    const location = useLocation().pathname;
    const id = location.split('/').pop();

    const {pokemonDetalles , buscando} = usePokemonDetalles(id);

    console.log(pokemonDetalles);

    if(buscando) {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Cargando...</h1>
                </div>
            </div>
        )
    } else  {

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="fondo">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="titulo">#{pokemonDetalles.id} {pokemonDetalles.nombre}</h1>
                            </div>
                            <div className="col-md-4">
                                <img className="imgPokemon" src={pokemonDetalles.imagen}/>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="descripcion">{pokemonDetalles.descripcion}</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <h4>Estadisticas:</h4>
                                        {/* comprobacion de que no estemos recibiendo un objeto vacio */}
                                        <ul className="listaStats">                            
                                            {pokemonDetalles.estadisticas && Array.isArray(pokemonDetalles.estadisticas) ? (
                                                pokemonDetalles.estadisticas.map((stat, index) => (
                                                    <li key={index}>{stat.nombre}: {stat.valor}</li>
                                                ))
                                            ) : (
                                                <li>No hay estadísticas disponibles</li>
                                            )}
                                        </ul>
                                    </div>
                                    <div className="col-md-12">
                                        <h4>Tipos:</h4>
                                        <ul className="listaStats">                            
                                            {pokemonDetalles.tipos && Array.isArray(pokemonDetalles.tipos) ? (
                                                pokemonDetalles.tipos.map((tipo, index) => (
                                                    <li key={index}>{tipo}</li>
                                                ))
                                            ) : (
                                                <li>No hay tipos disponibles</li>
                                            )}
                                        </ul>
                                    </div>
                                    <div className="col-md-2">
                                        <h5>Altura: {pokemonDetalles.altura/10} m</h5>
                                    </div>
                                    <div className="col-md-2">
                                        <h5>Peso: {pokemonDetalles.peso/10} kg</h5>
                                    </div>
                                    <div className="col-md-8">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokemonDetalles;
