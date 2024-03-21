import React from "react";
import ImgBannerAbout from "../assets/image/about-background.png";
import Collapse from "../components/Collapse";
import AboutList from '../data/aboutList.json';
import AboutBanner from "../components/Bannerabout";


const About = () => {
  return (
    <div className="about">
      <main>
      <AboutBanner image={ImgBannerAbout} titre="" />
      
        <div className="collapse">
          <div className="collapse__dropdown">
            {AboutList.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;