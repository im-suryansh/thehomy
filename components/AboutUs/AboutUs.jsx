import React from "react";
import "./AboutUs.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutUs = () => {
	return (
		<div>
			<div className="first"></div>
			<div className="firstdata">
				<h1
					data-aos="fade"
					data-aos-easing="linear"
					data-aos-duration="600"
				>
					Who we are?
				</h1>
				<p
					data-aos="fade"
					data-aos-easing="linear"
					data-aos-duration="500"
				>
					Welcome to Thehomy, your trusted partner in redefining home
					care. We are a dedicated team committed to enriching your
					daily life by providing tailored and expert services. At
					Thehomy, we believe that a home is more than just a physical
					space; it's a haven where cherished moments unfold. Our
					mission is to make your home life seamless, joyful, and
					personalized to your unique preferences. From skilled maids
					and caretakers to expert cleaning services, we offer a
					comprehensive range of solutions designed to elevate your
					living experience. Join us in creating a home that reflects
					your values and brings comfort to every corner. Discover the
					difference with Thehomy where care meets customization for a
					happier home life.
				</p>
			</div>
			<div className="second"></div>
			<div className="second-container">
				<div className="seconddata">
					<h1
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="400"
					>
						Core values
					</h1>
					<p>
						<h3
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="300">Customer-Centric:</h3>
						<p
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="500">
							We prioritize your satisfaction, tailoring our
							services to your unique needs and preferences. Your
							happiness is our ultimate goal.
						</p>
						<h3
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="300">Integrity:</h3>
						<p
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="500">
							Trust is the foundation of our relationship. We
							operate with transparency, honesty, and a commitment
							to ethical practices in all our interactions.
						</p>
						<h3
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="300">Excellence in Service:</h3>
						<p
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="500">
							We strive for excellence in every aspect of our
							service delivery, from the professionalism of our
							staff to the quality of care we provide to your
							home.
						</p>
						<h3
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="300">Innovation:</h3>
						<p
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="500">
							Embracing innovation, we continually seek new and
							improved ways to enhance your home care experience,
							leveraging technology and creative solutions.
						</p>
						<h3
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="300">Empathy and Respect:</h3>
						<p
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="500">
							We approach every engagement with empathy and
							respect, recognizing the diverse needs and
							backgrounds of our clients and staff.
						</p>
						<h3
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="300">Security and Safety:</h3>
						<p
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="500">
							Your safety and security are non-negotiable. We
							uphold the highest standards in vetting, privacy
							protection, and secure transactions to ensure your
							peace of mind
						</p>
						<h3
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="300">Commitment to Sustainability:</h3>
						<p
						data-aos="fade"
						data-aos-easing="linear"
						data-aos-duration="500">
							We are committed to eco-friendly practices,
							promoting sustainability in our services to
							contribute to a healthier environment for all.
						</p>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
