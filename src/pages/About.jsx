import React from "react";
//import ImgBannerAbout from "../assets/image/about-background.png";
import Collapse from "../components/Collapse";
import AboutList from '../data/aboutList.json';
import AboutBanner from "../components/Bannerabout";


export default function About() {
	return (
		<>
			<AboutBanner />
			{AboutList.map((rule, id) => (
				<Collapse
					key={id}
					title={rule.title}
					content={rule.content}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}