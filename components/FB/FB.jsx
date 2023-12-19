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
				<div className="fimage">
					<div>
						<div className="top">
						<img src="../../public/Looksselection.svg" alt="" srcset="" />
						<img src="../../public/genderselection.svg" alt="" srcset="" />
						<img src="../../public/ageselection.svg" alt="" srcset="" />
						</div>
					</div>
					<div className="bottom">
					<img src="../../public/dailyfoodselection.svg" alt="" srcset="" />
					<img src="../../public/flexibletimings.svg" alt="" srcset="" />
					<img src="../../public/vnvsec.svg" alt="" srcset="" />

					</div>
				</div>
			</div>
		</div>
	);
};

export default FB;
