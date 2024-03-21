import BannerHome from "../assets/image/Mask Group.png";

export default function Banner() {
	return (
		<div className="banner-container">
			<img src={BannerHome} className="banner-container" alt="Logo" />
			<div className="banner-text-container">
				<div className="banner-text">Chez vous, partout et ailleurs</div>
			</div>
		</div>
	);
}

