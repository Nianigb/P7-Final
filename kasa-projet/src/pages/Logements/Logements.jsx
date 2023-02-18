import React from "react";
import "./Logements.css";
import { useParams, Navigate } from 'react-router-dom';
import logements from "../../assets/logements.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import Error from "../Error/Error";
import Tag from "../../components/Tag/Tag";
import EtoileRouge from "../../assets/icons/EtoileRouge.svg";
import EtoileGrise from "../../assets/icons/EtoileGrise.svg";
import Collapse from "../../components/Collapse/Collapse";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Logements() {
    /* Récupère le bon logement */
    const id = useParams();
    const produits = logements.find(logement => logement.id === id.id);
    if (produits === undefined) {
        console.log("Aucun produit trouvé");
        return <Error />
    } else {
        console.table(produits);
    }

    /* Tags */
    const tagsLogement = produits?.tags.map((tags, index) => {
        return <Tag key={index} nom={tags} />
    });

    /* Notes */
    let noteLogement = [];
    let etoileComplete = true;
    for (let index = 0; index < 5; index++) {
        if (index === parseInt(produits?.rating)) {
            etoileComplete = false;
        }
        if (etoileComplete === true) {
            noteLogement.push(<img key={index} className="etoile" src={EtoileRouge} alt={`${produits?.rating}/5`} />)
        } else {
            noteLogement.push(<img key={index} className="etoile" src={EtoileGrise} alt={`${produits?.rating}/5`} />)
        }
    }

    /* Équipements */
    const equipementsLogement = produits?.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

    return (
        <>
            <Header />
            {
                produits ? (
                    <div className="produits">
                        <Carrousel images={produits?.pictures} />
                        <div className="logements-propietaire">
                            <div className="information-logements">
                                <span className="titre-logement">{produits?.title}</span>
                                <span className="endroit-logement">{produits?.location}</span>
                                <div className="tags">
                                    {tagsLogement}
                                </div>
                            </div>
                            <div className="proprietaire-note">
                                <div className="information-propietaire">
                                    <span className="nom-proprietaire">{produits?.host.name}</span>
                                    <img className="photo-propietaire" src={produits?.host.picture} alt="Propriétaire" />
                                </div>
                                <div className="note">
                                    {noteLogement}
                                </div>
                            </div>
                        </div>
                        <div className="description-equipements">
                            <Collapse titre="Description" description={produits?.description} />
                            <Collapse titre="Équipements" description={equipementsLogement} />
                        </div>
                    </div>
                ) : <Navigate replace to="/404" />
            }
            <Footer />
        </>
    )
}

export default Logements;