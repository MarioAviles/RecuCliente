import Ordenacion from "../componentes/Ordenacion/Ordenacion";
import FiltroGenero from "../componentes/FiltroGenero/FiltroGenero";
import FiltroPlataforma from "../componentes/FiltroPlataforma/FiltroPlataforma";

const Selectores = (props) => {

    return (
        
        <section className="izquierda">
            <p className='tituloDestacado'>Ordenación</p>
            
            <Ordenacion orden = {props.ordenElegido}
                        manejarSeleccion = {props.manejarOrdenacion}>
            </Ordenacion>
            
            <p className='tituloDestacado'>Filtros</p>
            <FiltroGenero     genero={props.generoElegido} 
                              manejarSeleccion={props.manejarSeleccionGenero}>
            </FiltroGenero>
            <FiltroPlataforma plataforma = {props.plataformaElegida}
                              manejarSeleccion={props.manejarSeleccionPlataforma}>
            </FiltroPlataforma>            
        </section>        
    )

}
export default Selectores;