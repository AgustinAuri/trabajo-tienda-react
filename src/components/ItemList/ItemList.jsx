import Item from "../Item/Item";

const ItemList = ({productList}) => {
    return (
        <div>
            {productList.map(producto => <Item key={producto.id} prod={producto}/>)}
        </div>
    );
}

export default ItemList;
