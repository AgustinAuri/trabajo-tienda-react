import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { DarkModeProvider } from '../context/DarkModerContext';

import Navbar from './NavBar/NavBar';
import ItemListContainer from './ItemLIstContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Contact from './contact/contact';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element = {<ItemListContainer/>}/>
            <Route path='/product/:id' element = {<ItemDetailContainer/>}/>
            <Route path='/category/:category' element = {<ItemListContainer/>}/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/checkout' element = {<Checkout/>}/>
            <Route path='/contact' element = {<Contact/>}/>
          </Routes>
        </DarkModeProvider>

      </BrowserRouter>
    </>
  );
}

export default App;