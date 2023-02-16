// eslint-disable-next-line
import style from './Gallery.css';
import React from 'react'
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import logements from '../../assets/logements.json'


function Gallery() {
    return (
        <section className="gallery_wrapper">
            {logements.map((logement) => (
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

export default Gallery;