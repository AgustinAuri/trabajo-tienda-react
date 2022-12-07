import './App.css';
import Navbar from './NavBar/NavBar';
import ItemListContainer from './ItemLIstContainer/ItemListContainer';
import ItemCount from './itemCount/itemCount';


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greenting={"hoola"}/>
      <ItemCount/>
    </>
  );
}

export default App;
