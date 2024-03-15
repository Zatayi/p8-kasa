import React from "react";
import Banner from "/components/Banner";
import Footer from "/components/Footer";
import Gallery from "../components/Gallery/Gallery";
import Header from "/components/Header";
import imgHomeBanner from "../assets/image/background-banner";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;