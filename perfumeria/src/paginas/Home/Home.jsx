import ListaPerfumes from "../../componentes/ListaPerfumes/ListaPerfumes"
import usePerfumes from "../../hooks/usePerfumes"

const Home = () => {

    const { perfumes, buscando } = usePerfumes();

    return (
        <div>
            <ListaPerfumes perfumes = {perfumes} buscando = {buscando}></ListaPerfumes>
        </div>
    )
}
export default Home;