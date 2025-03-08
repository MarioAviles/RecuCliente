import Gif from "../Gif";
import "./styles.css";

const ListaGifs = (props) => {

    // Función encargada de llamar al componente Gif con el gif
    // que recibe como parámetro implícito de la función map
    function muestraGif(gif) {  
        return <Gif  key   = {gif.id} 
                     title = {gif.title} 
                     url   = {gif.url}
                     id    = {gif.id}>                    
                </Gif>;
    }
    return (
        <div className="ListaGifs">
            {props.listaGifs.map(muestraGif)}
        </div>
  
    )
}

export default ListaGifs;