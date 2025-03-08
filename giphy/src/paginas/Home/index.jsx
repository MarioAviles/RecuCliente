import BuscaGifsForm from '../../componentes/BuscaGifsForm';
import './styles.css';
import { useLocation} from "wouter";
import imagenLoader from '../../img/ajax-loader.gif';
import useGifs from '../../hooks/useGifs';
import AjaxLoader from '../../componentes/AjaxLoader';
import ListaGifs from '../../componentes/ListaGifs';
import LazyLoad from 'react-lazy-load';

import React, { Suspense, useCallback } from 'react';
const TrendingSearches = React.lazy( () => import('../../componentes/TrendingSearches'));

const Home = () => {

    const {buscando, listaGifs} = useGifs();  

    const [path, setLocation]= useLocation();

    // Esta función se envía al componente hijo como prop
    const manejarAccion = useCallback ( (keyword) => {

        console.log("valor componente hijo ", keyword);
        setLocation(`/search/${keyword}`)
        console.log(path);

    }, [setLocation]);


    return (
        <div>
            <div className="Home">
                <BuscaGifsForm manejarAccion={manejarAccion}></BuscaGifsForm>
            </div>
            <div className="Home alturaListaGifs">
                <p>Última búsqueda</p>
                {buscando 
                    ? <AjaxLoader loader={imagenLoader}></AjaxLoader> 
                    : <ListaGifs listaGifs={listaGifs}></ListaGifs>}
            </div>           
            <Suspense fallback={"Cargando trenddings"}>
            <LazyLoad offset={100}>
                <TrendingSearches></TrendingSearches>
            </LazyLoad>
            </Suspense>
            
        </div>
    
    )
}
export default Home;