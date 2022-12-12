import { useState, useEffect } from "react";
import { consultarBDD } from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        consultarBDD().then(prodcutos => {
            const prod = prodcutos.find(product => product.id === 1)
            setProducto(prod)
        })

    }, []);
    
    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail producto={producto} />
        </div>
    );
}

export default ItemDetailContainer;
