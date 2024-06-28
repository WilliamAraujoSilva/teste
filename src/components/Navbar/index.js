import { Link } from "react-router-dom"
import './style.css'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="item-navbar" to="/">Home</Link>
            <Link className="item-navbar" to="/pokedex">Pokédex</Link>
            <Link className="item-navbar" to="/legendaries">Lendarios</Link>
            <Link className="item-navbar" to="/documentation">Documentação</Link>
        </nav>
    )
}

