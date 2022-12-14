import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './NavBar/NavBar';
import ItemListContainer from './ItemLIstContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<ItemListContainer/>}/>
          <Route path='/product/:id' element = {<ItemDetailContainer/>}/>
          <Route path='/category/:category' element = {<ItemListContainer/>}/>
          <Route path='/cart' element = {<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;