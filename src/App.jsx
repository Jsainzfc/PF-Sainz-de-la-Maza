import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path='/' element={<ItemListContainer greeting={"Todos los productos"} />} />
      <Route exact path='/category/:id' element={<ItemListContainer greeting={"Productos de la categoría: "} />} />
      <Route exact path='/item/:id' element={<ItemDetailContainer />} />
    </Routes>
  </BrowserRouter>
)


export default App;
