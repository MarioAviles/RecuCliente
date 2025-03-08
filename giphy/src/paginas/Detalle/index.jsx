import React from "react";

import './styles.css'
import Gif from "../../componentes/Gif";
import useGif from "../../hooks/useGif";
import imagenLoader from '../../img/ajax-loader.gif';
import AjaxLoader  from "../../componentes/AjaxLoader";

const Detalle = (props) => {

    const {buscando, gif} = useGif(props.params.id);
    
    return (
        <div>
            {buscando 
                ? <AjaxLoader loader={imagenLoader}></AjaxLoader> 
                : <Gif  key   = {gif.id} 
                        title = {gif.title} 
                        url   = {gif.url}
                        id    = {gif.id}>                    
           </Gif>}
        </div>
    )
}

export default Detalle;