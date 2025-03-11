import imagenPortada from '../../assets/portada.avif'
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <img src={imagenPortada} alt="" />
        </div>
    )
}
export default Home;