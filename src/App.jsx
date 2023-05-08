import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => (
  <>
    <NavBar />
    <header className="header--tienda center-text">
      <h1>Tienda Gráfica</h1>
    </header>
    <ItemListContainer greeting={"Bienvenido a la tienda gráfica de Yellow Cactus"}/>
    <ItemDetailContainer />
  </>
)


export default App;
