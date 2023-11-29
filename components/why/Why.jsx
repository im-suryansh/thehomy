import React from "react";
import "../Banner/Banner.css";
import { IoIosTimer } from "react-icons/io";
import { LiaUsersSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { GiHotMeal } from "react-icons/gi";
// import { Typewriter } from 'react-simple-typewriter'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import './Why.css'
const Why = () => {
	const [text2] = useTypewriter({
		words: ["Thehomy!"],
		loop: {},
	});
	return (
		<div className="container-fluid feature-section pt-md-5 ">
			<div className="row p-md-5">
				<div
					className="col-md-6 d-flex justify-content-center align-items-center flex-column"
					data-aos="fade-up"
					data-aos-easing="linear"
					data-aos-duration="1500"
				>
					<h2>
						WHICH ARE THE MOST IMPORTANT FEATURES OF{" "}
						<span style={{ color: "#c45254", fontWeight: "500" }}>
							Thehomy.
						</span>{" "}
					</h2>

					<p>
						Experience the next level of home care with The Homy's
						exceptional features. Enjoy personalized services with
						our pure vegetarian maids, carefully selected to align
						with your values. Our user-friendly app allows you to
						customize every aspect, from choosing caretakers based
						on your criteria to scheduling services effortlessly.
						Benefit from flexible durations, transparent pricing,
						and the convenience of personalized meal planning,
						ensuring each dish suits your taste.
					</p>
				</div>
				<div
					className="col-md-6 d-flex justify-content-center align-items-center flex-column "
					data-aos="fade-up"
					data-aos-easing="linear"
					data-aos-duration="1500"
				>
					<h1>
						Why go for{" "}
						<span style={{ color: "#c45254", fontWeight: "500" }}>
							{text2}
						</span>{" "}
					</h1>

					<div className="row d-flex justify-content-center align-items-center ">
						<div className="col-md-3 feature-icons  pt-3  d-md-flex align-items-center justify-content-center">
							<IoIosTimer className="fs-md-2 fs-1 pe-md-1" />
							Flexible Duration
						</div>
						<div className="col-md-3 feature-icons pt-3  d-md-flex align-items-center justify-content-center">
							{" "}
							<LiaUsersSolid className="fs-md-2 fs-1 pe-md-1" />
							Trusted Staff
						</div>
						<div className="col-md-3 feature-icons pt-3 d-md-flex align-items-center justify-content-center ">
							{" "}
							<BiSupport className="fs-md-2 fs-1 pe-md-1 " />
							Amazing Support
						</div>
						<div className="col-md-3 feature-icons pt-3  d-md-flex align-items-center justify-content-center">
							{" "}
							<GiHotMeal className="fs-md-2 fs-1 pe-md-1" />
							Personalized Meal Planning
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Why;
