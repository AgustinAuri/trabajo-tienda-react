import {Link} from "react-router-dom"

const CarWidget = () => {
    return (
        <>
            <button className="btn btn-dark carWidget">
                <Link to={'/cart'} className="nav-link">
                <i className="fas fa-shopping-cart fa-lg"></i>
                <samp className="cantCarrito">0</samp>
                </Link>

            </button>
        </>
    );
}

export default CarWidget;
