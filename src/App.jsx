import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Checkout from './components/Checkout';

const App = () => {
  const [categories, setCategories] = useState([])

  useEffect (() => {
    const db = getFirestore();

    const categoriesCollection = collection(db, "categories")
    getDocs(categoriesCollection)
    .then((snapshot) => {
      setCategories (snapshot.docs.map(category => ({id: category.id, ...category.data()})))
    })
    .catch (err => console.error(err))
  }, [])

  return (
    <>
      {categories.length > 0
      ? 
        <BrowserRouter>
          <NavBar categories={categories}/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer greeting={"Todos los productos"} />} />
            <Route exact path='/category/:id' element={<ItemListContainer greeting={"Productos de la categoría: "} />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      : <div id="loading"></div>
      }
    </>
  )}

export default App;
