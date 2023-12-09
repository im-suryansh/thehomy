import React from "react";
import "./Navbar.css";
import { LuLocateFixed } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="Navbar">
			<Link to="/">
				<div className="logo">
					<img src=".././public/logo.png" alt="logo" />
				</div>
			</Link>

			<form className="search">
				<img src="../public/search.png" alt="" />
				<input type="text" placeholder="Enter Your Location" />
				<button type="submit">
					<LuLocateFixed /> Locate me
				</button>
			</form>
			<div className="header-text">
				<div className="header-text2">
					<Link to="/" style={{ textDecorationLine: "none" }}>
						<div className="home">Home</div>
					</Link>
					<Link
						to="/AboutUs"
						style={{ color: "black", textDecorationLine: "none" }}
					>
						<span>About Us</span>
					</Link>

					<span>Services</span>

					<Link
						to="/contact"
						style={{ color: "black", textDecorationLine: "none" }}
					>
						<span>Contact Us</span>
					</Link>
				</div>
			</div>
			<Link to="/login" style={{ textDecorationLine: "none" }}>
				<div className="loginbtn">Login</div>
			</Link>

			<div className="ham">
				<RxHamburgerMenu />
			</div>
		</div>
	);
};

export default Navbar;
