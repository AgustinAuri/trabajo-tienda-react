import {useState} from 'react';
import { useDarkModeContext } from '../../context/DarkModerContext';
const ItemCount = ({inicial, stock, onAdd}) => {
    const {darkMode} = useDarkModeContext()
    
    const [contador, setContador] = useState (inicial);

    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)

    const agregarAlCarrito = () => onAdd(contador)

    return (
        <div>
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
                {contador}
            <button className='btn btn-dark' onClick={() => restar()}>-</button>
            <button className={`btn ${darkMode ? 'btn-primary' : 'btn-dark'}`} onClick={agregarAlCarrito}><i className="fas fa-cart-plus"></i></button>
        </div>
    );
}

export default ItemCount;
