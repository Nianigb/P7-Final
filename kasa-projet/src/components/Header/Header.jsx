// eslint-disable-next-line
import style from "./Header.css";
import pinkLogo from "../../assets/logo/kasa-logo-pink.svg";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div>
                <Link to="/">
                    <img
                        className="header_logo"
                        src={pinkLogo}
                        alt="Page d'accueil"
                    />
                </Link>
            </div>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => {
                        return isActive ? "activeLink" : "nonActiveLink";
                    }}
                >
                    Accueil
                </NavLink>
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