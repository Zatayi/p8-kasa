import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import imgHomeBanner from "../assets/image/background-banner.png";

const Home = () => {
  return (
    <div className="home">
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <Gallery />
      </main>
    </div>
  );
};

export default Home;