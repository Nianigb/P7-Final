import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import banniere from '../../assets/images/banniere-home.png';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner image={banniere} text={"Chez vous, partout et ailleurs"} origin="home-page" />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default Home;