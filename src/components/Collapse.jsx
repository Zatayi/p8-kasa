import React, { useState, useRef, useEffect} from "react";
import Chevron from "../assets/image/down-chevron.png"

export default function Collapse(props) {
	const [toggle, setToggle] = useState(false); 
	const [heightEl, setHeightElement] = useState(); 

	const chevronState = () => {
		
		setToggle(!toggle);
	};

	const Height = useRef(); 

	useEffect(() => {
		setHeightElement(`${Height.current.scrollHeight}px`);
	}, []);

	return (
		
		<div className={`collapse ${props.aboutStyle}`}>
			<div onClick={chevronState} className="collapse__visible">
				<h2>{props.title}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron"
				/>
			</div>
			<div
				ref={Height}
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.content}</p>
			</div>
		</div>
	);
}