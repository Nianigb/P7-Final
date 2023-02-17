import Header from "../../components/Header/Header";
import Collapse from '../../components/Collapse/Collapse';
import Banner from "../../components/Banner/Banner";
import banniere from "../../assets/images/banniere-aboutus.png";
import Footer from '../../components/Footer/Footer';

function AboutUs() {
    return (
        <>
            <Header />
            <Banner image={banniere} origin="aboutus-page" />
            <section className="about">
                <div className="about__container">
                    <Collapse
                        className="about__item"
                        title="Fiabilité"
                        description={
                            <p className="about__item-text">
                                Les annonces postées sur Kasa garantissent une
                                fiabilité totale. Les photos sont conformes aux
                                logements, et toutes les informations sont
                                régulièrement vérifiées par nos équipes.
                            </p>
                        }
                    />
                    <Collapse
                        className="about__item"
                        title="Respect"
                        description={
                            <p className="about__item-text">
                                La bienveillance fait partie des valeurs
                                fondatrices de Kasa. Tout comportement
                                discriminatoire ou de perturbation du voisinage
                                entraînera une exclusion de notre plateforme.
                            </p>
                        }
                    />
                    <Collapse
                        className="about__item"
                        title="Service"
                        description={
                            <p className="about__item-text">
                                Nos équipes se tiennent à votre disposition pour
                                vous fournir une expérience parfaite. N'hésitez
                                pas à nous contacter si vous avez la moindre
                                question.
                            </p>
                        }
                    />
                    <Collapse
                        className="about__item"
                        title="Sécurité"
                        description={
                            <p className="about__item-text">
                                La sécurité est la priorité de Kasa. Aussi bien
                                pour nos hôtes que pour les voyageurs, chaque
                                logement correspond aux critères de sécurité
                                établis par nos services. En laissant une note
                                aussi bien à l'hôte qu'au locataire, cela permet
                                à nos équipes de vérifier que les standards sont
                                bien respectés. Nous organisons également des
                                ateliers sur la sécurité domestique pour nos
                                hôtes.
                            </p>
                        }
                    />
                </div>
            </section>
            <Footer />
        </>

    );
}

export default AboutUs;