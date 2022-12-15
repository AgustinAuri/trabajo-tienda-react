import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div>
            <h1>Imagen Producto</h1>
            <button className="btn btn-dark"><Link className="botonFinalizar" to ={'/checkout'}>Finalizar compra</Link></button>
        </div>
    );
}

export default Cart;
