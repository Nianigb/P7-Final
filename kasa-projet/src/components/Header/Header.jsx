import "./Header.css";
import pinkLogo from "../../assets/logo/kasa-logo-pink.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div>
                {/* Lorsqu'on clique sur le logo du site, on est dirigé vers la page Home */}
                <Link to="/">
                    <img
                        className="header_logo"
                        src={pinkLogo}
                        alt="Page d'accueil"
                    />
                </Link>
            </div>
            <nav>
                {/* Redirection vers la page Home */}
                <NavLink
                    to="/"
                    // On vérifie sur le lien vers la page Home doit être actif ou non
                    className={({ isActive }) => {
                        return isActive ? "activeLink" : "nonActiveLink";
                    }}
                >
                    Accueil
                </NavLink>
                {/* Redirection vers la page About us */}
                <NavLink
                    to="/about"
                    className={({ isActive }) => {
                        return isActive ? "activeLink" : "nonActiveLink";
                    }}
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;