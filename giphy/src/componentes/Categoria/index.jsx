import "./styles.css"
import { Route, Link } from 'wouter';

const Categoria = (props) => {

    function muestraCategoria(gif) {  
        return  <Link  className="enlace"
                       key = {gif.id} 
                       to  = {`/gif/${gif.id}`}>
                     {gif.title}
                </Link>
    }

    return(

        <div>
            <p className="titulo">{props.nombre}</p>
            <div className="entrada">{props.lista.map(muestraCategoria)}</div>
        </div>
    )

}


export default Categoria;