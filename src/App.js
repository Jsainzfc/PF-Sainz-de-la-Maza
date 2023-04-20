import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';

const App = () => (
  <>
    <NavBar />
    <Hero title={"Tienda gráfica"}/>
    <ItemListContainer greeting={"Hola"}/>
  </>
)


export default App;
