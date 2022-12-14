import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <button className=" btn btn-dark"><Link className="nav-link" to={"/"}>Home</Link></button>
            </li>
            <li className="nav-item">
                <button className=" btn btn-dark"><Link className="nav-link" to={"/category/1"}>Tv</Link></button>
            </li>
            <li className="nav-item">
                <button className=" btn btn-dark"><Link className="nav-link" to={"/category/2"}>Celular</Link></button>
            </li>
            <li className="nav-item">
                <button className=" btn btn-dark"><Link className="nav-link" to={"/category/3"}>Notebook</Link></button>
            </li>
            <li className="nav-item">
                <button className=" btn btn-dark"><Link className="nav-link" to={"/category/4"}>Auriculares</Link></button>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Contactanos</a>
            </li>
        </ul>
        </div>
    );
}

export default Categorias;
