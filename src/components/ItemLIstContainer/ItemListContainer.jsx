import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { consultarBDD } from "../../assets/funciones";

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);
    const {category} = useParams()
    
    useEffect(() => {
      if(category){
        consultarBDD('../json/productos.json').then(products => {
          const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
          console.log(productsList)
          const cardProductos = ItemList({productsList}) 
console.log(cardProductos)
           setProductos(cardProductos)  
          
      })
      }else{
        consultarBDD('./json/productos.json').then(products => {
          const productsList= products.filter(prod => prod.stock > 0)
          console.log(productsList)
        const cardProductos = ItemList({productsList}) 
console.log(cardProductos)
     setProductos(cardProductos) 

      })
      }


  }, [category]);

    return (

          <div className="row cardProductos">
              {productos}      
            </div> 

    );
}

export default ItemListContainer;
