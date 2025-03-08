import useTrendings from "../../hooks/useTrending";
import imagenLoader from '../../img/ajax-loader.gif';
import AjaxLoader  from "../../componentes/AjaxLoader";
import Categoria from "../Categoria";

const TrendingSearches = () => {

    const {buscando, listaGifs} = useTrendings();
    
    return (

        <div className="Home">
            {buscando 
                ? <AjaxLoader loader={imagenLoader}></AjaxLoader> 
                : <Categoria nombre ="Trendings" lista={listaGifs}></Categoria> }
        </div>
    )
}

export default TrendingSearches;