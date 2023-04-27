import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => (
  <>
    <NavBar />
    <header className="header--tienda center-text">
      <h1>Tienda Gráfica</h1>
    </header>
    <ItemListContainer greeting={"Bienvenido a la tienda gráfica de Yellow Cactus"}/>
  </>
)


export default App;
