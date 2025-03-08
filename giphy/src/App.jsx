import './App.css';
import { Route} from 'wouter';
import Home from './paginas/Home';
import ResultadosBusqueda from './paginas/ResultadosBusqueda';
import Detalle from './paginas/Detalle';
import Logo from './componentes/Logo';
function App() {

  return (
    <div className="App">
      <section className="App-content">
      <Logo></Logo> 
      <Route
          component={Home}
          path="/">
      </Route>

      <Route
          component={ResultadosBusqueda}
          path="/search/:keyword">
      </Route>

      <Route 
          component={Detalle}
          path="/gif/:id">
      </Route>

      </section>
    </div>
  );
}

export default App;
