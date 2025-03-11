import './MostrarMas.css';
import InfiniteScroll from 'react-infinite-scroll-component';

const MostrarMas = ({setLimite , limite}) => {

    function mostrarMas() {
        setLimite(limite + 20);
    }

    // Con paginacion
    return (
        <div className='row'>
            <div className='col-md-12 mostrarMas'>
                <button className="botonMostrarMas" onClick={mostrarMas}>Mostrar mas</button>
            </div>
        </div>
    )
    
    // Con infinite scroll
    // return (
    //     <InfiniteScroll
    //         dataLength={limite}
    //         next={mostrarMas}
    //         hasMore={true}
    //         loader={<h4>Cargando...</h4>}
    //         endMessage={
    //             <p style={{ textAlign: 'center' }}>
    //                 <b>Lo has visto todo, dúchate</b>
    //             </p>
    //         }
    //     >
    //     </InfiniteScroll>
    // );
}

export default MostrarMas;