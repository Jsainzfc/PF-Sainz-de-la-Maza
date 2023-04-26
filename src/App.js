import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';

const App = () => (
  <>
    <NavBar />
    <Hero title={"Tienda gráfica"}/>
    <ItemListContainer greeting={"Bienvenido a la tienda gráfica de Yellow Cactus"}/>
  </>
)


export default App;
