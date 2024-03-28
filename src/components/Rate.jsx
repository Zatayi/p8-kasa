import starempty from "../assets/image/star-inactive.png";
import starfull from "../assets/image/star-active.png";

export default function Rate({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate-comp">
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={starfull}
						alt="rating"
					/>
                    ) : (
					<img
						key={level.toString()}
						className="star"
						src={starempty}
						alt="rating"
					/>
                    )
			)}
		</div>
	);
}