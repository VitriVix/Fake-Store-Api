import stilo from './App.module.css';
import ContenedorDeProductos from './componentes/ContenedorDeProductos';

function App() {
  return (
  <div>
      <h1 className={stilo.titulo} >Fake Store</h1>
      <ContenedorDeProductos />
  </div>
  )
}

export default App
