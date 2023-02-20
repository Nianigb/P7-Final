import './Error.css';
import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";

function Error() {
    return (
        <>
            <Header />
            <div className="not_found">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                {/* Hook de react-router pour naviguer vers une autre page */}
                <NavLink to="/">Retourner sur la page d’accueil</NavLink>
            </div>
            <Footer />
        </>

    );
}

export default Error;