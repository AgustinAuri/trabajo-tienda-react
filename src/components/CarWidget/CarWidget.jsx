import {Link} from "react-router-dom"
import { useCarritoContext } from "../../context/CarritoContex";

const CarWidget = () => {
    const {getItemQuantity} = useCarritoContext() 

    return (
        <>
            <button className="btn btn-dark carWidget">
                <Link to={'/cart'} className="nav-link">
                <i className="fas fa-shopping-cart fa-lg"></i>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
                </Link>

            </button>
        </>
    );
}

export default CarWidget;
