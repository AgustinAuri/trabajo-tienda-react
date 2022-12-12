import './App.css';
import Navbar from './NavBar/NavBar';
import ItemListContainer from './ItemLIstContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';


const App = () => {
  
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;