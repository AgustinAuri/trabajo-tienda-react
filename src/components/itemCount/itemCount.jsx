import {useState} from 'react';

const ItemCount = () => {
    const [numero, setNumero] = useState (1);
    const sumar = () => setNumero(numero+1);
    const restar = () => setNumero(numero-1)
    return (
        <div>
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
            {numero}
            <button className='btn btn-dark' onAuxClick={() => restar()}>-</button>
        </div>
    );
}

export default ItemCount;
