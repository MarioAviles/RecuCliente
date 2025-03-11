import { Link } from 'react-router-dom'
import './Menu.css'


const Menu = () => {
    return (
        <div className='menu'>
            <Link to="/" className='apartado'>
                Home
            </Link>
            <Link to="/capitulos" className='apartado'>
                Capítulos
            </Link>
            <Link to="/personajes" className='apartado'>
                Personajes
            </Link>
            <Link to="/planetas" className='apartado'>
                Planetas
            </Link>
        </div>
    )
}
export default Menu;