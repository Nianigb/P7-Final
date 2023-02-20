import React, { useState } from "react";
import "./Carrousel.css";
import fleche from "../../assets/icons/arrow.svg";

function Carrousel({ images }) {
    // Crée un Hook d'état
    let [imgAfficher, changerImg] = useState(0);
    // Nombre d'image = le nombre totale des images d'un logement
    let nombreImg = images.length;

    // On vérifie si on doit retourner l'image précédente suivant sa position sur le nombre d'image au total
    const imgPrecedente = () => {
        if (imgAfficher === 0) {
            changerImg(nombreImg - 1);
        } else {
            changerImg(imgAfficher - 1);
        }
        return (changerImg);
    };

    // On vérifie si on doit retourner l'image suivante
    const imgSuivante = () => {
        if (imgAfficher === nombreImg - 1) {
            changerImg(nombreImg = 0);
        } else {
            changerImg(imgAfficher + 1);
        }
        return (changerImg);
    };

    return (
        <div className="carrousel">
            {
                nombreImg > 1 && <img className="fleche fleche-gauche" src={fleche} alt="Contenu précédent" onClick={imgPrecedente} />
            }
            {
                images.map((image, index) => {
                    return (
                        <img key={index} className={index === imgAfficher ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement" />
                    )
                })
            }
            {
                // Affiche la position de l'image par rapport au nombre d'images disponibles affichées
                <p className="carrousel-nombre">
                    {imgAfficher+1}/{nombreImg}
                </p>
            }
            {
                nombreImg > 1 && <img className="fleche fleche-droite" src={fleche} alt="Contenu suivant" onClick={imgSuivante} />
            }
        </div>
    );
}

export default Carrousel;