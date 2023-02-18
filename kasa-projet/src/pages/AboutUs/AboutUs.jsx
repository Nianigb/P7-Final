import Header from "../../components/Header/Header";
import Collapse from '../../components/Collapse/Collapse';
import Banner from "../../components/Banner/Banner";
import banniere from "../../assets/images/banniere-aboutus.png";
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from "react";
import useBrowserWidth from "../../assets/js/useBrowserWidth";

function AboutUs() {
    const dimension = useBrowserWidth();
    const [fontSizeTitle, setfontSizeTitle] = useState();
    const [fontSizeContent, setfontSizeContent] = useState();
    const bannerHeight = 223;
    const [objectPosition, setObjectPosition] = useState();
    const [padding, setPadding] = useState();

    useEffect(() => {

        if (dimension >= 476) {
            setfontSizeTitle(24);
            setfontSizeContent(24);
            setPadding("10.8rem");
        } else if (dimension < 476) {
            setfontSizeTitle(13);
            setfontSizeContent(12);
            setPadding("4rem");
        }

        if (dimension <= 390) {
            setObjectPosition("0px 0px");
            setPadding("0");
        }

    }, [dimension]);
    return (
        <>
            <Header />
            <Banner
                image={banniere}
                origin="aboutus-page"
                height={bannerHeight}
                objectPosition={objectPosition} />
            <section className="about">
                <div className="about__container" style={{ 'padding-left': padding, 'padding-right': padding }}>
                    <Collapse
                        className="about__item"
                        titre="Fiabilité"
                        description={
                            <p className="about__item-text">
                                Les annonces postées sur Kasa garantissent une
                                fiabilité totale. Les photos sont conformes aux
                                logements, et toutes les informations sont
                                régulièrement vérifiées par nos équipes.
                            </p>
                        }
                        fontSizeTitle={fontSizeTitle}
                        fontSizeContent={fontSizeContent}
                    />
                    <Collapse
                        className="about__item"
                        titre="Respect"
                        description={
                            <p className="about__item-text">
                                La bienveillance fait partie des valeurs
                                fondatrices de Kasa. Tout comportement
                                discriminatoire ou de perturbation du voisinage
                                entraînera une exclusion de notre plateforme.
                            </p>
                        }
                        fontSizeTitle={fontSizeTitle}
                        fontSizeContent={fontSizeContent}
                    />
                    <Collapse
                        className="about__item"
                        titre="Service"
                        description={
                            <p className="about__item-text">
                                Nos équipes se tiennent à votre disposition pour
                                vous fournir une expérience parfaite. N'hésitez
                                pas à nous contacter si vous avez la moindre
                                question.
                            </p>
                        }
                        fontSizeTitle={fontSizeTitle}
                        fontSizeContent={fontSizeContent}
                    />
                    <Collapse
                        className="about__item"
                        titre="Sécurité"
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
                        fontSizeTitle={fontSizeTitle}
                        fontSizeContent={fontSizeContent}
                    />
                </div>
            </section>
            <Footer />
        </>

    );
}

export default AboutUs;