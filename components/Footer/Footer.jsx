import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import {
	MDBFooter,
	MDBContainer,
	MDBIcon,
	MDBInput,
	MDBCol,
	MDBRow,
	MDBBtn,
} from "mdb-react-ui-kit";
import "./Footer.css";
export default function App() {
	return (
		<>
			<MDBFooter className="text-center" color="white" bgColor="black">
				<div className="footer-logo">
					<Link to="/">
						<img src=".././public/red-logo.png" alt="" srcset="" />
					</Link>
					<div className="download">
						<Link to="https://th.bing.com/th/id/OIG.oAvoqHNli7n2MAJSkt59?pid=ImgGn"target="_blank">
							<img src=".././public/ps.png" alt="" srcSet="" />
						</Link>

						<Link to="https://th.bing.com/th/id/OIG.oAvoqHNli7n2MAJSkt59?pid=ImgGn"target="_blank">
							<img src=".././public/as.png" alt="" />
						</Link>
					</div>
				</div>
				<MDBContainer className="p-4">
					{/* <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section> */}

					<section className="footer-links">
						<MDBRow>
							<MDBCol lg="3" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Company</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-white">
											About us
										</a>
									</li>
									<li>
										<a href="#!" className="text-white">
											Homy's Blog
										</a>
									</li>
									<li>
										<a href="#!" className="text-white">
											Register as a Homy
										</a>
									</li>
									<li>
										<a href="#!" className="text-white">
											Careers
										</a>
									</li>
								</ul>
							</MDBCol>

							<MDBCol lg="3" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Our Services</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-white">
											Cooks
										</a>
									</li>
									<li>
										<a href="#!" className="text-white">
											House Cleaners
										</a>
									</li>
									<li>
										<a href="#!" className="text-white">
											Toilet Cleaners
										</a>
									</li>
									<li>
										<a href="#!" className="text-white">
											Baby Sitters
										</a>
									</li>
									<li>
										<a href="#!" className="text-white">
											Caretaker
										</a>
									</li>
								</ul>
							</MDBCol>

							<MDBCol lg="3" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Contact</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-white">
											info@homy.co
										</a>
									</li>
								</ul>
							</MDBCol>

							<MDBCol lg="3" md="6" className="mb-4 mb-md-0">
								<h5 className="text-uppercase">Legal</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-white">
											Refund Policy
										</a>
									</li>
									<li>
										<a href="#!" className="text-white">
											Privacy Policy
										</a>
									</li>
									<li>
										<a href="#!" className="text-white">
											Terms & Conditions
										</a>
									</li>
								</ul>
							</MDBCol>
						</MDBRow>
					</section>
					<div className="social">
						<Link to="https://www.facebook.com/people/Thehomy/61553486985244/ "target="_blank"style={{ color: '#FFF' }}>
							<MDBIcon
								fab
								icon="facebook"
								className="fb"
								size="lg"
							/>
						</Link>

						<Link to="https://twitter.com/thehomy_in" target="_blank"style={{ color: '#FFF' }}> 
							<MDBIcon
								fab
								icon="x-twitter"
								className="x"
								size="lg"
							/>
						</Link>
						<Link to="https://instagram.com/thehomy.in?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" style={{ color: '#FFF' }}>
							<MDBIcon
								fab
								icon="instagram"
								className="ig"
								size="lg"
							/>
						</Link>
						<Link to="" target="_blank"style={{ color: '#FFF' }}>
							<MDBIcon
								fab
								icon="linkedin-in"
								className="li"
								size="lg"
							/>
						</Link>
					</div>
				</MDBContainer>

				<a
					className="text-center  text-white"
					href="https://thehomy.co/"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
				>
					©2023 TheHomy
				</a>
			</MDBFooter>
		</>
	);
}
