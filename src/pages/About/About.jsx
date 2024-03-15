import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import imgBannerAbout from "./assets/image/about-background.png";
import Collapse from "./collapse/Collapse";
import Collapsejson from "./datas/collapses.json";

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={imgBannerAbout} titre="" />

        <div className="collapse">
          <div className="collapse__dropdown">
            {Collapsejson.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;