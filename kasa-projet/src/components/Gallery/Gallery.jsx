import './Gallery.css';
import React from 'react'
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import logements from '../../assets/logements.json'


function Gallery() {
    return (
        <section className="cadre_gallery">
            {logements.map((logement) => (
                //Lien vers le logement en fonction de son id
                <Link key={logement.id} to={`/singleproduct/${logement.id}`}>
                    <Card
                        key={logement.id}
                        cover={logement.cover}
                        title={logement.title}
                    />
                </Link>
            ))}
        </section>
    );
};

// Ne pas oublier d'exporter le composant Gallery
export default Gallery;