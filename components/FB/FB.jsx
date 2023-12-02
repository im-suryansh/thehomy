import React from "react";
import "../Banner/Banner.css";
import "./FB.css";
import { useTypewriter } from "react-simple-typewriter";

const FB = () => {
	const [text1] = useTypewriter({
		words: ["Perfection"],
		loop: {},
	});
	return (
		<div>
			<div className="container">
				<div className="text ">
					<h1>Personalised to {text1}</h1>
				</div>
				<div className="image">
					<img src="../../public/band.png" alt="" srcset="" />
				</div>
			</div>
		</div>
	);
};

export default FB;
