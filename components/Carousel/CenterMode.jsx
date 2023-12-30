import "./CenterMode.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", color: "orange", background: "black" }}
//       onClick={onClick}
//     />
//   );
// }

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "black" }}
			onClick={onClick}
		/>
	);
}
export default class CenterMode extends Component {
	constructor(props) {
		super(props);
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
	}
	play() {
		this.slider.slickPlay();
	}
	pause() {
		this.slider.slickPause();
	}
	render() {
		const settings = {
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "30px",
			slidesToShow: 3,
			speed: 1000,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						// dots: true
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
			],

			// nextArrow: <SampleNextArrow />,
			// prevArrow: <SamplePrevArrow />
		};

		return (
			<div className="cards">
				<h1
					data-aos="fade-bottom"
					data-aos-easing="linear"
					data-aos-duration="500"
				>
					Our Services
				</h1>
				<h2
					data-aos="fade"
					data-aos-easing="linear"
					data-aos-duration="500"
				>
					“Single price Triple Service”
				</h2>
				<Slider {...settings}>
					<div>
						<img src="../public/Dustguard.png" alt="" />
					</div>
					<div>
						<img src="../public/hygiene.png" alt="" />
					</div>
					<div>
						<img src="../public/KitchenKing.png" alt="" />
					</div>
					<div>
						<img src="../public/NN.png" alt="" />
					</div>
					<div>
						<img src="../public/Dustguard.png" alt="" />
					</div>
					<div>
						<img src="../public/hygiene.png" alt="" />
					</div>
					<div>
						<img src="../public/KitchenKing.png" alt="" />
					</div>
					<div>
						<img src="../public/NN.png" alt="" />
					</div>
				</Slider>
			</div>
		);
	}
}
