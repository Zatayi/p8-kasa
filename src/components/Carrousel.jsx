import { useState } from "react";
import left from "../assets/image/leftarrow.png";
import right from "../assets/image/rightarrow.png";

export default function Carrousel({ slides }) {
	const [current, setCurrent] = useState(0); 
	const length = slides.length; 

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); 
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); 
	};

	return (
		<section id="carrousel-container">
			{length > 1 && (
				<img
					src={left} 
					alt="gauche"
					onClick={prevSlide}
					className="leftArrow"
				/>
			)}
			{length > 1 && (
				<img
					src={right}
					alt="droite"
					onClick={nextSlide}
					className="rightArrow"
				/>
			)}
			{slides.map((slide, index) => (
				<div
					key={index} 
					className={
						current === index
							? "slider-active-anim"
							: "slider-inact"
					}
				>
					{index === current && <img src={slide} alt="appartement en location" />}
					{length > 1 && index === current && (
						<span className="slider__number">	
						{current + 1}/{length}
						</span>
					)}
				</div>
			))}
		</section>
	);
}