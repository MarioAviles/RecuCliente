import ListaGifs from "../../componentes/ListaGifs";
import imagenLoader from '../../img/ajax-loader.gif';
import AjaxLoader  from "../../componentes/AjaxLoader";
import useGifs from "../../hooks/useGifs";
import "./style.css";

import InfiniteScroll from 'react-infinite-scroll-component';

const ResultadosBusqueda = (props) => {

    const {buscando, listaGifs, setPage} = useGifs(props.params);    

    function obtenerSiguientePagina() {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <div className="Home">
            <InfiniteScroll
                dataLength={listaGifs.length}
                next={obtenerSiguientePagina}
                hasMore={true}
                loader={<AjaxLoader loader={imagenLoader}></AjaxLoader>}
            >
                <ListaGifs listaGifs={listaGifs}></ListaGifs>
            </InfiniteScroll>
        </div>
    )
}

export default ResultadosBusqueda;