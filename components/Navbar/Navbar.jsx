import React from "react";
import "./Navbar.css";
import { LuLocateFixed } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
	return (
		<div className="Navbar">
			<div className="logo">
				<img src=".././public/logo.png" alt="logo" />
			</div>
			<form className="search">
				<img src="../public/search.png" alt="" />
				<input type="text" placeholder="Enter Your Location"  />
				<button type="submit"><LuLocateFixed />  Locate me</button>
			</form>
			<div className="header-text">
                <div className="header-text2">
				<div className="home">Home</div>
                    <span>About Us</span>
                    <span>Services</span>
                    <span>Contact Us</span>
                </div>
			</div>
            <div className="loginbtn">Login</div>
			<div className="ham"><RxHamburgerMenu /></div>
		</div>
	);
};

export default Navbar;
